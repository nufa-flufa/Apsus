import emailList from '../cmp/email-list.cmp.js'
import emailNav from '../cmp/email-nav.cmp.js'
import emailSend from '../cmp/email-send.cmp.js'
import {
    mailService
} from '../service/mail-service.js'
import {
    eventBus
} from '../../../service/event-bus.service.js'

export default {
    template: `
        <section class="mail-container">
            <email-nav @filter="setFilter" @openMail="toggleMail"/><!-- NAV -->
            <email-list :mails="mailsToShow" @remove="removeMail" @stared="stared" @setSort="setSort"/><!-- email list --> 
            <!--<router-view :mails="mailsToShow" @remove="removeMail" @stared="stared"/>-->
            <email-send v-if="sending" @send="sendMail" />
        </section>
    `,
    data() {
        return {
            mails: [], //filled by nav
            filterBy: {
                folder: 'inbox',
                text: '',
                sortBy: 'dateUp',
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
                        if (folder === 'inbox') return (mail.from !== 'me')
                        else if (folder === 'starred') return (mail.isStar)
                        else if (folder === 'sent') return (mail.from === 'me')
                        else return true;
                    })
                    mails = mails.filter(mail => {
                        return (mail.subject.includes(this.filterBy.text) || mail.body.includes(this.filterBy.text))
                    })
                    let func;
                    if (this.filterBy.sortBy === 'dateDown') {
                        func = function (a, b) {
                            return (a.sentAt - b.sentAt)
                        }
                    }
                    if (this.filterBy.sortBy === 'dateUp') {
                        func = function (a, b) {
                            return (b.sentAt - a.sentAt)
                        }
                    }
                    if (this.filterBy.sortBy === 'textDown') {
                        func = function (a, b) {
                            let nameA = a.subject.toUpperCase();
                            let nameB = b.subject.toUpperCase();
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                        }
                    }
                    if (this.filterBy.sortBy === 'textUp') {
                        func = function (a, b) {
                            let nameA = a.subject.toUpperCase();
                            let nameB = b.subject.toUpperCase();
                            if (nameA < nameB) {
                                return 1;
                            }
                            if (nameA > nameB) {
                                return -1;
                            }
                        }
                    }
                    mails.sort(func);
                    this.mails = mails
                })
        },
        removeMail(mailId) {
            mailService.remove(mailId)
                .then(() => {
                    this.loadMails();
                    const msg = {
                        txt: 'Mail removed',
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg)
                })
        },
        setFilter(filterBy) {
            //console.log(filterBy);
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
        stared(mail) {
            mail.isStar = !mail.isStar;
            mailService.put(mail);
        },
        setSort(by) {
            this.filterBy.text = by.text;
            this.filterBy.sortBy = by.sortBy;
            console.log(this.filterBy.sortBy);
            this.loadMails();
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