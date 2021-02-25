export default {
    props: ['mail'],
    template: `
    <section class="email-preview">
            <p @click="stared">{{isStar}}</p>
            <p>from: {{mail.from}}</p>
            <p class="mail-preview-subject">subject: {{mail.subject}}</p>
            <p>{{getDate}}</p>
    </section>
    `,
    computed: {
        isStar(){
            return (this.mail.isStar)? '🌟' : '☆';
        },
        getDate(){
            const sentDate = new Date(this.mail.sentAt);
            return  sentDate.toLocaleString();
        },
    },
    methods:{
        stared(){
            this.$emit('stared',this.mail)
        }
    }
}