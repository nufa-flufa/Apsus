import {keepService} from '../service/keep.service.js'
import textBox from './note-types/text-box.cmp.js'
import toDo from './note-types/to-do.cmp.js'

export default {
    props: ['noteType'],
    template: `
    <section class="add-note">
        <h2>Note</h2>
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
        }
    },
    components: {
        textBox,
        toDo,
    }
}