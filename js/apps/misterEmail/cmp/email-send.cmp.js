import {
    mailService
} from '../service/mail-service.js'

export default {
    template: `
    <section class="add-mail-modal">
            <div class=mail-header><span class="mail-logo">New Email</span><span class="btn exit-btn" @click="closeMail">X</span></div>
            <form @submit.prevent="sendMail" class="email-form">
                <input type="email" class=mail-input placeholder="Send to" v-model="mail.to" required/>
                <input type="text" class=mail-input placeholder="Subject" v-model="mail.subject" required/>
                <textarea placeholder="Body" v-model="mail.body" class="mail-body"></textarea>
                <div><button>send</button>  </div>
            </form>
    </section>
    `,
    data() {
        return {
            mail: null
        }
    },
    methods: {
        sendMail() {
            this.mail.sentAt = Date.now();
            mailService.save(this.mail).then(()=>{
                this.$emit('send');
            });
        },
        closeMail(){
            this.$emit('send');
        }
    },
    created() {
        this.mail = mailService.getEmptyMail();
    },
}