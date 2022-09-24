import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
	},
	{
		path: '/sign-in',
		name: 'SignIn',
		component: () => import(/* webpackChunkName: "about" */ '../views/SignIn.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
