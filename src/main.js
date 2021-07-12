import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
import '../src/style/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
