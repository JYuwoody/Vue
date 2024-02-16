<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my ages is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  setup() {
    console.log("setup")

    let name = 'mario'
    let age = 30
    
    const handleClick = () => {
      console.log('you clicked me')
    }

    // return { name: name, age: age}
    return { name, age, handleClick }
  },
  components: {}
}
</script>
