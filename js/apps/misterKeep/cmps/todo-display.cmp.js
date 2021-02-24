

export default{
    props:['note'],
    template:`
        <section class="todo note">
            <button class="btn" @click="deleteTodo">X</button>
        <ul >
                <li  v-for="todo in note.info.todos" >
                    <p>{{todo.txt}} {{dateFormat}}</p>
                </li>
            </ul>
        </section>
    `,
    methods:{
        deleteTodo(){
            this.$emit('deleteNote', this.note)
        }
    },
    computed:{
        dateFormat(){
            var date = this.note.info.todos.doneAt
            return new Date(date).getHours()
        }
    },
    created(){
        // console.log(this.note.info)
    }
}