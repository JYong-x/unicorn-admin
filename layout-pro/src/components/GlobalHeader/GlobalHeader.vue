<template>
  <div>
    <Header style="height: 60px;padding: 0;"></Header>
    <Header
      :class="[`${prefix}-layout-header`]"
    >
      <div class="layout-header-left">
        <div class="layout-header-menu">
          <slot name="menu"></slot>
        </div>
        <div class="layout-header-title">教务管理系统</div>
        <div class="layout-header-logo">
          <a
            href="http://www.cqu.edu.cn/"
            target="_blank"
          ><img
            class="logo-img"
            :src="logo"
            alt="重庆大学"
          ></a>
        </div>
      </div>
      <div class="layout-header-right"></div>
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
      prefix: config.prefix,
      logo: require('../../assets/images/logo.png')
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
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding: 0 16px 0;
    background-color: #0052a8;
    z-index: 901;
    .layout-header-left {
      display: flex;
      .layout-header-menu {
        width: 60px;
      }
      .layout-header-title {
        padding-left: 12px;
        color: #fff;
        font-size: 24px;
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
  }
</style>
