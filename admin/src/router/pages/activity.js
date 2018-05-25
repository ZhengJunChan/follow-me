const activity = [{
    path: '/activity',
    component: resolve => require(['@/pages/activity/home'], resolve)
}, {
    path: '/activity/release',
    component: resolve => require(['@/pages/activity/release'], resolve)
}];

export default activity;
