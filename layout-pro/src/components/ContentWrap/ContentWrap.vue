<template>
  <ContentWrap>
    <ConfigProvider>
      <div :class="[`${prefix}-content`]"></div>
      <slot></slot>
    </ConfigProvider>
  </ContentWrap>
</template>

<script>
import config from '../../config'
import ConfigProvider from 'ant-design-vue/es/config-provider'
import 'ant-design-vue/es/layout/style'
import Layout from 'ant-design-vue/es/layout'
const { Content: ContentWrap } = Layout
export default {
  name: 'ContentWrap',
  components: {
    ConfigProvider,
    ContentWrap
  },
  data () {
    return {
      prefix: config.prefix
    }
  }
}
</script>

<style scoped>

</style>
