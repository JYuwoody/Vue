<template>
  <div class="home">
    <h1> Home  </h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'
import PostList from '../components/PostList.vue'

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)
    // http://192.168.159.129:8080/
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

    load()

    return { posts, error }
  }
}
</script>
