import keepApp from './apps/misterKeep/pages/keep-app.cmp.js'
import emailApp from './apps/misterEmail/page/email-app.cmp.js'


const routes = [
    {
        path: '/keep',
        component:keepApp
    },
    {
        path: '/mail',
        component:emailApp,
        children: [
            {
                path: ':mailId?',
                component: emailApp
            },       
        ]
    }
]

export const myRouter = new VueRouter({ routes })