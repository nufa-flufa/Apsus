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
            <textarea v-model="replyTxt" class="mail-body"></textarea>
            <div>
                <button @click="send">Send reply</button>
                <button @click="moveToNotes">Move to notes</button>
                <button @click="deleteMail">Delete mail</button>
            </div>
        </div>
    </section>
`,
    data() {
        return {
            mail: null,
            isReply: true,
            isEdit: false,
            replyTxt:`
            //Re-Answer -- write your answer below this line
            `,
        }
    },
    methods: {
        moveToNotes() {
            eventBus.$emit('mailToNote', this.mail);
            const msg = {
                txt: 'Mail moved to notes',
                type: 'success'
            }
            eventBus.$emit('show-msg', msg);
            this.$router.push('/keep');
        },
        deleteMail() {
            mailService.remove(this.mail.id);
            const msg = {
                txt: 'Mail removed',
                type: 'success'
            }
            eventBus.$emit('show-msg', msg);
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
        send() {
            console.log('send');
            const reMail = mailService.getEmptyMail();
            reMail.body = this.mail.body+this.replyTxt;
            reMail.to = [].push(this.mail.from);
            reMail.subject = 'Re\\ ' + this.mail.subject;
            reMail.sentAt = Date.now();
            mailService.save(reMail).then(() => {
                console.log('sent');
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