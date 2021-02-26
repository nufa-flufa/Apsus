export default {
    props: ['info'],
    template: `
          <section  class="add-note">
              <form @submit.prevent="reportVal">
                <input type="text" placeholder="Give a title to your video" v-model="note.info.title" /> 
                <input type="text" placeholder="Video url"  v-model="val" @input="showVid" required />
                <button class="btn upload-btn">Save</button>
            </form>
            <iframe v-if="val" :src="showVid" ></iframe>

          </section>
          `,
    data() {
        return {
            val: '',
            note: {
                type: 'video-note',
                isPinned: false,
                info: {
                    title: '',
                    vidUrl: '',
                }
            }
        };
    },
    methods: {
        reportVal() {
            var url = this.val.replace('watch?v=','embed/')
            this.note.info.vidUrl = url
            this.$emit("setVal", this.note);
        },

    },
    computed:{
        showVid(){
            var url = this.val.replace('watch?v=','embed/')
            return url
        }
    }
 
};
