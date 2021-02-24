// import {}
export default {
    props: ['info'],
    template: `
          <section>
              <label>
                  {{info.label}}
                </label>  
                <textarea  placeholder=""  rows="10"
                  cols="50" v-model="val" @change="reportVal" :list="listId" required >
              </textarea>
              <button @click="reportVal">Done</button>

          </section>
          `,
    data() {
        return {
            val: '',
            note: {
                // id:,
                type: 'text-box',
                isPinned: false,
                info: {
                    txt: "Fullstack Me Baby!"
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
