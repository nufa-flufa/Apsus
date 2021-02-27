export default {
    template:`
    <header class="app-header">
        <div class="main-nav main">
            <div class="logo">Appsus</div>
            <nav>
            <router-link active-class="active-link" to="/" exact>Home</router-link> |
            <router-link  active-class="active-link" to="/keep" exact>Keep</router-link> |
            <router-link  active-class="active-link" to="/mail">Mail</router-link> |
            <router-link  active-class="active-link" to="/book">Books</router-link> 
            </nav>
        </div>
    </header>
    `,
}