export default {
    props: ['mail'],
    template: `
    <section class="email-preview" :class="isRead">
            <p>{{isStar}}</p>
            <p>from: {{mail.from}}</p>
            <p class="mail-preview-subject">subject: {{mail.subject}}</p>
    </section>
    `,
    computed: {
        isStar(){
            return (this.mail.isStar)? '🌟' : '☆';
        },
        isRead(){
            return (this.mail.isRead)? 'read' : '';
        }
    },
    created(){
    }
}