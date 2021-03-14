<template>
  <u-page>page1</u-page>
</template>

<script>
export default {
  name: 'Page1',
  created () {
    this.$api.finder.examType()
  }
}
</script>

<style scoped>

</style>
