export default {
    props: ['statistic'],
    template: `
    <section class="add-zone"> <!-- nav-bar -->
        <div class="btn btn-mail add-mail pointer" @click="openMail()"><span class="plus">+</span> Compose</div>
        <div class="btn btn-mail pointer" @click="filter('inbox')">inbox</div>
        <div class="btn btn-mail pointer" @click="filter('starred')">Starred</div>
        <div class="btn btn-mail pointer" @click="filter('sent')">Sent Mail</div>
        <div class="btn btn-mail pointer" @click="filter('All')">All</div>
        <div class="my-progress">
            <div class="my-bar" ref="bar">{{percentage}}% Read</div>
        </div>
        <button @click="progressBar" class="progress-btn"> Load Bar </button>
    </section>
    `,
    data() {
        return {
            i: 0,
            width: 1,
            interval: null,
        }
    },
    methods: {
        filter(filterBy) {
            this.$emit('filter', filterBy);
        },
        openMail() {
            this.$emit('openMail');
        },
        progressBar() {
            if (this.i == 0) {
                this.i = 1;
                this.interval = setInterval(this.frame, 25);

            }
        },
        frame() {
            if (this.width >= Math.floor((this.statistic[1] * 100) / this.statistic[0])) {
                clearInterval(this.interval);
                this.interval = null;
                this.i = 0;
                this.width = 0;
            } else {
                this.width++;
                this.$refs.bar.style.width = this.width + "%";
            }
        },
    },
    computed: {
        percentage() {
            return Math.floor((this.statistic[1] * 100) / this.statistic[0]);
        }
    },
    mounted(){
        this.progressBar();
    },
    destroyed(){
        clearInterval(this.interval);
        this.interval = null;
    },
}