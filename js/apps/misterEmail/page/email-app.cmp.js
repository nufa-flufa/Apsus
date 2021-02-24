import emailList from '../cmp/email-list.cmp.js'
import emailNav from '../cmp/email-nav.cmp.js'
import emailSend from '../cmp/email-send.cmp.js'
import {
    mailService
} from '../service/mail-service.js'


export default {
    template: `
        <section class="mail-container">
            <email-nav @filter="setFilter" @sendMail="sendMail"/><!-- NAV -->
            <email-list :mails="mailsToShow" @remove="removeMail"/><!-- email list -->
            <email-send v-if="sening"/>
        </section>
    `,
    data() {
        return {
            mails: [], //filled by nav
            filterBy: 'inbox',
            sening:true,
        }
    },
    methods: {
        loadMails() {
            mailService.query()
                .then(mails => {
                    this.mails = mails
                })
        },
        removeMail(mailId) {
            mailService.remove(mailId)
                .then(this.loadMails)
        },
        setFilter(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy
        },
        sendMail(){
            
        }
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