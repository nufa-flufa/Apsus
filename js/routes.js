import keepApp from './pages/keep-app.cmp.js'


const routes = [
    {
        path: '/',
        component:keepApp
    },
]

export const myRouter = new VueRouter({ routes })