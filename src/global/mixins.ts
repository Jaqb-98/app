import { Auth } from 'firebase/auth'
import { globalStore } from '../store'

let uid = 0

const computed = {
	componentUid() {
		return `id-${uid++}`
	},

	$globalStore() {
		return globalStore
	},

	auth(): Auth {
		return this.$globalStore.state.currentUser.auth || {}
	},
}

const methods = {}

export const GlobalMixin = { computed, methods }
