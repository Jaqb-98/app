<template>
	<BasicModal @close="$emit('close')">
		<template v-slot:header> head </template>
		<template v-slot:content>
			<Form :value="formData" @input="updateFormData">
				<Input label="Display Name" key="displayName" />
			</Form>
		</template>
		<template v-slot:actions>
			<Button @click="updateProfile" color="primary"> Save </Button>
		</template>
	</BasicModal>
</template>

<script lang="ts">
import { updateProfile } from 'firebase/auth'
import Vue from 'vue'
import BasicModal from '../../components/modals/BasicModal.vue'

export default Vue.extend({
	components: {
		BasicModal,
	},
	data() {
		return {
			formData: {},
		}
	},
	methods: {
		updateFormData(newFormData) {
			this.formData = newFormData
		},
		updateProfile() {
			updateProfile(this.auth.currentUser, {
				...this.formData
			}).then(() => {
				this.$emit('close')
			}).catch((error) => {

			})
		}
	}
})
</script>
