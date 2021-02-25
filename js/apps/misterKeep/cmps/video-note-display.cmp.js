export default{
    props:['note'],
    template:`
        <section class="video note">
            <header>
                <button class="btn" @click="deleteVidNote">X</button>
                <h3>{{note.info.title}}</h3>
            </header>
            <div class="note-content">
                <iframe :src="note.info.vidUrl" ></iframe>
                <button  @click="editVid" >Edit</button>
            </div>
           
        </section>
    `,
    data(){
        return{
            color:null,
        }
    },

    methods:{
        deleteVidNote(){
            this.$emit('deleteNote', this.note)
        },
        editVid(){
            this.$emit('editNote', this.note)
       },
    //    editNoteColor(){
    //        console.log(this.color)
    //    }
    },
   
    created(){
    }
}