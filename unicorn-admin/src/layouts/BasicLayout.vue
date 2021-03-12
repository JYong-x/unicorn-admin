<template>
  <LayoutPro
    :config="httpConfig"
    :systems="systems"
    :self-system="appConfig.code"
    :collapsed="collapsed"
    :media-query="query"
    :is-mobile="isMobile"
    :user-info="userInfo"
    :handle-media-query="handleMediaQuery"
    :sider-width="180"
    @collapse="handleCollapse"
  >
    <div slot="globalHeaderSession">session</div>
    <User slot="globalHeaderRight" :user-info="userInfo"></User>
    <router-view />
  </LayoutPro>
</template>

<script>
import { mapState } from 'vuex'
import { appConfig, httpConfig } from '@/config'
import 'unicorn-admin-layout-pro/lib/basic-layout.css'
import LayoutPro, { User } from 'unicorn-admin-layout-pro'
export default {
  name: 'BasicLayout',
  components: {
    LayoutPro,
    User
  },
  data () {
    return {
      appConfig,
      httpConfig,
      // 侧边栏是否收起
      collapsed: false,
      // 媒体查询
      query: {},
      // 是否手机模式
      isMobile: false
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.info,
      // 系统菜单
      systems: state => state.permission.systems
    })
  },
  methods: {
    handleMediaQuery (val) {
      console.log(val)
      this.query = val
      if (this.isMobile && !val['screen-xs']) {
        this.isMobile = false
        return
      }
      if (!this.isMobile && val['screen-xs']) {
        this.isMobile = true
        this.collapsed = false
      }
      console.log(this.isMobile)
    },
    handleCollapse (val) {
      this.collapsed = val
    }
  }
}
</script>

<style scoped>

</style>
