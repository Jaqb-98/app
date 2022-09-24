import { ActionContext } from 'vuex'
import { StoreState } from '../index'
import { getAuth, Auth } from "firebase/auth"


const state = {
	user: null,
	auth: null as Auth
}

const SET_AUTH = 'SET_AUTH'
const SET_USER = 'SET_USER'

const actions = {
	getAuth({ commit, state }: ActionContext<typeof state, StoreState>): Auth {
		const auth = getAuth()
		console.log(auth)
		commit('SET_AUTH', auth)
		return auth
	},
	setAuth({ commit }: ActionContext<typeof state, StoreState>, auth) {
		commit(SET_AUTH, auth)
	},
	setUser({ commit }: ActionContext<typeof state, StoreState>, user) {
		commit(SET_USER, user)
	},
}

const mutations = {
	[SET_AUTH](storeState: typeof state, auth: Auth): void {
		storeState.auth = auth
	},
	[SET_USER](storeState: typeof state, user): void {
		storeState.user = user
	},
}

export default {
	state,
	actions,
	mutations,
	namespaced: true,
}
