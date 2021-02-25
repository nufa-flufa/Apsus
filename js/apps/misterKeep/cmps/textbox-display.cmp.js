export default{
    props:['note'],
    template:`
        <section class="textbox note">
            <header>
                <button class="btn" @click="deleteTextbox">X</button>
                <h3>{{note.info.title}}</h3>
            </header>
            <div class="note-content">
                <p>{{note.info.txt}}</p>
                <button  @click="editTextbox" >Edit</button>
            </div>        
        </section>
    `,
    data(){
        return{
            color:null,
        }
    },

    methods:{
        deleteTextbox(){
            this.$emit('deleteNote', this.note)
        },
        editTextbox(){
            this.$emit('editNote', this.note)
       },
    //    editNoteColor(){
    //        console.log(this.color)
    //    }
    },
   
    created(){
    }
}