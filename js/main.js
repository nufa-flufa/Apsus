import {
    myRouter
} from './routes.js'
import appHeader from './main-cmps/app-header.cmp.js'
import userMsg from './main-cmps/user-msg.cmp.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section class="app-container">
        <user-msg/>
        <app-header />
        <router-view  class="main-screen"/>
        <footer>footer</footer>
    </section>
    `,

    components: {
        appHeader,
        userMsg
    }
}

const app = new Vue(options)