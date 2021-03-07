<template>
  <WrapContent :class="[`${prefix}-layout-content-wrap`]">
    <ConfigProvider>
      <div :class="[`${prefix}-layout-content`]">
        <slot></slot>
      </div>
    </ConfigProvider>
  </WrapContent>
</template>

<script>
import config from '../../config'
import ConfigProvider from 'ant-design-vue/es/config-provider'
import 'ant-design-vue/es/layout/style'
import Layout from 'ant-design-vue/es/layout'
const { Content: WrapContent } = Layout
export default {
  name: 'ContentWrap',
  components: {
    ConfigProvider,
    WrapContent
  },
  data () {
    return {
      prefix: config.prefix
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../config/style.less";
  @layout-content-wrap: ~'@{u-prefix}-layout-content-wrap';
  @layout-content: ~'@{u-prefix}-layout-content';
  .@{layout-content-wrap} {
    .@{layout-content} {
      min-height: 100%;
      margin: 0 12px;
      background: #ffffff;
      border-radius: 6px;
    }
  }
</style>
