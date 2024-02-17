import { ref } from 'vue'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://192.168.159.129:3000/posts/' + id) // json-server --watch data/db.json
        if (!data.ok) {
          throw Error('that post does not exits')
        }
        post.value = await data.json()
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { post, error, load }
}

export default getPost