export default {
    props: ['email'],
    template: `
    <section class="book-preview">
        <div>
            <p>Title: {{book.title}}</p>
        </div>
    </section>
    `,
    computed: {},
}