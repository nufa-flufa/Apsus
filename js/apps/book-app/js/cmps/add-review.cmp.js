
export default {
    props: ['reviews'],
    template: `
        <section>
            <h2>Reviews:</h2>
            <ul class="review-list">
                <li v-for="(review, idx) in reviews" class="review-preview-container">
                    <p><span class="review-span">by:</span> {{review.byName}}  -   {{review.rate}} ⭐</p>
                    <p>{{review.text}}</p>
                    <button @click="removeReview(idx)">X</button>

                </li>
            </ul>
            <form>
                <input type=text placeholder="Your Name" v-model="review.byName"/>
                <input type=text placeholder="Your Review" v-model="review.text"/>
                <ul class="review-rate">
                  <li v-for="star in 5" @click="setRate(star)" :class="{ fill : star <= review.rate }"></li>
                </ul>
                <button @click.prevent="addReview()">Add Review</button>
            </form> 
        </section>
    `,
    data() {
        return {
            review: {
                byName:'',
                text:'',
                rate:5
            }
        }
    },
    methods: {
        newReview(){
            return {
                byName:'',
                text:'',
                rate:5
            }
        },
        setRate(rate) {
          console.log('SET RATE', rate)
          this.review.rate = rate;
        },
        removeReview(idx) {
            this.$emit('removeReview', idx);
        },
        addReview() {
            console.log(this.review);
            this.$emit('addReview',this.review);
            this.review = this.newReview();
        },
    }
}