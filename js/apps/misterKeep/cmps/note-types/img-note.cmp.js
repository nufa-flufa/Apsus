import { keepService } from '../../service/keep.service.js'


export default {
    props: ['info'],
    template: `
          <section class="add-note">
              <form @submit.prevent="reportVal">
                <input type="text" placeholder="give a title to your note" v-model="note.info.title" /> 
                <input type="text" placeholder="img url" name="image"   v-model="note.info.imgUrl" required />
                <button class="btn upload-btn" >Save</button>
            </form>
            <img v-if="val" :src="val" class="img-display" />

          </section>
          `,
    data() {
        return {
            val: '',
            img: '',
            note: {
                type: 'image-note',
                isPinned: false,
                color:'blue',
                info: {
                    title: '',
                    imgUrl: '',
                }
            }
        };
    },
    methods: {
        reportVal() {
            // this.note.info.imgUrl = val
            this.$emit("setVal", this.note);
          
        },

    },
    computed: {
        //     drawImg() {
        //         const img = new Image();
        //         img.src = this.img.url
        //         img.onload = () => {
        //             // var canvasHeight = getHeightRatio(gElCanvas.width, img.height, img.width);
        //             // gElCanvas.height = canvasHeight;
        //             gCtx.drawImage(this.img, 0, 0, 100, 100);
        //             // drawText();
        //         }
        //     }
    }
};
