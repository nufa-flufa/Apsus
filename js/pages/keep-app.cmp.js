import { keepService } from '../service/keep.service.js'
import noteAdd from '../cmps/note-add.cmp.js' 

export default {
    template: `
    <section>
        <h2>{{header}}</h2>
        <button @click="getType('textBox')"> Click for Note</button>
        <button @click="getType('textBox')"> Click for ToDo</button>
        <button @click="getType('textBox')"> Click for Img</button>
        <note-add v-if="noteType" :noteType="noteType" />
    </section>
    `,
    data() {
        return {
            header: 'Hello',
            notes:'',
            noteType:null,
        }
    },
    methods:{
        getType(val){
            const type = keepService.getByType(val)
            this.noteType = type
        }

    },
    created(){
        this.notes = keepService.getNotes()
    },
    components:{
        noteAdd,
    }
}