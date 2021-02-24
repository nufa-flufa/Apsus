import keepApp from './pages/keep-app.cmp.js'
import emailApp from './misterEmail/page/email-app.cmp.js'


const routes = [
    {
        path: '/',
        component:keepApp
    },
    {
        path: '/a',
        component:emailApp
    }
]

export const myRouter = new VueRouter({ routes })