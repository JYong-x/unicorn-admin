<template>
  <ConfigProvider>
    <ContainerQuery :query="MediaQueryEnum" @change="handleMediaQuery">
      <Layout
        class="layout-basic"
        :class="[`${prefix}-layout-basic`, {...mediaQuery}]"
      >
        <GlobalHeader>
          <DropdownMenu
            slot="menu"
            :is-mobile="isMobile"
            :menus="menus"
          >
            <template slot="systemMenu">
              <SystemMenu
                :systems="systems"
                :cur-system="curSystem"
                class="system-menu"
                @change="changeSystem"
              ></SystemMenu>
            </template>
          </DropdownMenu>
        </GlobalHeader>
        <Layout>
          <Drawer
            v-if="isMobile"
            :visible="!collapsed"
            placement="left"
            :closable="false"
            width="auto"
            mask-closable
            :body-style="{padding: 0,height: '100vh'}"
            @close="() => handleCollapse(true)"
          >
            <SideMenu
              :systems="systems"
              :show-system-menu="showSystemMenu"
              :menus="menus"
            >
              <template slot="systemMenu">
                <SystemMenu
                  :systems="systems"
                  :cur-system="curSystem"
                  class="system-menu"
                  @change="changeSystem"
                ></SystemMenu>
              </template>
            </SideMenu>
          </Drawer>
          <SideMenu
            v-else
            :systems="systems"
            :show-system-menu="showSystemMenu"
            :menus="menus"
            @collapse="handleCollapse"
            @change="changeSystem"
          >
            <template slot="systemMenu">
              <SystemMenu
                :systems="systems"
                :cur-system="curSystem"
                class="system-menu"
                @change="changeSystem"
              ></SystemMenu>
            </template>
          </SideMenu>
          <Layout class="layout-main" :style="{paddingLeft: collapsed ? '0' : '180px'}">
            <content-wrap>
              <slot></slot>
            </content-wrap>
            <Footer class="layout-footer"></Footer>
          </Layout>
        </Layout>
      </Layout>
    </ContainerQuery>
  </ConfigProvider>
</template>

<script>
import config from './config'
import { ContainerQuery } from 'vue-container-query'
import 'ant-design-vue/es/layout/style'
import Layout from 'ant-design-vue/es/layout'
import ConfigProvider from 'ant-design-vue/es/config-provider'
import 'ant-design-vue/es/drawer/style'
import Drawer from 'ant-design-vue/es/drawer'
import GlobalHeader from './components/GlobalHeader'
import SideMenu from './components/SideMenu'
import DropdownMenu from './components/DropdownMenu'
import ContentWrap from './components/ContentWrap'
import { processMenu } from './utils/menu'
import SystemMenu from './components/SystemMenu/SystemMenu'
const { Footer } = Layout
export default {
  name: 'BasicLayout',
  components: {
    SystemMenu,
    ContentWrap,
    ConfigProvider,
    ContainerQuery,
    Layout,
    GlobalHeader,
    Footer,
    DropdownMenu,
    SideMenu,
    Drawer
  },
  props: {
    systems: {
      type: Array,
      default: () => []
    },
    selfSystem: {
      type: String,
      required: true
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    handleMediaQuery: {
      type: Function,
      default: null
    },
    mediaQuery: {
      type: Object,
      default: () => {}
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    showSystemMenu: {
      type: Boolean,
      default: true
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
      },
      prefix: config.prefix,
      menus: [],
      curSystem: this.selfSystem
    }
  },
  watch: {
    systems: {
      handler (systems) {
        this.$nextTick(() => {
          this.menus = processMenu(this.curSystem, systems)
          console.log(this.menus, systems)
        })
      },
      immediate: true
    }
  },
  methods: {
    getPaddingLeft (hasLeftPadding, collapsed = undefined, sideWidth) {
      if (hasLeftPadding) {
        return collapsed ? 80 : sideWidth
      }
      return 0
    },
    changeSystem (system) {
      this.curSystem = system
      this.menus = processMenu(system, this.systems)
    },
    handleCollapse (collapsed) {
      this.$emit('collapse', collapsed)
    }
  }
}
</script>
<style lang="less">
  .ant-layout {
    background-color: #e6effa;
  }
</style>
<style lang="less" scoped>
  @import "./config/style.less";
  @layout-basic: ~'@{u-prefix}-layout-basic';
  .@{layout-basic} {
    &.layout-basic {
      height: auto;
      min-height: 100vh;
    }
    .layout-main {
      overflow: visible;
      transition: all .2s;
    }
    .layout-footer {
      padding: 12px 0 0;
      background: #e6effa;
    }
  }
</style>
