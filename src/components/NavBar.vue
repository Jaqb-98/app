<template>
	<div>
		<nav class="space-between">
			<router-link to="/"> Home </router-link>
			<div v-if="!user">
				<router-link to="/register"> Register </router-link> |
				<router-link to="/sign-in"> Login </router-link>
			</div>
			<div v-else>
				<router-link to="/settings"> Settings </router-link> |
				<a class="clickable" @click="logout"> Logout </a>
			</div>
		</nav>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	computed: {
		user() {
			return this.auth.currentUser
		}
	},
	methods: {
		logout() {
			this.auth.signOut()
		}
	}
})
</script>
