<template>
  <div class="loading-wrap">
    <a-spin size="large" />
  </div>
</template>

<script>
import { httpConfig } from '@/config'
export default {
  name: 'TokenIndex',
  data () {
    return {
      state: '',
      code: '',
      excludeRedirects: ['/login', '/token-index', '/cas', '/logout', '/404']
    }
  },
  mounted () {
    this.code = this.$route.query.code
    this.state = this.$route.query.state
    this.login()
  },
  methods: {
    login () {
      if (!this.code) {
        this.$message.error('获取识别码失败')
        return
      }
      this.$loginUtils.login(this.code, httpConfig).then(data => {
        let redirect = sessionStorage.getItem('redirect')
        for (let i = 0; i < this.excludeRedirects.length; i++) {
          if (this.excludeRedirects[i].indexOf(redirect) !== -1) {
            redirect = '/'
          }
        }
        if (redirect) {
          this.$router.push(redirect).catch(() => '')
        } else {
          this.$router.push('/').catch(() => '')
        }
      })
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
