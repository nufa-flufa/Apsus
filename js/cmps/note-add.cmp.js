import textBox from './note-types/text-box.cmp.js'

export default {
    props: ['noteType'],
    template: `
    <section class="add-note">
        <h2>Note</h2>
        <form @submit.prevent="save">
            <component :is="noteType.type" :info="noteType.info" @setVal="saveNote"></component>
            <button>Click</button>
        </form>
    </section>
    `,

    data(){
        return{

        }
    },
    methods:{
        save(val){
            console.log(val)
        },
        saveNote(txt){
            console.log(txt)
        }
    },
    components:{
        textBox
    }
}