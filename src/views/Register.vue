<template>
	<div class="panel">
		<div class="title">Register</div>
		<Form :value="formData" :disabled="false" @input="updateFormData">
			<Input inputType="email" label="Email" key="email" />
			<Input inputType="password" label="Password" key="password" />
			<Button color="primary" @click="register"> Register </Button>
		</Form>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createUserWithEmailAndPassword } from "firebase/auth"

export default Vue.extend({
	data() {
		return {
			formData: {},
		}
	},
	methods: {
		updateFormData(newFormData) {
			this.formData = newFormData
		},
		register() {
			createUserWithEmailAndPassword(this.auth, this.formData.email, this.formData.password)
				.then((credentials) => {
					this.$globalStore.dispatch(`currentUser/getAuth`)
					this.$router.push('/')
				}).catch(error => {
					console.log(error.code)
					alert(error.message)
				})
		}
	}
})
</script>

<style lang="scss" scoped>
.panel {
	margin: auto;
	width: 40vh;
}
</style>
