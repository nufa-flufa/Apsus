export default {
    template:`
    <header class="app-header">
        <div class="main-nav">
            <div class="logo">Appsus</div>
            <nav>
            <router-link active-class="active-link" to="/keep" exact>Keep</router-link> |
            <router-link active-class="active-link" to="/mail">Mail</router-link> |
            </nav>
        </div>
    </header>
    `,
}