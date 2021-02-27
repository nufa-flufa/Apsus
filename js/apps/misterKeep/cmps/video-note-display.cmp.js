export default {
    props: ['note'],
    template: `
        <section class="video note" :class="note.color">
            <header>
                <button class="btn delete" @click="deleteVidNote"><i class="far fa-trash-alt"></i></button>
                <button class="btn edit" @click="editVid" > <i class="fas fa-pencil-alt"></i></button>
                <button class="btn pin " @click="pinVidNote" > <i class="fas fa-thumbtack"></i></button>

                <h3>{{note.info.title}}</h3>
            </header>
            <div class="note-colors">
                <div class="color blue" @click="classNoteColor('blue')"></div>
                <div class="color yellow" @click="classNoteColor('yellow')"></div>
                <div class="color pink" @click="classNoteColor('pink')"></div>
                <div class="color green" @click="classNoteColor('green')"></div>
                <div class="color gray" @click="classNoteColor('gray')"></div>
                <div class="color white" @click="classNoteColor('white')"></div>
            </div>
            <div class="note-content">
                <iframe :src="note.info.vidUrl" ></iframe>
               
            </div>
           
        </section>
    `,
    methods: {
        deleteVidNote() {
            this.$emit('deleteNote', this.note)
        },
        editVid() {
            this.$emit('editNote', this.note)
        },
        pinVidNote() {
            this.$emit('pin', this.note)
        },
        classNoteColor(value){
            this.note.color = value
            this.$emit('colorChange', this.note)
        }
    },
    // computed: {
    //     classColor() {
    //         return this.currNoteColor
    //     }
    // },
}