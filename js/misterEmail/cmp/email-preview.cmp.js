export default {
    props: ['email'],
    template: `
    <section class="email-preview">
        <div>
            <!--<p>Title: {{email.subject}}</p>-->
        </div>
    </section>
    `,
    computed: {},
    created(){
        console.log(email);
    }
}