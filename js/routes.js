import keepApp from './misterKeep/pages/keep-app.cmp.js'
import emailApp from './misterEmail/page/email-app.cmp.js'


const routes = [
    {
        path: '/keep',
        component:keepApp
    },
    {
        path: '/mail',
        component:emailApp
    }
]

export const myRouter = new VueRouter({ routes })