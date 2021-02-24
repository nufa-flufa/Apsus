import emailList from '../cmp/email-list.cmp.js'
import emailNav from '../cmp/email-nav.cmp.js'
import emailSend from '../cmp/email-send.cmp.js'
import {
    mailService
} from '../service/mail-service.js'


export default {
    template: `
        <section class="mail-container">
            <email-nav @filter="setFilter" @openMail="toggleMail"/><!-- NAV -->
            <email-list :mails="mailsToShow" @remove="removeMail"/><!-- email list -->
            <email-send v-if="sending" @send="sendMail" />
        </section>
    `,
    data() {
        return {
            mails: [], //filled by nav
            filterBy: {
                folder: 'inbox',
                text: null
            },
            sending: false,
        }
    },
    methods: {
        loadMails() {
            mailService.query()
                .then(mails => {
                    const folder = this.filterBy.folder;
                    mails = mails.filter(mail => {
                        if(folder === 'index') return (mail.from !== 'me')
                        else if(folder === 'starred') return (mail.isStar)
                        else if(folder === 'sent') return (mail.from === 'me')
                        else return true;
                    })
                    this.mails = mails
                })
        },
        removeMail(mailId) {
            mailService.remove(mailId)
                .then(this.loadMails)
        },
        setFilter(filterBy) {
            console.log(filterBy);
            this.filterBy.folder = filterBy
            this.loadMails();
        },
        sendMail() {
            this.sending = false;
            this.loadMails();
        },
        toggleMail() {
            this.sending = !this.sending;
        },
    },
    computed: {
        mailsToShow() {
            return this.mails;
        }
    },
    created() {
        this.loadMails();
    },
    components: {
        emailList,
        emailNav,
        emailSend,
    }
}