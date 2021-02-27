export default {
    template: `
    <section class="book-filter">
        <label> Search a book: </label>    
        <input type="text" @input="setFilter" placeholder="By name" v-model="filterBy.byTitle">
        <span>From:</span>
        <input type="number" @input="setFilter" placeholder="From" v-model.number="filterBy.fromPrice">
        <span>To:</span>
        <input type="number" @input="setFilter" placeholder="To" v-model.number="filterBy.toPrice">
    </section>
    `,
    data() {
        return {
            filterBy: {
                byTitle: '',
                fromPrice: 0,
                toPrice: Infinity,
            }
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', {...this.filterBy});
        }
    }
}