import { keepService } from '../service/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js'
import notesDisplay from '../cmps/notes-display.cmp.js'
import noteFilter from '../cmps/note-filter.cmp.js'

export default {
    template: `
    <section class="keep-app main">
        <div class="add-note-zone">
            <button class="btn" @click="getType('textBox')"><i class="fas fa-sticky-note"></i> Note</button>
            <button  class="btn" @click="getType('to-do')"> <i class="fas fa-tasks"></i>ToDo</button>
            <button  class="btn" @click="getType('imageNote')"><i class="fas fa-camera-retro"></i> Img</button>
            <button  class="btn" @click="getType('videoNote')"><i class="fab fa-youtube"></i>Video</button>
            <note-filter @filter="setFilter" />
        </div>
        <note-add v-if="noteType" :noteType="noteType" @keep-note="keepNote" @close-modal="closeAddModal"/>
        <notes-display  v-if="notes" :notes="displayNotes" @delete="deleteNote" @edit="editNote" @save-changes="saveChanges"/>
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
                    .then(swal('Your note has been edited'))

            } else {
                keepService.saveNote(note)
                    .then(note => this.loadNotes())
                    .then(swal('Your note has been saved'))
            }
            this.noteType = null;
            this.noteEdit = null;
        },
        deleteNote(noteId) {
            keepService.deleteNote(noteId)
                .then(() => this.loadNotes())
        },
        editNote(noteId) {
            console.log(noteId);
            keepService.getById(noteId)
                .then(note => {
                    this.getType(note.type)
                    this.noteEdit = noteId
                })
        },
        saveChanges(note) {
            keepService.updateNote(note)
        },
        setFilter(filter) {
            this.filterBy = filter
            console.log('changed', this.filterBy)
        },
        closeAddModal() {
            this.noteType = null
        },


    },
    computed: {
        displayNotes() {
            if (this.filterBy === 'all') return this.notes;
            const notesToShow = this.notes.filter(note => note.type === this.filterBy)
            console.log('display notes result', notesToShow)
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