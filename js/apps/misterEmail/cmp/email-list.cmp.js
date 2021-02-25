import mailPreview from './email-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="mail-list">
        <li v-for="(mail, idx) in mails" :key="mail.id" class="mail-preview-container" :class="{read: mail.isRead}" >
            <!--<router-link :to="'/mail/'+mail.id">-->
                <mail-preview :mail="mail" @stared="stared" />
                <div class="mail-btn-container">
                    <button @click="remove(mail.id)">X</button>
                </div>
            <!--</router-link>-->
        </li>
    </ul>
    `,
    methods: {
        remove(mailId) {
            this.$emit('remove', mailId)
        },
        select(mail) {
            this.$emit('selected', mail)
        },
        stared(mail) {
            this.$emit('stared', mail)
        },
    },
    computed: {},
    created() {},
    components: {
        mailPreview,
    }
}