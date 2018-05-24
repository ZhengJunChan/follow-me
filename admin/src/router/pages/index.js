import login from './login.js';  // 登录页面相关路由
// import home from './home.js';  // 登录页面相关路由

let pages = [{
  path: '/',
  component: resolve => require(['@/pages/index'], resolve)
}]

pages = pages.concat(login);

export default pages
