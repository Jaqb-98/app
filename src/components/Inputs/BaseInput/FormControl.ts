import Vue from 'vue'
const defaultForm = {
	register: () => {},
	isDisabled: () => false,
}
export const FormControl = Vue.extend({
	provide: {
		form: null,
	},
	inject: {
		form: {
			default: () => defaultForm,
		},
	},
	computed: {
		isDisabled() {
			if (this.form?.isDisabled()) {
				return true
			}
			if ('disabled' in this.$attrs) {
				return !((this.$attrs.disabled as any) === false)
			}
			return false
		},
	},
	created() {
		this.form && this.form.register(this)
	},
})
