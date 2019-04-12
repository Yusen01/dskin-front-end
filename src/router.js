const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}, {
    path: "/login",
    meta: {
        title: "登陆"
    },
    component: (resolve) => require(["./views/user/login.vue"], resolve)
}];
export default routers;