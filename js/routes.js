import keepApp from './apps/misterKeep/pages/keep-app.cmp.js'
import emailApp from './apps/misterEmail/page/email-app.cmp.js'
import emailDetail from './apps/misterEmail/page/email-detail.cmp.js'
import homePage from './main-cmps/home-page.cmp.js'
//import emailList from './apps/misterEmail/cmp/email-list.cmp.js'

const routes = [{
        path: '/keep',
        component: keepApp
    },
    {
        path: '/mail',
        component: emailApp,
        children: []
    },
    {
        path: '/mail/:mailId?',
        component: emailDetail
    },
    {
        path: '/',
        component: homePage
    }
]

export const myRouter = new VueRouter({
    routes
})