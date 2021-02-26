import {keepService} from '../service/keep.service.js'
import textBox from './note-types/text-box.cmp.js'
import toDo from './note-types/to-do.cmp.js'
import imageNote from './note-types/img-note.cmp.js'
import videoNote from './note-types/video-note.cmp.js'

export default {
    props: ['noteType'],
    template: `
    <section>
    <button @click="closeAddModal" class="close">X</button>
        <form @submit.prevent="save">
            <component :is="noteType.type" :info="noteType.info" @setVal="saveNote"></component>
        </form>
    </section>
    `,

    data() {
        return {

        }
    },
    methods: {
        save(val) {
            console.log(val)
        },
        saveNote(note) {
            note.id = keepService.makeId()
            this.$emit('keep-note', note)
        },
        closeAddModal(){
            this.$emit('close-modal')
        }

    },
    components: {
        textBox,
        toDo,
        imageNote,
        videoNote
    }
}