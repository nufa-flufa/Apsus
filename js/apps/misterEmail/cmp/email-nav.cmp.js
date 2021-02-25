export default {
    template: `
    <section>
        <div class="add-mail nav-btn" @click="openMail()"><span class="plus">+</span> Compose</div>
        <div class="nav-btn" @click="filter('inbox')">inbox</div>
        <div class="nav-btn" @click="filter('starred')">Starred</div>
        <div class="nav-btn" @click="filter('sent')">Sent Mail</div>
        <div class="nav-btn" @click="filter('All')">All</div>
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