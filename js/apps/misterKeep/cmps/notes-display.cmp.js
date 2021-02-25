import toDo from './todo-display.cmp.js'
import textBox from './textbox-display.cmp.js'
import imageNote from './img-note-display.cmp.js'
import videoNote from './video-note-display.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-display">
        <template v-for="note in notes">
           <component :is="note.type" :note="note" @deleteNote="deleteNote" @editNote="editNote"></component>
           </template>
    </section>
    `,
    methods:{
        deleteNote(note){
            this.$emit('delete', note.id)
        },
        editNote(note){
            console.log(note)
            this.$emit('edit', note.id)
        }

    },
    created() {
        console.log(this.notes)
    },
    components:{
        toDo,
        textBox,
        imageNote,
        videoNote
    }
}