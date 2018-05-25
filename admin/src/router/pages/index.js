import login from './login.js'  // 登录页面相关路由
import activity from './activity.js'  // 登录页面相关路由

let pages = [].concat(activity)

let app = [{
  path: '/',
  component: resolve => require(['@/pages/index'], resolve),
  children: pages
}]

export default app.concat(login)
