import mailPreview from './email-preview.cmp.js'

export default {
    props: ['mails'],
    template: `
    <ul class="mail-list">
        <li v-for="mail in mails" :key="mail.id" class="mail-preview-container"  >
            <mail-preview :mail="mail"/>
            <div class="mail-btn-container">
                <button @click="remove(mail.id)">X</button>
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
    },
    created() {
    },
    components: {
        mailPreview,
    }
}