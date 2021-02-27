import {
    mailService
} from '../service/mail-service.js'
import {
    eventBus
} from '../../../service/event-bus.service.js'


export default {
    template: `
    <section v-if="mail" class="mail-detail-container">
        <h2>{{mail.subject}}</h2>
        <div class="mail-details">
            <div class="from-to-container">
                <h4>from: {{mail.from}} → {{getTo}}</h4>
            </div>
            <p>{{getDate}}</p>
        </div>
        <div class="mail-body">
            <pre>{{mail.body}}</pre>
        </div>
        <div v-if="isReply" class="reply-msg">
            <textarea v-model="mail.body" class="mail-body"></textarea>
            <div>
                <button @click="send">Send reply</button>
                <button @click="moveToNotes">Move to notes</button>
                <button @click="deleteMail">Delete mail</button>
            </div>
        </div>
        <button @click="reply">More Options</button>
    </section>
`,
    data() {
        return {
            mail: null,
            isReply: false,
            isEdit: false,
        }
    },
    methods: {
        moveToNotes() {
            eventBus.$emit('mailToNote', this.mail);
            this.$router.push('/keep');
        },
        deleteMail() {
            mailService.remove(this.mail.id);
            this.$router.push('/mail');
        },
        loadMail() {
            const id = this.$route.params.mailId
            mailService.getById(id)
                .then(mail => {
                    this.mail = mail;
                    this.mail.isRead = true;
                    mailService.save(this.mail);
                })
        },
        reply() {
            this.isReply = !this.isReply;
            if (!this.isEdit) {
                this.mail.body += `
            
            //Re-Answer -- write your answer below this line
            
            `
                this.isEdit = true;
            }
        },
        send() {
            const reMail = mailService.getEmptyMail()
            reMail.body = this.mail.body;
            reMail.to = [].push(this.mail.from);
            reMail.subject = 'Re\\ ' + this.mail.subject;
            reMail.sentAt = Date.now();
            mailService.save(reMail).then(() => {
                this.$router.push('/mail');
                const msg = {
                    txt: 'Reply sent',
                    type: 'success'
                }
                eventBus.$emit('show-msg', msg)
            }).catch(err => {
                const msg = {
                    txt: 'Error, please try again later',
                    type: 'error'
                }
                eventBus.$emit('show-msg', msg)
            })
        },
    },
    computed: {
        getDate() {
            const sentDate = new Date(this.mail.sentAt);
            return sentDate.toLocaleString();
        },
        getTo() {
            return this.mail.to;
        },
        replyText() {
            return (this.isReplay) ? 'close' : 'replay';
        }
    },
    created() {
        this.loadMail();
    }
}