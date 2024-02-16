<template>
  <div class="home">
    <h1> Home  </h1>
    <h2> Refs </h2>
    <p>{{ woodyOne.name }} - {{ woodyOne.age }}</p>
    <button @click="updatewoodyOne"> Update Woody One</button>
    <h2> Reactive</h2>
    <p>{{ woodyTwo.name }} - {{ woodyTwo.age }} - {{ nameTwo }}</p>
    <button @click="updatewoodyTwo"> Update Woody Two</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const woodyOne = ref({ name: 'mario', age: 20})
    const woodyTwo = reactive({name: 'luigi', age: 25 })


    const nameOne = ref('mario')
    const nameTwo = reactive('luigi')


    const updatewoodyOne =() => {
      woodyOne.value.age = 30
    }

    const updatewoodyTwo =() => {
      woodyTwo.age = 30
      nameTwo = 'mario' // It can not update
    }
    return { woodyOne, updatewoodyOne, woodyTwo, updatewoodyTwo, nameTwo}
  },
  data() {
    return {
      score: 5
    }
  },
  components: {}
}
</script>
