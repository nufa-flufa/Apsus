import toDo from './todo-display.cmp.js'
import textBox from './textbox-display.cmp.js'
import imageNote from './img-note-display.cmp.js'
import videoNote from './video-note-display.cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-display">
        <div class="pinned">
            <div v-if="notes" v-for="note in displayPinned" >
                <component :is="note.type" :note="note" @deleteNote="deleteNote" @editNote="editNote" @pin="sortNote" @colorChange="saveNoteClass"></component>
            </div>
        </div>
        <div class="seperator"></div>
        <div  class="not-pinned" >
            <div v-if="notes" v-for="note in displayUnPinned">
                <component :is="note.type" :note="note" @deleteNote="deleteNote" @editNote="editNote" @pin="sortNote"  @colorChange="saveNoteClass"></component>
            </div>
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
                buttons: ['Cancel','I\'m Sure'],
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
        saveNoteClass(note){
            console.log('hello')
            this.$emit('save-changes', note)
        }

       
    },
    computed:{
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