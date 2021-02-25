import { keepService } from '../../service/keep.service.js'


export default {
    props: ['info'],
    template: `
          <section>
              <form @submit.prevent="reportVal">
                <input type="text" placeholder="give a title to your note" v-model="note.info.title" /> 
                <input type="text" placeholder="img url" name="image"   v-model="val" required />
                <button class="btn upload-btn" >Upload</button>
            </form>
            <img v-if="val" :src="val" class="img-display" />
            <!-- <iframe v-if="val" :src="foo" ></iframe> -->

          </section>
          `,
    data() {
        return {
            val: '',
            img: '',
            note: {
                type: 'image-note',
                info: {
                    title: '',
                    imgUrl: '',
                }
            }
        };
    },
    methods: {
        reportVal() {
            var foo = this.val.replace('watch?v=','embed/')
            console.log('youtube',foo)
            this.note.info.imgUrl = foo
            this.$emit("setVal", this.note);
          
        },
        foo(){
            var foo = this.val.replace('watch','embed')
            console.log(foo)
            // return this.val
        }

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
