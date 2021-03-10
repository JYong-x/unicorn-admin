<template>
  <div>
    <Header style="height: 60px;padding: 0;"></Header>
    <Header
      :class="[`${prefix}-layout-header`]"
    >
      <div class="layout-header-left">
        <template v-if="$slots.globalHeaderLeft">
          <slot name="globalHeaderLeft"></slot>
        </template>
        <!--        <div class="layout-header-logo">-->
        <!--          <a-->
        <!--            href="http://www.cqu.edu.cn/"-->
        <!--            target="_blank"-->
        <!--          ><img-->
        <!--            class="logo-img"-->
        <!--            :src="logo"-->
        <!--            alt="重庆大学"-->
        <!--          ></a>-->
        <!--        </div>-->
      </div>
      <div class="layout-header-content">
        <template v-if="$slots.globalHeaderContent">
          <slot name="globalHeaderContent"></slot>
        </template>
        <div v-if="$slots.globalHeaderSession" class="layout-header-session">
          <slot name="globalHeaderSession"></slot>
        </div>
      </div>
      <div v-if="$slots.globalHeaderRight" class="layout-header-right">
        <slot name="globalHeaderRight"></slot>
      </div>
    </Header>
  </div>
</template>

<script>
import config from '../../config'
import Layout from 'ant-design-vue/es/layout'
const { Header } = Layout
export default {
  name: 'GlobalHeader',
  components: {
    Header
  },
  data () {
    return {
      // logo: require('../../assets/images/logo.png'),
      prefix: config.prefix
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../config/style.less";
  @layout-header: ~'@{u-prefix}-layout-header';
  .@{layout-header} {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 16px 0 0;
    background-color: #0052a8;
    z-index: 901;
    .layout-header-left {
      min-width: 60px;
      display: flex;
      .layout-header-menu {
        width: 60px;
      }
      .layout-header-logo {
        width: 128px;
        height: 40px;
        margin-left: 12px;
        .logo-img {
          height: 40px;
        }
      }
    }
    .layout-header-content {
      display: flex;
      align-items: center;
      flex: 1;
      .layout-header-session {
        padding-left: 24px;
      }
    }
  }
</style>
