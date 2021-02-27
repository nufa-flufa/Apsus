import { keepService } from '../service/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import notesDisplay from '../cmps/notes-display.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

export default {
    template: `
    <section class="keep-app">
        <div class="add-zone">
            <button class="btn" @click="getType('textBox')"> Click for Note</button>
            <button  class="btn" @click="getType('to-do')"> Click for ToDo</button>
            <button  class="btn" @click="getType('imageNote')"> Click for Img</button>
            <button  class="btn" @click="getType('videoNote')"> Click for Video</button>
            <note-filter @filter="setFilter" />
        </div>
        <note-add v-if="noteType" :noteType="noteType" @keep-note="keepNote" @close-modal="closeAddModal"/>
        <notes-display  v-if="notes" :notes="displayNotes" @delete="deleteNote" @edit="editNote" @save-changes="savePinStatus"/>
    </section>
    `,
    data() {
        return {
            notes: '',
            noteType: null,
            userNotes: [],
            noteEdit: null,
            filterBy: 'all',
        }
    },
    methods: {
        loadNotes() {
            keepService.getNotes()
                .then(notes => this.notes = notes)
        },
        getType(val) {
            const type = keepService.getByType(val)
            this.noteType = type
        },

        keepNote(note) {
            console.log(note)
            if (this.noteEdit) {
                note.id = this.noteEdit
                keepService.updateNote(note)
                    .then(note => this.loadNotes())
                    swal('Your Note has been edited')

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
            keepService.getById(noteId)
                .then(note => {
                    this.getType(note.type)
                    this.noteEdit = noteId
                })
        },
        savePinStatus(note){
            keepService.updateNote(note)
        },
        setFilter(filter){
            this.filterBy = filter
            console.log('changed', this.filterBy)
        },
        closeAddModal() {
            this.noteType = null
        },


    },
    computed: {
        displayNotes(){
            if(this.filterBy === 'all') return this.notes;
            const notesToShow = this.notes.filter(note => note.type === this.filterBy)
            console.log('display notes result',notesToShow)
            return notesToShow
        },
       

    },
    created() {
        this.loadNotes()

    },
    components: {
        noteAdd,
        notesDisplay,
        noteFilter
    }
}