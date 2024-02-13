<template>
  <div class="woodyblock" v-if="showWoodyBlock" @click="stopTimer">
    clock me
  </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
      return {
        showWoodyBlock: false,
        timer: null,
        reactionTime: 0
      }
    },
    mounted() {
      // console.log('component mounted')
      setTimeout(() => {
        this.showWoodyBlock = true
        this.startTimer()
        // console.log(this.delay)
      }, this.delay)
    },
    methods: {
      startTimer() {
        this.timer = setInterval(() => {
          this.reactionTime += 10
        }, 10)
      },
      stopTimer() {
        clearInterval(this.timer)
        console.log(this.reactionTime)
      }
    }
    // updated() {
    //   console.log('component updated')
    // },
    // unmounted() {
    //   console.log('component unmounted')
    // }
}
</script>

<style>
    .woodyblock {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>