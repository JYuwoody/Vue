 const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am the template</h2>'
    data() {
        return {
            url: 'https://github.com/JYuwoody',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'parrick rothfuss', img: 'assets/1.jpg' },
                { title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg' },
                { title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg' },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
    }

 })

 app.mount('#app')
 