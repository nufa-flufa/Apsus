import {myRouter} from './routes.js'
import appHeader from './main-cmps/app-header.cmp.js'


const options={
    el:'#app',
    router:myRouter,
    template:`
    <section class="app-container">
        <app-header />
        <router-view  class="main-screen"/>
        <footer>footer</footer>
    </section>
    `,

    components:{
        appHeader
    }
}

const app = new Vue(options)