import router from './routers';
import { indexRouter, useRouter, errorRouter } from './getRouter';
import { getPwdKey } from "../utils/utils";

// 添加参数，避免多次循环导致的错误
var getRouters,
    pKey = getPwdKey();

// 合并当前所有的路由
const newRouters = (to, next, getrouter) => {
    const routerArr = indexRouter.concat(useRouter).concat(errorRouter);
    router.addRoutes(routerArr);
    next({...to, replace: true});
};



// 路由跳转之前
router.beforeEach((to, from, next) => {
    if (!getRouters) {
        getRouters = true;
        newRouters(to, next);
    }
    if (!sessionStorage.getItem('pKey') && to.path !== '/lock') {
        next({
            path: '/lock'
        })
        return;
    } else if ((sessionStorage.getItem('pKey') !== pKey) && to.path !== '/lock') {
        next({
            path: '/lock'
        })
        return;
    } else if (to.path === '' || to.path === '/') {
        next({
            path: '/'
        })
        return;
    } else {
        next()
        return;
    }
})


export default router
