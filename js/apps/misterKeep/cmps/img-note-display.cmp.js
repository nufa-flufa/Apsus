export default{
    props:['note'],
    template:`
        <section class="image note">
            <header>
                <button class="btn" @click="deleteImgNote">X</button>
                <h3>{{note.info.title}}</h3>
            </header>
            <div class="note-content">
                <img :src="note.info.imgUrl" />
                <button  @click="editImg" >Edit</button>
            </div>
        </section>
    `,
    data(){
        return{
            color:null,
        }
    },

    methods:{
        deleteImgNote(){
            this.$emit('deleteNote', this.note)
        },
        editImg(){
            this.$emit('editNote', this.note)
       },
    //    editNoteColor(){
    //        console.log(this.color)
    //    }
    },
   
    created(){
    }
}