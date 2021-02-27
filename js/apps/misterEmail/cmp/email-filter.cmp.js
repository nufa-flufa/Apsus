export default {
    template: `
    <form @submit.prevent="setFilter">
    <div>
        <label for="sort">Sort By: </label>
        <select name="sort" id="sort" v-model="by.sortBy">
            <option value="textUp">Text ↑</option>
            <option value="textDown">Text ↓</option>
            <option value="dateUp">Date ↑</option>
            <option value="dateDown">Date ↓</option>
        </select>
    </div>
    <div>
        <label for="search">Search: </label>
        <input type="text" name="search" id="search" v-model="by.text"/>
    </div>
    <button class="progress-btn">Sort & Search</button>
    </form>
        `

        ,
    data() {
        return {
            by: {
                text: '',
                sortBy: 'dateDown'
            }
        }
    },
    methods:{
        setFilter(){
            this.$emit('setSort',this.by);
        }
    }
}