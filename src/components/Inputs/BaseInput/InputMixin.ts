
import { FormControl } from './FormControl'
import Vue from 'vue'

export const InputMixin = Vue.extend({
	mixins: [FormControl],
	inheritAttrs: false,
	props: {
		label: { type: String, required: true },
		placeholder: { type: String, default: '' },
		required: { type: Boolean, default: false },
		rules: { type: Array, default: () => [] },
		value: { type: [String, Number], default: '' },
	},
	data() {
		return {
			focused: false,
			touched: false,
			invalid: false,
		}
	},
	computed: {
		hasValue() {
			return !!this.internalValue || this.internalValue === 0
		},
		computedRules() {
			const rules = [...this.rules]
			return rules.concat(this.internalRules || [])
		},
		error() {
			if (!this.touched) {
				return null
			}
			for (const rule of this.computedRules) {
				const msg = rule(this.internalValue)
				if (typeof msg === 'string') {
					return msg
				}
			}
			return null
		},
	},
	watch: {
		value: {
			handler(value) {
				this.internalValue = value
			},
			immediate: true,
		},
		internalValue(value) {
			this.$emit('input', value)
		},
	},
	methods: {
		onFocus() {
			this.focused = true
			this.$emit('focus')
		},
		onBlur() {
			this.touched = true
			this.focused = false
			this.$emit('blur')
		},
	},
})
