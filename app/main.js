import Vue from 'nativescript-vue'
import App from './components/App'
import VueDevtools from 'nativescript-vue-devtools'

if (TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// PLUGINS INIT
Vue.registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh)


// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  render: h => h('frame', [h(App)])
}).$start()