<template>
  <LayoutPro
    :config="httpConfig"
    :systems="systems"
    :self-system="appConfig.code"
    :collapsed="collapsed"
    :media-query="query"
    :is-mobile="isMobile"
    :handle-media-query="handleMediaQuery"
    :sider-width="180"
    @collapse="handleCollapse"
  >
    <router-view />
  </LayoutPro>
</template>

<script>
import { mapState } from 'vuex'
import { appConfig, httpConfig } from '@/config'
import LayoutPro from '@unicorn-admin/layout-pro'
export default {
  name: 'BasicLayout',
  components: {
    LayoutPro
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
