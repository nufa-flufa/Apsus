export default {
    props: ['info'],
    template: `
          <section>
              <!-- <datalist :id="listId">
                  <option v-if="info.opts" v-for="opt in info.opts" :value="opt" />
              </datalist> -->
              <label>
                  {{info.label}}
                  <textarea  placeholder=""  rows="10"
                    cols="50" v-model="val" @change="reportVal" :list="listId" required >
                </textarea>
              </label>  
          </section>
          `,
    data() {
        return {
            val: ""
        };
    },
    methods: {
        reportVal() {
            this.$emit("setVal", this.val);
            // console.log('val',this.val)
        }
    },
    computed: {
        listId() {
            return "list" + this._uid;
        }
    }
};
