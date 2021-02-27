import bookDescription from '../cmps/description.cmp.js'
import bookReview from '../cmps/add-review.cmp.js'
import {
    bookService
} from "../services/book-service.js";
import {
    eventBus
} from "../../../../service/event-bus.service.js"


export default {
    template: `
    <section v-if="book" class="book-details">
        <img class="detail-img" v-bind:src="book.thumbnail"/>
        <div class="book-info">
            <p>Title: {{book.title}}</p>
            <p :class="classObject">Price: {{getCurrency}}</p>
            <p>Subtitle: {{book.subtitle}}</p>
            <p>Authors: <span v-for="author in book.authors">{{author}},</span></p>
            <p>Publish Date: {{getPublishedDate}}</p>
            <book-description :desc="book.description"/>
            <p>Pages: {{getPageCount}}</p>
            <p>Categories: <span v-for="catagorie in book.catagorie">{{catagorie}},</span></p>
            <p>Language: {{book.language}}</p>
            <p class="sale" v-if=book.listPrice.isOnSale>SALE!!!!!!</p>
            <book-review :reviews="book.reviews" @addReview="addReview" @removeReview="removeReview"/>
            <router-link to="/book"> X </router-link>
        </div>  
    </section>
    `,
    data() {
        return {
            book: null
        }
    },
    methods: {
        loadDetails() {
            const id = this.$route.params.bookId
            bookService.getById(id)
                .then(book => this.book = book)
        },
        removeReview(reviewIdx) {
            this.book.reviews.splice(reviewIdx, 1);
            bookService.put(this.book).then(() => {
                this.loadDetails();
                const msg = {
                    txt: `You Removed a review from ${this.book.id} book`,
                    type: 'success'
                }
                eventBus.$emit('show-msg', msg);
            });
        },
        addReview(review) {
            // Optimistic approach
            this.book.reviews.push(review);
            console.log(this.book.reviews);
            console.log(review);
            bookService.save(this.book).then(() => {
                    const msg = {
                        txt: `You Add a review to ${this.book.id} book`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                })
                .catch(() => {
                    this.loadDetails();
                    // remove the review from the data
                })
        }
    },
    computed: {
        getCurrency() {
            return (this.book.listPrice.amount.toLocaleString('de-DE', {
                style: 'currency',
                currency: this.book.listPrice.currencyCode
            }))
        },
        getPageCount() {
            let text = '';
            if (this.book.pageCount > 500) text = 'Long reading'
            else if (this.book.pageCount > 200) text = 'Decent Reading'
            else text = 'Light Reading'
            return (`${this.book.pageCount} - ${text}`);
        },
        getPublishedDate() {
            let text = '';
            if (this.book.publishedDate > 10) text = 'Veteran Book'
            else if (this.book.publishedDate < 1) text = 'New!'
            return `${this.book.publishedDate} ${text}`;
        },
        classObject() {
            return {
                high: (this.book.listPrice.amount > 150),
                low: (this.book.listPrice.amount < 20)
            }
        },
    },
    created() {
        this.loadDetails();
    },
    components: {
        bookDescription,
        bookReview,
    }
}