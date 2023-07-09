import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import GetValue from '../components/GetValue.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: HelloWorld },
      { path: '/contato', component: GetValue },
    ]
})

