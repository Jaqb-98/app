import Vue from 'vue'

export interface IFormProvider {
	register(input: AppVue, inputKey?: string): void
	isDisabled(): boolean
	getFieldValue(fieldName: string): any
	getFormData(): any
}

export const Form = Vue.extend({
	provide() {
		return {
			form: {
				register: this.register,
				isDisabled: this.isDisabled,
				getFieldValue: this.getFieldValue,
				getFormData: this.getFormData,
			} as IFormProvider,
		}
	},
	inheritAttrs: false,
	props: {
		value: { type: Object, default: () => ({}) },
		disabled: { type: Boolean, default: false },
		changedFormData: { type: Object, default: () => ({}) },
	},
	created() {
		this.inputs = new Map()
	},
	methods: {
		register(input: AppVue, dtoKey?: string) {
			this.inputs.set(input.$vnode.key.toString(), input)
			const key = dtoKey || input.$vnode.key.toString()
			input.internalValue = this.value[key]
			input.$watch('internalValue', val => {
				if (!input.isEqualTo || input.isEqualTo && !input.isEqualTo(this.value[key])) {
					this.$emit('input', { ...this.value, [key]: val })
					this.$emit('update:changedFormData', { ...this.changedFormData, [key]: val })
					this.$emit('inputChanged', key)
				}
			})

			input.$watch(() => this.value[key], val => {
				input.internalValue = val
			})

			input.$once('hook:beforeDestroy', () => {
				this.unregister(input)
			})

			input.$on('blur', () => {
				this.$emit('inputBlur', key)
			})
			input.$on('focus', () => {
				this.$emit('inputFocus', key)
			})


		},
		unregister(input: AppVue) {
			this.inputs.delete(input.$vnode.key.toString())
		},
		isDisabled() {
			return false
		},
		getFieldValue(fieldName) {
			return this.value[fieldName]
		},
		getFormData() {
			return this.value
		},
	},
	render(createElement) {
		return createElement(
			'form',
			{
				on: { submit: e => this.$emit('submit', e) },
				class: 'flex-column'
			},
			this.$scopedSlots.default && this.$scopedSlots.default(),
		)
	},

})
