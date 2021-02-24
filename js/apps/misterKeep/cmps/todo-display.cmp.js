

export default{
    props:['info'],
    template:`
        <section>
        <ul class="todo">
                <li  v-for="todo in info.todos" >
                    <p>{{todo.txt}} {{dateFormat}}</p>
                </li>
            </ul>
        </section>
    `,
    computed:{
        dateFormat(){
            var date = this.info.todos.doneAt
            return new Date(date).getHours()
        }
    },
    created(){
        console.log(this.info)
    }
}