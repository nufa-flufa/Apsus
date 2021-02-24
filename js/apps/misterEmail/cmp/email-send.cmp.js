import {
    mailService
} from '../service/mail-service.js'

export default {
    template: `
    <section class="add-mail-modal">
            <div class=mail-header> New Email </div>
            <form @submit.prevent="save" class="email-form">
                <input type="email" class=mail-input placeholder="Send to" v-model="mail.to" required/>
                <input type="text" class=mail-input placeholder="Subject" v-model="mail.subject" required/>
                <input type="text" class=mail-body placeholder="Body" v-model="mail.body" required/>
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
            mailService.save(mail);
        }
    },
    created() {
        this.mail = mailService.getEmptyMail();
    },
}