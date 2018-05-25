import login from './login.js';  // 登录页面相关路由
import activity from './activity.js';  // 登录页面相关路由

let pages = [{
  path: '/',
  component: resolve => require(['@/pages/index'], resolve),
  children: [activity]
}]

pages = pages.concat(login);

export default pages
