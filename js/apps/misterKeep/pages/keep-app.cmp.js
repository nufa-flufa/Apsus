import { keepService } from '../service/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import notesDisplay from '../cmps/notes-display.cmp.js'

export default {
    template: `
    <section class="keep-app">
        <h2>{{header}}</h2>
        <button @click="getType('textBox')"> Click for Note</button>
        <button @click="getType('to-do')"> Click for ToDo</button>
        <button @click="getType('textBox')"> Click for Img</button>
        <note-add v-if="noteType" :noteType="noteType" @keep-note="keepNote"/>
        <notes-display  v-if="notes" :notes="notes" @delete="deleteNote"/>
    </section>
    `,
    data() {
        return {
            header: 'Hello',
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
            this.noteType = type
        },

        keepNote(note) {
            keepService.saveNote(note)
                .then(note => this.loadNotes())

            this.noteType = null;
        },
        deleteNote(noteId) {
            keepService.deleteNote(noteId)
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