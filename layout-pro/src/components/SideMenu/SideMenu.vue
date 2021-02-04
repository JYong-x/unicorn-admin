<template>
  <Sider>
    <SystemMenu @change="(system) => $emit('changeSystem', system)"></SystemMenu>
    <RouteMenu :menus="menus"></RouteMenu>
  </Sider>
</template>

<script>
import 'ant-design-vue/es/layout/style'
import Layout from 'ant-design-vue/es/layout'
import SystemMenu from '../SystemMenu'
import RouteMenu from '../RouteMenu'
const { Sider } = Layout
export default {
  name: 'SideMenu',
  components: {
    Sider,
    SystemMenu,
    RouteMenu
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
