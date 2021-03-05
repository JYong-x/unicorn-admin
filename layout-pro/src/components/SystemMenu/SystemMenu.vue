<template>
  <Dropdown
    v-if="type === 'side'"
    :trigger="['click']"
    overlay-class-name="system-overlay"
  >
    <Menu slot="overlay">
      <Item
        v-for="system of systems"
        :key="system.code"
        @click="handleSystemClick(system.code)"
      >
        <Icon
          :type="system.icon"
          class="fa menu-icon"
        ></Icon>
        <span>{{ system.name }}</span>
      </Item>
    </Menu>
    <div class="system-visible">
      <Icon
        :type="curSystemInfo.icon"
        class="fa menu-icon"
      ></Icon>
      <span class="system-name">{{ curSystemInfo.name }}</span>
      <Icon type="icon-qiehuan4"></Icon>
      <!--      <a-icon-->
      <!--        class="system-change-icon"-->
      <!--        type="swap"></a-icon>-->
    </div>
  </Dropdown>
  <div v-else></div>
</template>

<script>
import 'ant-design-vue/es/dropdown/style'
import Dropdown from 'ant-design-vue/es/dropdown'
import 'ant-design-vue/es/menu/style'
import Menu from 'ant-design-vue/es/menu'
import 'ant-design-vue/es/icon/style'
import Icon from 'ant-design-vue/es/icon'
const { Item } = Menu

export default {
  name: 'SystemMenu',
  components: {
    Menu,
    Item,
    Icon,
    Dropdown
  },
  props: {
    type: {
      type: String,
      default: 'side'
    },
    systems: {
      type: Array,
      default: () => []
    },
    curSystem: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      curSystemInfo: {}
    }
  },
  watch: {
    curSystem: {
      handler (curSystem) {
        this.curSystemInfo = this.systems.find(system => system.code === curSystem) || {}
      },
      immediate: true
    }
  },
  methods: {
    handleSystemClick (system) {
      this.curSystemInfo = this.systems.find(system => system.code === system) || {}
      this.$emit('change', system)
    }
  }
}
</script>

<style scoped>

</style>
