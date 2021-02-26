// import {}
export default {
    props: ['info'],
    template: `
          <section  class="add-note">
              <label>
              {{info.label}}
                </label>  
                <input type="text" placeholder="give a title to your note" v-model="note.info.title" /> 
                <textarea  placeholder=""  rows="15"
                  cols="30" v-model="val" :list="listId" required >
              </textarea>
              <button class="btn" @click="reportVal">Done</button>

          </section>
          `,
    data() {
        return {
            val: '',
            note: {
                type: 'textBox',
                isPinned: false,
                info: {
                    title:'',
                    txt: '',
                }
            }
        };
    },
    methods: {
        reportVal() {
            this.note.info.txt = this.val
            this.$emit("setVal", this.note);
        }
    },
    computed: {
        listId() {
            return "list" + this._uid;
        }
    }
};
