import mailPreview from './email-preview.cmp.js'
import mailFilter from './email-filter.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="mail-list">
        <mail-filter @setSort="setSort" class="search-bar"/>
        <li v-for="(mail, idx) in mails" :key="mail.id" class="mail-preview-container" :class="{read: !mail.isRead}" @click="sendToReply(mail.id)" >
                <mail-preview :mail="mail" @stared="stared" />
                <div class="mail-btn-container">
                    <button @click.stop="remove(mail.id)" class="btn pointer">X</button>
                </div>
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
        sendToReply(id) {
            this.$router.push('/mail/' + id);
        },
        setSort(by) {
            this.$emit('setSort', by);
        },
    },
    components: {
        mailPreview,
        mailFilter,
    }
}