<template>
  <div class="home">
    <h1> Home  </h1>
    <p ref="p">My name is {{ name }} and my ages is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    console.log(this)

    const p = ref('hello')
    console.log(p, p.value)

    let name = 'mario'
    let age = 30
    
    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'hello, woody'
    }

    // return { name: name, age: age}
    return { name, age, handleClick, p }
  },
  components: {}
}
</script>
