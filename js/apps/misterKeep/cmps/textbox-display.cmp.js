export default{
    props:['info'],
    template:`
        <section>
        <pre>{{info.txt}}</pre>
        </section>
    `,
   
    created(){
        console.log(this.info)
    }
}