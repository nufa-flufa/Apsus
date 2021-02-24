export default {
    props: ['info'],
    template: `
          <section>
              <label>
                  {{info.label}}
              </label>
                <form @submit.prevent="saveTodo(val)">  
                    <input type=text placeholder='Write your To Do here' v-model="val" />
                    <button>save</button>
                </form>
            <ul class="todo-note">
                <li v-if="note.content" v-for="todo in note.content">
                    <p>{{todo}}</p>
                </li>
            </ul>
            <button @click="reportVal">Done</button>
          </section>
          `,
    data() {
        return {
            val: '',
            note: {title:'to-do', content:[]}
        };
    },
    methods: {
        reportVal() {
            this.$emit("setVal", this.note);
            // console.log('val',this.val)
        },
        saveTodo(val) {
            this.note.content.push(val)
            this.val = null;
        }
    },
    computed: {
        listId() {
            return "list" + this._uid;
        }
    }
};
