import {
    bookService
} from '../services/book-service.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
//import bookDetails from './book-details.cmp.js'
//import bookEdit from './book-edit.cmp.js'

export default {
    template: `
        <section class="book-app">
            <book-filter @filtered="setFilter" />
            <book-list :books="booksToShow" @remove="removeBook"/>
            <!--<book-details v-if="selectedBook" :book="selectedBook" @close="selectedBook = null" />
            <book-edit />-->
        </section>
    `,
    data() {
        return {
            books: [], //bookService.query(),
            //selectedBook: null,
            filterBy: null
        }
    },
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => this.books = books)
        },
        removeBook(bookId) {
            bookService.remove(bookId)
                .then(this.loadBooks)
        },
        /*selectBook(book) {
            this.selectedBook = book;
        },*/
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const searchStr = (this.filterBy.byTitle) ? this.filterBy.byTitle.toLowerCase() : "";
            const to = (this.filterBy.toPrice) ? this.filterBy.toPrice : +Infinity;
            const from = (this.filterBy.fromPrice) ? this.filterBy.fromPrice : 0;
            const booksToShow = this.books.filter(book => {
                return (book.title.toLowerCase().includes(searchStr) && from < book.listPrice.amount && book.listPrice.amount < to)
            })
            return booksToShow;
        }
    },
    created() {
        this.loadBooks();
    },
    components: {
        bookFilter,
        bookList,
    }
}