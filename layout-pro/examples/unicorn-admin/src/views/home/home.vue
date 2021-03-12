<template>
  <u-page :skeleton="skeleton">
    <div slot="extra">btn</div>
    <div class="home">home</div>
  </u-page>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      skeleton: true
    }
  },
  created () {
    setTimeout(() => {
      this.skeleton = false
    }, 3000)
  }
}
</script>

<style scoped>

</style>
