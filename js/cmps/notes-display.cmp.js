export default{
    props:['notes'],
    template:`
    <section class="notes-display">
            <ul v-for="note in notes" class="note">
                <li v-for="txt in note.content" >
                    <p>{{txt}}</p>
                </li>
            </ul>

    </section>
    `,
    created(){
        console.log(this.notes)
    }
}