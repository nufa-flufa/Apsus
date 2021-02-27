export default {
    props: ['book'],
    template: `
    <section class="book-preview">
        <div>
            <p>Title: {{book.title}}</p>
            <p>Price: {{getCurrency}}</p>
        </div>
        <div class="small-img"> 
            <img class="small-img" v-bind:src="book.thumbnail"/>
        </div>
    </section>
    `,
    computed: {
        getCurrency() {
            return (this.book.listPrice.amount.toLocaleString('de-DE', {
                style: 'currency',
                currency: this.book.listPrice.currencyCode
            }))
        }
    },
}