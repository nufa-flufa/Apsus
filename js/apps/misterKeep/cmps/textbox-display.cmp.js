export default{
    props:['note'],
    template:`
        <section class="textbox note">
        <button class="btn" @click="deleteTextbox">X</button>
            <h3>{{note.info.title}}</h3>
            <p>{{note.info.txt}}</p>
        <!-- <pre>{{note}}</pre> -->
        </section>
    `,
    methods:{
        deleteTextbox(){
            this.$emit('deleteNote', this.note)
        }
    },
   
    created(){
    }
}