import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from './store'
import './global'
import './style/main.scss'
import firebase from 'firebase/compat/app'

import { firebaseConfig } from './services/firebase/firebaseConfig'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false



export function createApp() {
	const store = createStore()
	const app = new (Vue.extend({
		created() {
			this.$globalStore.dispatch(`currentUser/setAuth`, getAuth())
		},
		watch: {
			auth(newVal, oldVal) {
				if (newVal !== oldVal) {
					onAuthStateChanged(this.auth, (user) => {
						console.log('user')
						this.$globalStore.dispatch(`currentUser/setUser`, user)
					})
				}
			}
		},
		render: (h) => h(App),
		router,
		store,

	}))
	return app
}

async function loadApp() {
	const [app] = await Promise.all([
		createApp(),
	])

	app.$mount('#app')
}

loadApp()
