<template>
  <div class="loading-wrap">
    <a-spin size="large" />
  </div>
</template>

<script>
import 'ant-design-vue/es/message/style'
import Message from 'ant-design-vue/es/message'

export default {
  name: 'Login',
  created () {
    const { redirectedFrom = '' } = this.$route
    const { options: config } = this.$loginUtils

    if (redirectedFrom) {
      const regResult = redirectedFrom.match(/^\/token-index|^\/cas/)
      if (regResult) {
        const redirect = regResult[0]
        if (redirect === '/token-index') {
          const { code } = this.$route.query
          this.getToken(code)
        } else if (redirect === '/cas') {
          this.$loginUtils.casLoginRedirect(config)
        }
      }
    } else {
      config.useCas ? this.$loginUtils.casLoginRedirect(config) : this.$loginUtils.loginRedirect(config)
    }
    let { redirect } = this.$route.query
    if (!redirect || redirect === 'undefined') {
      redirect = '/'
    }
    sessionStorage.setItem('login_redirect', redirect)
  },
  methods: {
    getToken (code, config) {
      if (!code) {
        Message.error('获取识别码失败')
        return
      }
      this.$loginUtils.login(code, config).then(data => {
        const redirect = sessionStorage.getItem('login_redirect') || '/'
        this.$router.push(redirect).catch(() => '')
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
