<template>
  <div class="psot-list">
    <div v-for="post in posts" :key="post.id">
        <SingkePost :post="post" />
    </div>

  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SingkePost from '../components/SingkePost.vue'
export default {
    components: { SingkePost },
    props: ['posts'],
    setup(props) {
        onMounted(() => console.log('component mounted')) 
        onUnmounted(() => console.log('component unmounted')) 
        onUpdated(() => console.log('component updated')) 
    }
}
</script>

<style>

</style>