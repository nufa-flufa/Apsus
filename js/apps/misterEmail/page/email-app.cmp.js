import emailList from '../cmp/email-list.cmp.js'
import emailNav from '../cmp/email-nav.cmp.js'
import {
    mailService
} from '../service/mail-service.js'


export default {
    template: `
        <section class="mail-container">
            <email-nav/><!-- NAV -->
            <email-list :mails="mailsToShow"/><!-- email list -->

        </section>
    `,
    data() {
        return {
            mails: [], //filled by nav
            filterBy: null
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
            this.filterBy = filterBy
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
    }
}