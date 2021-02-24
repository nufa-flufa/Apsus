import toDo from './todo-display.cmp.js'
import textbox from './textbox-display.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-display">
        <template v-for="note in notes" class="note">
            <header>hedaer</header>
           <component :is="note.type" :info="note.info"></component>
           <!-- <p>{{note}}</p> -->
           </template>
    </section>
    `,
    created() {
        console.log(this.notes)
    },
    components:{
        toDo,
        textbox,
    }
}