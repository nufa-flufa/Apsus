

export default {
    props: ['note'],
    template: `
        <section class="todo note" :class="note.color">
            <header>
                <button class="btn delete" @click="deleteTodo"><i class="far fa-trash-alt"></i></button>
                <button class="btn edit" @click="editTodo" > <i class="fas fa-pencil-alt"></i></button>
                <button class="btn pin " @click="pinTodo" > <i class="fas fa-thumbtack"></i></button>
                <h3>{{note.info.title}}</h3>
            </header>
            <div class="note-colors">
                <div class="color blue" @click="classNoteColor('blue')"></div>
                <div class="color yellow" @click="classNoteColor('yellow')"></div>
                <div class="color pink" @click="classNoteColor('pink')"></div>
                <div class="color green" @click="classNoteColor('green')"></div>
                <div class="color gray" @click="classNoteColor('gray')"></div>
                <div class="color white" @click="classNoteColor('white')"></div>
            </div>
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
   
    methods: {
        deleteTodo() {
            this.$emit('deleteNote', this.note)
        },
        editTodo() {
            this.$emit('editNote', this.note)
        },
        pinTodo() {
            this.$emit('pin', this.note)
            // console.log('pinned')
        },
        classNoteColor(value){
            this.note.color = value
            this.$emit('colorChange', this.note)
        }
    },
    computed: {
        dateFormat() {
            var date = this.note.info.todos.doneAt
            if (!date) return '';
            return new Date(date).getHours()
        },
       
    },
   
}