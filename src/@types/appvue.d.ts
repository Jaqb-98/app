import { Vue } from 'vue/types/vue'
import { Store } from 'vuex'
import { StoreState } from '../store/index'


type AnyFunction = (...args: any[]) => any

declare global {
	interface AppVue extends Vue {

		readonly $store: Store<StoreState>
		readonly $root: AppVue
		[key: string]: any | AnyFunction
	}
}
