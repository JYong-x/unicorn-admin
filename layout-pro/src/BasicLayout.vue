<template>
  <ConfigProvider>
    <ContainerQuery :query="MediaQueryEnum" @change="handleMediaQuery">
      <Layout
        class="layout-basic"
        :class="[`${prefix}-layout-basic`, {...mediaQuery}]"
      >
        <GlobalHeader>
          <template v-if="$slots.globalHeaderLeft" slot="globalHeaderLeft">
            <slot name="globalHeaderLeft"></slot>
          </template>
          <DropdownMenu
            v-else
            slot="globalHeaderLeft"
            :is-mobile="isMobile"
            :menus="menus"
          >
            <template slot="systemMenu">
              <SystemMenu
                type="dropdown"
                :systems="systems"
                :cur-system="curSystem"
                :config="config"
                class="system-menu"
                @change="changeSystem"
              ></SystemMenu>
            </template>
          </DropdownMenu>

          <template v-if="$slots.globalHeaderContent" slot="globalHeaderContent">
            <slot name="globalHeaderContent"></slot>
          </template>
          <div
            v-else-if="!isMobile"
            slot="globalHeaderContent"
            class="layout-header-title"
          >重庆大学教务管理系统</div>

          <template v-if="$slots.globalHeaderSession" slot="globalHeaderSession">
            <slot name="globalHeaderSession"></slot>
          </template>

          <template v-if="$slots.globalHeaderRight" slot="globalHeaderRight">
            <slot name="globalHeaderRight"></slot>
          </template>
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
              :is-mobile="isMobile"
              :collapsed="collapsed"
              @collapse="handleCollapse"
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
            :collapsed="collapsed"
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
          <Layout class="layout-main" :style="{paddingLeft: collapsed || isMobile ? '0' : '180px'}">
            <div class="layout-main-header"></div>
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
    },
    config: {
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
          this.menus = processMenu({
            systemCode: this.curSystem,
            systems,
            selfSystem: this.selfSystem,
            appRoot: this.config.appRoot
          })
          console.log(this.menus, systems, this.config)
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
      this.menus = processMenu({
        systemCode: system, // 系统切换的当前系统code
        systems: this.systems, // 全部系统菜单
        selfSystem: this.selfSystem, // 当前vue app 系统
        appRoot: this.config.appRoot // 服务器根地址
      })
    },
    handleCollapse (collapsed) {
      this.$emit('collapse', collapsed)
    }
  }
}
</script>
<style lang="less">
  @import "./global.less";
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
    .layout-main-header {
      min-height: 12px;
    }
    .layout-footer {
      padding: 12px 0 0;
      background: #e6effa;
    }
  }
</style>
