export default {
    props: ['info'],
    template: `
          <section  class="add-note">
              <label>
                  {{info.label}}
              </label>
                <form @submit.prevent="saveTodo(val)">  
                    <input type=text placeholder='Write your To Do here' v-model="val" />
                    <button class="btn">Add to list</button>
                </form>
            <ul class="todo-note">
                <li v-if="note.info.todos" v-for="todo in note.info.todos">
                    <p>{{todo.txt}}</p>
                    <p>{{todo.doneAt}}</p>
                </li>
            </ul>
            <button class="btn done" @click="reportVal">Done</button>
          </section>
          `,
    data() {
        return {
            val: '',
            note: {
            type: 'to-do',
            isPinned: false,
             info: {todos:[]}
            }
        };
    },
    methods: {
        reportVal() {
            this.$emit("setVal", this.note);
        },
        saveTodo(val) {
            if (!val) return
            const newVal = { txt: val, isDone:false }
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
