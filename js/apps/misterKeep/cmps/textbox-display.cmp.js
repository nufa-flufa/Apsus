export default{
    props:['note'],
    template:`
        <section class="textbox note">
            <header>
                <button class="btn delete" @click="deleteTextbox"><i class="far fa-trash-alt"></i></button>
                <button class="btn edit " @click="editTextbox" > <i class="fas fa-pencil-alt"></i></button>
                <button class="btn pin " @click="pinTextbox" > <i class="fas fa-thumbtack"></i></button>
                
                <h3>{{note.info.title}}</h3>
            </header>
            <div class="note-content">
                <p>{{note.info.txt}}</p>
            
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
       pinTextbox(){
           console.log('pinned')
       }
    },
  
   
    created(){
    }
}