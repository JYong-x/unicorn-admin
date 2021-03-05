<template>
  <div class="loading-wrap">
    <a-spin size="large" />
  </div>
</template>

<script>
import { httpConfig } from '@/config'

export default {
  name: 'Login',
  data () {
    return {}
  },
  created () {
    const { redirect } = this.$route.query
    sessionStorage.setItem('redirect', redirect)
    this.login()
  },
  methods: {
    login () {
      httpConfig.useCas ? this.$loginUtils.casLoginRedirect(httpConfig) : this.$loginUtils.loginRedirect(httpConfig)
    }
  }
}
</script>

<style lang="scss" scoped>
  .loading-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
