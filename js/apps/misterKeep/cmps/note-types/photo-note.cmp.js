 import {keepService} from '../../service/keep.service.js'


export default {
    props: ['info'],
    template: `
          <section>
              <form @submit.prevent="reportVal">
                <input type="text" placeholder="give a title to your note" v-model="note.info.title" /> 
                <input type="file" class="file-input" name="image"  ref="img" @change="reportVal" required />
                <button class="btn upload-btn" >Upload</button>
            </form>

             <canvas  v-if="img" src="img.url"  height="100px" width="100px"></canvas>

          </section>
          `,
    data() {
        return {
            val: '',
            img:'',
            note: {
                type: 'img',
                info: {
                    title:'',
                    imgUrl: '',
                }
            }
        };
    },
    methods: {
        reportVal(ev) {
                console.log(ev)
                var reader = new FileReader()
                console.log('hello', reader)
                reader.onload = function (event) {
                    console.log('event onload',event)
                    console.log('hello')
                    var img = new Image()
                    // img.onload = onImageReady.bind(null, img)
                    img.src = event.target.result
                    var newImage = {
                        // id: 
                        url: img.src,
                        // keywords:['personal']
                    }
                    console.log(newImage)
                    this.img = newImage
                }
                reader.readAsDataURL(ev.target.files[0])
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
