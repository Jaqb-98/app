import Vue from 'vue'
import Vuex from 'vuex'
import currentUser from './globalStore/currentUser'

Vue.use(Vuex)

export type StoreState = {
	state
}

export type GlobalStoreState = {
	currentUser: typeof currentUser.state
}

export const globalStoreModules = {
	currentUser,
}

export function createStore() {
	return new Vuex.Store<StoreState>({
		getters: {
		},
		mutations: {
		},
		actions: {
		},
		modules: {
		}
	})
}

Vue.use(Vuex)
export const globalStore = new Vuex.Store<GlobalStoreState>({
	modules: globalStoreModules as any
})
