const app = Vue.createApp({
    
    data(){
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'John12@gmail.com',
            gender: 'male',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/John_Legend_2019_by_Glenn_Francis.jpg/440px-John_Legend_2019_by_Glenn_Francis.jpg'
        }
    },
    methods:{
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            ///console.log(results)
            this.firstName= results[0].name.first
            this.lastName= results[0].name.last
            this.email= results[0].email
            this.gender= results[0].gender
            this.picture= results[0].picture.large
        }
    }
})

app.mount('#app')