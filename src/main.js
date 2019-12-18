import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router/router.js'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
