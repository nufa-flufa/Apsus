

export default{
    props:['note'],
    template:`
        <section class="todo note">
            <button class="btn" @click="deleteTodo">X</button>
            <ul >
                <li  v-for="todo in note.info.todos" >
                <input type="checkbox" name="todo" value="todo" />
                <label for="todo" >{{todo.txt}} {{dateFormat}}</label>    
                </li>
            </ul>
            <button  @click="editTodo" >Edit</button>
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