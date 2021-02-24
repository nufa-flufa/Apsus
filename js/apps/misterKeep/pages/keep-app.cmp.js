import { keepService } from '../service/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import notesDisplay from '../cmps/notes-display.cmp.js'

export default {
    template: `
    <section class="keep-app">
        <div class="add-zone">
            <button class="btn" @click="getType('textBox')"> Click for Note</button>
            <button  class="btn" @click="getType('to-do')"> Click for ToDo</button>
            <button  class="btn" @click="getType('textBox')"> Click for Img</button>
        </div>
        <note-add v-if="noteType" :noteType="noteType" @keep-note="keepNote"/>
        <notes-display  v-if="notes" :notes="notes" @delete="deleteNote"/>
    </section>
    `,
    data() {
        return {
            notes: '',
            noteType: null,
            userNotes: [],
        }
    },
    methods: {
        loadNotes() {
            keepService.getNotes()
                .then(notes => this.notes = notes)
            console.log(this.notes)
        },
        getType(val) {
            const type = keepService.getByType(val)
            console.log('type:',type)
            this.noteType = type
        },

        keepNote(note) {
            keepService.saveNote(note)
                .then(note => this.loadNotes())

            this.noteType = null;
        },
        deleteNote(noteId) {
            keepService.deleteNote(noteId)
                .then(()=>this.loadNotes())
        }
    },
    created() {
        this.loadNotes()
    },
    components: {
        noteAdd,
        notesDisplay
    }
}