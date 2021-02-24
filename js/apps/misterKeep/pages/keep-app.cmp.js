import { keepService } from '../service/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js' 
import notesDisplay from '../cmps/notes-display.cmp.js'

export default {
    template: `
    <section>
        <h2>{{header}}</h2>
        <button @click="getType('textBox')"> Click for Note</button>
        <button @click="getType('to-do')"> Click for ToDo</button>
        <button @click="getType('textBox')"> Click for Img</button>
        <note-add v-if="noteType" :noteType="noteType" @keep-note="keepNote"/>
        <notes-display  v-if="notes" :notes="notes" />
    </section>
    `,
    data() {
        return {
            header: 'Hello',
            notes:'',
            noteType:null,
            userNotes:[],
        }
    },
    methods:{
        getType(val){
            const type = keepService.getByType(val)
            this.noteType = type
        },

        keepNote(note){
            this.notes.push(note)
            this.noteType = null;
        }


    },
    created(){
        this.notes = keepService.getNotes()
        console.log(this.notes)
    },
    components:{
        noteAdd,
        notesDisplay
    }
}