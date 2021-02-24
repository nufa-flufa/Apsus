export default {
    template: `
    <section>
        <div class="add-mail" @click="sendMail()"><span class="plus">+</span> Compose</div>
        <div class="nav-btn" @click="filter('inbox')">inbox</div>
        <div class="nav-btn" @click="filter('starred')">Starred</div>
        <div class="nav-btn" @click="filter('sent')">Sent Mail</div>
        <div class="nav-btn" @click="filter('draft')">Draft</div>
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
        sendMail(){
            this.$emit('sendMail');
        }
    },
}