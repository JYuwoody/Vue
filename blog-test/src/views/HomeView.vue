<template>
  <div class="home">
    <h1> Home  </h1>
    <p>My name is {{ name }} and my ages is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">add one age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    // const p = ref('hello')

    const name = ref('mario')
    const age = ref(30)
    
    const handleClick = () => {
      name.value = 'luigi'
      age.value = 35
    }

    // return { name: name, age: age}
    return { name, age, handleClick}
  },
  data() {
    return {
      score: 5
    }
  },
  components: {}
}
</script>
