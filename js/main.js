import {
    myRouter
} from './routes.js'
import appHeader from './main-cmps/app-header.cmp.js'
import userMsg from './main-cmps/user-msg.cmp.js'

//console.log = function() {};
//console.error('task failed successfully');
//console.error= function() {};

const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section class="app-container">
        <user-msg/>
        <app-header />
        <router-view  class="main-screen"/>
        <footer class="footer">I'm just a footer don't mind me</footer>
    </section>
    `,

    components: {
        appHeader,
        userMsg
    }
}

const app = new Vue(options)