<template>
	<button
		:disabled="disabled"
		:class="`background-${color}`"
		v-on="$listeners"
	>
		<slot />
	</button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	props: {
		color: { type: String, required: true },
		disabled: { type: Boolean, default: false },
	},
})
</script>

<style lang="scss" scoped>
button {
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
