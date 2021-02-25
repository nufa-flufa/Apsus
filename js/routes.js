import keepApp from './apps/misterKeep/pages/keep-app.cmp.js'
import emailApp from './apps/misterEmail/page/email-app.cmp.js'
import emailDetail from './apps/misterEmail/page/email-detail.js'
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
    }
]

export const myRouter = new VueRouter({
    routes
})