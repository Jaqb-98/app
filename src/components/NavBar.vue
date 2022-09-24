<template>
	<div>
		<nav class="space-between">
			<router-link to="/"> Home </router-link>
			<div>
				<router-link to="/register"> Register </router-link> |
				<router-link to="/sign-in"> Login </router-link>
			</div>
		</nav>
		<router-view />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({

})
</script>
