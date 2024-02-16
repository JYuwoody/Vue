<template>
  <div class="psot-list">
    <div v-for="post in posts" :key="post.id">
        <SingkePost :post="post" />
    </div>

  </div>
</template>

<script>
import SingkePost from '../components/SingkePost.vue'
export default {
    components: { SingkePost },
    props: ['posts'],
    setup(props) {
        console.log(props.posts)
    }
}
</script>

<style>

</style>