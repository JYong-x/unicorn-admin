<template>
  <ConfigProvider>
    <ContainerQuery :query="MediaQueryEnum" @onChange="handleMediaQuery">
      <Layout :class="{...mediaQuery}">
        <Header></Header>
        <Layout>
          <Drawer v-if="isMobile">
            <SideMenu :menus="menus"></SideMenu>
          </Drawer>
          <SideMenu v-else :menus="menus"></SideMenu>
        </Layout>
      </Layout>
    </ContainerQuery>
  </ConfigProvider>
</template>

<script>
import { ContainerQuery } from 'vue-container-query'
import 'ant-design-vue/es/layout/style'
import Layout from 'ant-design-vue/es/layout'
import ConfigProvider from 'ant-design-vue/es/config-provider'
import 'ant-design-vue/es/drawer/style'
import Drawer from 'ant-design-vue/es/drawer'
import SideMenu from './components/SideMenu'
const { Header } = Layout
export default {
  name: 'BasicLayout',
  components: {
    ConfigProvider,
    ContainerQuery,
    Layout,
    Header,
    SideMenu,
    Drawer
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    handleMediaQuery: {
      type: Function
    },
    mediaQuery: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      MediaQueryEnum: {
        'screen-xs': {
          maxWidth: 575
        },
        'screen-sm': {
          minWidth: 576,
          maxWidth: 767
        },
        'screen-md': {
          minWidth: 768,
          maxWidth: 991
        },
        'screen-lg': {
          minWidth: 992,
          maxWidth: 1199
        },
        'screen-xl': {
          minWidth: 1200,
          maxWidth: 1599
        },
        'screen-xxl': {
          minWidth: 1600
        }
      }
    }
  },
  methods: {
    getPaddingLeft (hasLeftPadding, collapsed = undefined, sideWidth) {
      if (hasLeftPadding) {
        return collapsed ? 80 : sideWidth
      }
      return 0
    }
  }
}
</script>

<style scoped>
</style>
