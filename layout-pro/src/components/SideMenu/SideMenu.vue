<template>
  <Sider
    v-model="stateCollapsed"
    theme="light"
    :class="[`${prefix}-layout-sider`, {'is-mobile': isMobile}]"
    collapsible
    width="180px"
    :collapsed-width="0"
    :trigger="null"
  >
    <span
      class="trigger"
      :style="!stateCollapsed && isMobile ? {display: 'none'} : {}"
      @click="toggleCollapse"
    >
      <Icon :type="triggerType"></Icon>
    </span>
    <slot name="systemMenu"></slot>
    <RouteMenu
      class="route-menu"
      :menus="menus"
      mode="inline"
      @menuClick="handleRouteMenuClick"
    ></RouteMenu>
  </Sider>
</template>

<script>
import config from '../../config'
import 'ant-design-vue/es/layout/style'
import Layout from 'ant-design-vue/es/layout'
import 'ant-design-vue/es/icon/style'
import Icon from 'ant-design-vue/es/icon'
import RouteMenu from '../RouteMenu'
const { Sider } = Layout
export default {
  name: 'SideMenu',
  components: {
    Sider,
    Icon,
    RouteMenu
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    showSystemMenu: {
      type: Boolean,
      default: true
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    collapsed: {
      type: Boolean,
      default: null
    }
  },
  data () {
    return {
      prefix: config.prefix,
      stateCollapsed: false
    }
  },
  computed: {
    triggerType () {
      let type = ''
      if (this.isMobile) {
        type = 'menu'
      } else {
        if (this.stateCollapsed) {
          type = 'right'
        } else {
          type = 'left'
        }
      }
      return type
    }
  },
  watch: {
    collapsed: {
      handler (collapsed) {
        this.stateCollapsed = collapsed
      },
      immediate: true
    }
  },
  methods: {
    toggleCollapse () {
      this.stateCollapsed = !this.stateCollapsed
      this.$emit('collapse', this.stateCollapsed)
    },
    handleRouteMenuClick () {
      if (this.isMobile) {
        this.toggleCollapse()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../config/style.less";
  @layout-sider: ~'@{u-prefix}-layout-sider';
  .@{layout-sider} {
    position: fixed;
    top: 60px;
    left: 0;
    height: calc(100% - 60px);
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    z-index: 900;
    ::v-deep .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
    }
    &.is-mobile {
      top: 0;
      height: 100%;
      .trigger {
        top: 0;
        left: 0;
        width: 60px;
        height: 60px;
        background: transparent;
        color: #ffffff;
        transform: none;
        font-size: 24px;
        &::before {
          display: none;
        }
        &::after {
          display: none;
        }
      }
    }
    .trigger {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      right: -10px;
      z-index: 100;
      width: 11px;
      height: 48px;
      color: rgba(0, 0, 0, .65);
      font-size: 12px;
      line-height: 48px;
      text-align: center;
      background: #fff;
      cursor: pointer;
      transition: background 0.3s ease;
      transform: translateY(-50%);
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        width: 0;
        height: 0;
        border-top: 10px solid #e6effa;
        border-left: 10px solid transparent;
      }
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: 0;
        border-bottom: 10px solid #e6effa;
        border-left: 10px solid transparent;
      }
      &:hover {
        color: #fff;
        background: #05a;
      }
    }
    .system-menu {
      flex: 0 0 auto;
    }
    .route-menu {
      flex: 1;
      height: 0;
    }
  }
</style>
