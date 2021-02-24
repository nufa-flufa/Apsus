
const options={
    el:'#app',
    reouter:myRouter,
    template:`
    <section>
        <app-header />
        <router-view />
        <footer>footer</footer>
    </section>
    `,
}

const app = new Vue(options)