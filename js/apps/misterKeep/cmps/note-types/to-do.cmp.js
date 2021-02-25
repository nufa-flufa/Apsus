export default {
    props: ['info'],
    template: `
          <section>
              <label>
                  {{info.label}}
              </label>
                <form @submit.prevent="saveTodo(val)">  
                    <input type=text placeholder='Write your To Do here' v-model="val" />
                    <button>Add to list</button>
                </form>
            <ul class="todo-note">
                <li v-if="note.info.todos" v-for="todo in note.info.todos">
                    <p>{{todo.txt}}</p>
                    <p>{{todo.doneAt}}</p>
                </li>
            </ul>
            <button @click="reportVal">Done</button>
          </section>
          `,
    data() {
        return {
            val: '',
            note: { type: 'to-do', info: {todos:[]}}
        };
    },
    methods: {
        reportVal() {
            this.$emit("setVal", this.note);
        },
        saveTodo(val) {
            if (!val) return
            const newVal = { txt: val, doneAt: null }
            this.note.info.todos.push(newVal)
            this.val = null;
        }
    },
    computed: {
        listId() {
            return "list" + this._uid;
        }
    }
};
