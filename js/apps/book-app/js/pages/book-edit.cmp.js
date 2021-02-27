import {
    bookService
} from '../services/book-service.js'

export default {
    template: `
   <section class="book-edit">
        <h3>Book Add</h3>
        <form @submit.prevent="save">
            <input type="text" placeholder="Vendor" v-model="bookToEdit.vendor">
            <input type="number" placeholder="Max speed" v-model.number="bookToEdit.maxSpeed">
            <button>Save!</button>
        </form>
   </section>
    `,
    data() {
        return {
            bookToEdit: bookService.getEmptyBook()
        }
    },
    methods: {
        save() {
            bookService.save(this.bookToEdit)
            this.bookToEdit = bookService.getEmptyBook()
        }
    }
}