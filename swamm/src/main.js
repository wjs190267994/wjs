import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fastclick from 'fastclick'
import vuelazyload from 'vue-lazyload'


Vue.prototype.$bus = new Vue();
// Vue.use(Fastclick)
Vue.use(vuelazyload)
Fastclick.attach(document.body);
console.log('this is wjsbranch push');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
