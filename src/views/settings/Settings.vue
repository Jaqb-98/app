<template>
	<div>
		<Button @click="showModal = true" color="primary"> Profile </Button>
		<UserInfoSettings v-if="showModal" @close="showModal = false" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import UserInfoSettings from './UserInfoSettings.vue'

export default Vue.extend({
	components: {
		UserInfoSettings,
	},
	data() {
		return {
			showModal: false,
			formData: {},
		}
	},
	methods: {
		updateFormData(newFormData) {
			this.formData = newFormData
		},
	}
})
</script>
