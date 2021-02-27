export default {
    template: `
<section class="note-filter">
    <label for="noteTypes" ></label>
    <select id="noteTypes" @change="setFilter" v-model="filterBy">
        <option value="all" default>All</option>
        <option value="textBox">Simple Note</option>
        <option value="to-do">To-Do Note</option>
        <option value="image-note">Picture Note</option>
        <option value="video-note">Video Note</option>
 
    </select>
    
</section>
    `,
    data(){
        return{
            filterBy: null,
        }
    },
    methods: {
        setFilter() {
            // console.log(this)
            this.$emit('filter', this.filterBy)
        }
    }
}