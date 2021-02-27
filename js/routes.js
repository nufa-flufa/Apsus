import keepApp from './apps/misterKeep/pages/keep-app.cmp.js'
import emailApp from './apps/misterEmail/page/email-app.cmp.js'
import emailDetail from './apps/misterEmail/page/email-detail.cmp.js'
import homePage from './main-cmps/home-page.cmp.js'
import bookApp from './apps/book-app/js/pages/book-app.cmp.js';
import bookDetails from './apps/book-app/js/pages/book-details.cmp.js'
//import emailList from './apps/misterEmail/cmp/email-list.cmp.js'

const routes = [{
        path: '/keep',
        component: keepApp
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
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