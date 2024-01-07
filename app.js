 const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Tony Lee',
            age: '32'
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Randiance'
            this.title = title
            console.log('you clicked me')
        }
    }

 })

 app.mount('#app')
 
 
 console.log("hello vue");