import bookPreview from './book-preview.cmp.js'
import { eventBus } from "../../../../service/event-bus.service.js"


export default {
    props: ['books'],
    template: `
    <ul class="book-list">
        <li v-for="book in books" :key="book.id" class="book-preview-container" >
            <book-preview :book="book" @click.native="logId(book.id)" />
            <div class="btns-container">
                <button @click="remove(book.id)">X</button>
                <router-link :to="'/book/'+book.id" >Details</router-link>
            </div>
        </li>
    </ul>
    `,
    methods: {
        logId(bookId){
            console.log(bookId);
            const msg = {
                txt: `You pressed the ${bookId} book`,
                type: 'success'
            }
            eventBus.$emit('show-msg', msg)
        },
        remove(bookId) {
            this.$emit('remove', bookId)
        },
        select(book) {
            this.$emit('selected', book)
        },
    },
    components:{
        bookPreview
    }
}
