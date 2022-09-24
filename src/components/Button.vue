<template>
	<component
		:is="to && !disabled ? 'router-link' : 'button'"
		:type="type"
		:to="computedTo"
		:disabled="disabled"
		class="base-button"
		:class="`background-${color}`"
		v-on="$listeners"
	>
		<slot />
	</component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: {
		color: { type: String, required: true },
		disabled: { type: Boolean, default: false },
		to: { type: undefined, default: null },
		type: { type: String, default: 'button' },

	},
	computed: {
		computedTo() {
			return this.disabled ? '' : this.to
		},
	}
})
</script>

<style lang="scss" scoped>
.base-button {
	cursor: pointer;
	margin: 6px 8px;
	outline: 0;
	user-select: none;
	padding: 0 12px;
	justify-content: center;
	display: inline-flex;
	align-items: center;
	vertical-align: middle;
	height: 31px;
	font-size: 15px;
	text-decoration: none;
	white-space: nowrap;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 2px;

	&:not(.background-white) {
		color: white;
	}
	&[disabled] {
		cursor: not-allowed;
	}
}
</style>
