import toDo from './todo-display.cmp.js'
import textBox from './textbox-display.cmp.js'
import imageNote from './img-note-display.cmp.js'
import videoNote from './video-note-display.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-display">
        <div v-if="notes" v-for="note in displayPinned" class="pinned">
           <component :is="note.type" :note="note" @deleteNote="deleteNote" @editNote="editNote" @pin="sortNote"></component>
        </div>
        <br>
        <div v-if="notes" v-for="note in displayUnPinned" class="not-pinned">
           <component :is="note.type" :note="note" @deleteNote="deleteNote" @editNote="editNote" @pin="sortNote"></component>
        </div>
    </section>
    `,
    data() {
        return {
            // sortedNotes: {}
        }
    },
    methods: {
        deleteNote(note) {
            swal({
                title: "Are you sure?",
                text: "Once deleted, you will not be able to recover this note",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Done! Your note has been deleted!", {
                            icon: "success",
                        });
                        this.$emit('delete', note.id)
                    } else {
                        swal("No Worries, Your note is safe!");
                    }
                });
        },
        editNote(note) {
            // console.log(note)
            this.$emit('edit', note.id)
        },
        sortNote(note) {
            let changedNote = this.notes.find(cahngedNote => cahngedNote.id === note.id)
            console.log(changedNote)
            changedNote.isPinned = !changedNote.isPinned
            console.log( note.isPinned)
            this.$emit('save-changes', note)
        },

       
    },
    computed:{
        // sortNotes() {
        //     var sortedNotes = { pinned: [], notPinned: [] }
        //     this.notes.forEach(note => {
        //         console.log(note.isPinned)
        //         if (note.isPinned) sortedNotes.pinned.push(note)
        //         else sortedNotes.notPinned.push(note)
        //     })
        //     return sortedNotes
        // },
        displayPinned(){
           var pinned = this.notes.filter(note => note.isPinned)
           console.log('pinned',pinned)
           return pinned
        },
        displayUnPinned(){
           var pinned = this.notes.filter(note => !note.isPinned)
           console.log('unPinned', pinned)
           return pinned
        }

    },
    created() {
        // this.sortNotes()
        console.log('notes to display',this.notes)
    },
    components: {
        toDo,
        textBox,
        imageNote,
        videoNote
    }
}