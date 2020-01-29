import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import Notifications from 'vue-notification'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(Notifications)

new Vue({
  render: h => h(App),
}).$mount('#app')
