import { keepService } from '../service/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import notesDisplay from '../cmps/notes-display.cmp.js'

export default {
    template: `
    <section class="keep-app">
        <div class="add-zone">
            <button class="btn" @click="getType('textBox')"> Click for Note</button>
            <button  class="btn" @click="getType('to-do')"> Click for ToDo</button>
            <button  class="btn" @click="getType('imageNote')"> Click for Img</button>
            <button  class="btn" @click="getType('videoNote')"> Click for Video</button>
            
        </div>
        <note-add v-if="noteType" :noteType="noteType" @keep-note="keepNote" @close-modal="closeAddModal"/>
        <notes-display  v-if="notes" :notes="notes" @delete="deleteNote" @edit="editNote"/>
    </section>
    `,
    data() {
        return {
            notes: '',
            noteType: null,
            userNotes: [],
            noteEdit: null,
        }
    },
    methods: {
        loadNotes() {
            keepService.getNotes()
                .then(notes => this.notes = notes)
        },
        getType(val) {
            const type = keepService.getByType(val)
            // console.log('type:', type)
            this.noteType = type
        },

        keepNote(note) {
            console.log(note)
            if (this.noteEdit) {
                    console.log('keepNote check',note.id)
                    note.id = this.noteEdit
                keepService.updateNote(note)
                    .then(note => this.loadNotes())
            } else {
                keepService.saveNote(note)
                    .then(note => this.loadNotes())
            }
            this.noteType = null;
            this.noteEdit = null;
        },
        deleteNote(noteId) {
            keepService.deleteNote(noteId)
                .then(() => this.loadNotes())
        },
        editNote(noteId) {
            // console.log('note id start:', noteId)
            keepService.getById(noteId)
            .then(note => {
                    // console.log('note id after reqeust:', note)

                   this.getType(note.type)
                    // console.log('got type it with async',this.noteType)
                    this.noteEdit = noteId
                    // console.log('got id it with async',this.noteEdit)
                })
        },
        closeAddModal(){
            this.noteType = null
        }
    },
    created() {
        this.loadNotes()

    },
    computed:{
      
    },
    components: {
        noteAdd,
        notesDisplay
    }
}