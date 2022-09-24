<template>
	<div class="input ma-2">
		<label :for="componentUid">{{ label }}</label>
		<div class="input-container">
			<div
				class="input-core"
				:class="{
					focus: focused,
					invalid: error,
					disabled: isDisabled,
				}"
			>
				<input
					:id="componentUid"
					ref="input"
					:value="internalValue"
					:placeholder="placeholder || label"
					:disabled="isDisabled"
					:type="inputType"
					:data-testid="$vnode.key || $attrs['data-testid']"
					v-bind="$attrs"
					@focus="onFocus"
					@blur="onBlur"
					@input="onInput"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { InputMixin } from './InputMixin'

export default Vue.extend({
	mixins: [InputMixin],
	props: {
		inputType: { type: String, default: 'text' },
	},
	data() {
		return {
			internalValue: '',
		}
	},
	computed: {
		inputRef() {
			return this.$refs.input
		},
	},
	methods: {
		onInput(event) {
			this.internalValue = event.target.value
		},
	},
})
</script>
