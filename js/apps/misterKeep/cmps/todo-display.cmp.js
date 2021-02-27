

export default{
    props:['note'],
    template:`
        <section class="todo note">
            <header>
                <button class="btn delete" @click="deleteTodo"><i class="far fa-trash-alt"></i></button>
                <button class="btn edit" @click="editTodo" > <i class="fas fa-pencil-alt"></i></button>
                <button class="btn pin " @click="pinTodo" > <i class="fas fa-thumbtack"></i></button>
            </header>
            <div class="note-content">
            <ul>
                <li  v-for="todo in note.info.todos" >
                <input type="checkbox" name="todo" value="todo"  />
                <label for="todo" >{{todo.txt}} {{dateFormat}}</label>    
                </li>
            </ul>
            
            </div>
        </section>
    `,
    methods:{
        deleteTodo(){
            this.$emit('deleteNote', this.note)
        },
       editTodo(){
            this.$emit('editNote', this.note)
       },
       pinTodo(){
        this.$emit('pin', this.note)
        // console.log('pinned')
    }
    },
    computed:{
        dateFormat(){
            var date = this.note.info.todos.doneAt
            if(!date) return '';
            return new Date(date).getHours()
        }
    },
    created(){
        // console.log(this.note.info)
    }
}