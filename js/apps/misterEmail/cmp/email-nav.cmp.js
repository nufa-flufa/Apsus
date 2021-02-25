export default {
    template: `
    <section class="nav-bar">
        <div class="add-mail nav-btn pointer" @click="openMail()"><span class="plus">+</span> Compose</div>
        <div class="nav-btn pointer" @click="filter('inbox')">inbox</div>
        <div class="nav-btn pointer" @click="filter('starred')">Starred</div>
        <div class="nav-btn pointer" @click="filter('sent')">Sent Mail</div>
        <div class="nav-btn pointer" @click="filter('All')">All</div>
    </section>
    `,
    data() {
        return {

        }
    },
    methods: {
        filter(filterBy) {
            this.$emit('filter', filterBy);
        },
        openMail(){
            this.$emit('openMail');
        }
    },
}