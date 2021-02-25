

export default{
    props:['note'],
    template:`
        <section class="todo note">
            <header>
                <button class="btn" @click="deleteTodo">X</button>
            </header>
            <div class="note-content">
            <ul>
                <li  v-for="todo in note.info.todos" >
                <input type="checkbox" name="todo" value="todo"  />
                <label for="todo" >{{todo.txt}} {{dateFormat}}</label>    
                </li>
            </ul>
            <button  @click="editTodo" >Edit</button>
            </div>
        </section>
    `,
    methods:{
        deleteTodo(){
            this.$emit('deleteNote', this.note)
        },
       editTodo(){
            this.$emit('editNote', this.note)
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