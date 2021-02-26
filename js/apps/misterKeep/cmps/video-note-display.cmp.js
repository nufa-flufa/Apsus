export default{
    props:['note'],
    template:`
        <section class="video note">
            <header>
                <button class="btn delete" @click="deleteVidNote"><i class="far fa-trash-alt"></i></button>
                <button class="btn edit" @click="editVid" > <i class="fas fa-pencil-alt"></i></button>
                <button class="btn pin " @click="pinTextbox" > <i class="fas fa-thumbtack"></i></button>

                <h3>{{note.info.title}}</h3>
            </header>
            <div class="note-content">
                <iframe :src="note.info.vidUrl" ></iframe>
               
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
       pinTextbox(){
        console.log('pinned')
    }
    //    editNoteColor(){
    //        console.log(this.color)
    //    }
    },
   
    created(){
    }
}