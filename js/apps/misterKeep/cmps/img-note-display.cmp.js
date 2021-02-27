export default {
    props: ['note'],
    template: `
        <section class="image note">
            <header>
                <button class="btn delete" @click="deleteImgNote"><i class="far fa-trash-alt"></i></button>
                <button class="btn edit"  @click="editImg" ><i class="fas fa-pencil-alt"></i></button>
                <button class="btn pin " @click="pinImgNote" > <i class="fas fa-thumbtack"></i></button>

                <h3>{{note.info.title}}</h3>
            </header>
            <div class="note-content">
                <img :src="note.info.imgUrl" />
              
            </div>
        </section>
    `,
    data() {
        return {
            color: null,
        }
    },

    methods: {
        deleteImgNote() {
            this.$emit('deleteNote', this.note)
        },
        editImg() {
            this.$emit('editNote', this.note)
        },
        pinImgNote() {
            this.$emit('pin', this.note)
        }
    },

    created() {
    }
}