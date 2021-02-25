export default {
    props: ['mail'],
    template: `
    <section class="email-preview">
            <p class="star" :class="{stared: !isStar}" @click.stop="stared">{{isStarText}}</p>
            <p class="from">{{mail.from}}</p>
            <p class="mail-preview-subject">subject: {{subjectDeco}}</p>
            <p class="date">{{getDate}}</p>
    </section>
    `,
    computed: {
        isStar(){
            return (this.mail.isStar);
        },
        getDate(){
            const sentDate = new Date(this.mail.sentAt);
            return  sentDate.toLocaleString();
        },
        isStarText(){
            return (this.isStar)? '★' : '☆';
        },
        subjectDeco(){
            return this.mail.subject.substring(0,45);
        },
    },
    methods:{
        stared(){
            this.$emit('stared',this.mail)
        }
    }
}