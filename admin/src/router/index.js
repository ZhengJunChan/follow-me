import VueRouter from 'vue-router'

import Pages from './pages'

let routers = [{
    path: '*',
    redirect: '/'
}];

routers = routers.concat(Pages);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

export default router
