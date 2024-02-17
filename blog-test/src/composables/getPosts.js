import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://192.168.159.129:3000/posts') // json-server --watch data/db.json
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { posts, error, load }
}

export default getPosts