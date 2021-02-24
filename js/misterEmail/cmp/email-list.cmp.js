export default {
    props: ['mails'],
    template: `
    <ul class="email-list">
        <li v-for="mail in mails" :key="mail.id" class="mail-preview-container">
            as
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
        console.log('sad');
    },
    components: {
    }
}