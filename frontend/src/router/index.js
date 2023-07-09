import Vue from 'vue'
import Router from 'vue-router'
import Introduction from '../components/Introduction.vue'
import Contact from '../components/Contact.vue'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/', component: Introduction },
      { path: '/contato', component: Contact },
    ]
})

