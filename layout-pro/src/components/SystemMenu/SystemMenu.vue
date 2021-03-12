<template>
  <Dropdown
    v-if="type === 'side'"
    :trigger="['click']"
    :overlay-class-name="`${prefix}-system-menu-overlay`"
  >
    <Menu slot="overlay">
      <Item
        v-for="system of systems"
        :key="system.code"
        class="layout-system-item"
        @click="handleSystemClick(system.code)"
      >
        <Icon
          :type="system.icon"
          class="menu-icon"
        ></Icon>
        <span>{{ system.name }}</span>
      </Item>
    </Menu>
    <div :class="`${prefix}-system-current`">
      <Icon
        :type="curSystemInfo.icon"
        class="menu-icon"
      ></Icon>
      <span class="system-name">{{ curSystemInfo.name }}</span>
      <Icon type="sync"></Icon>
      <!--      <a-icon-->
      <!--        class="system-change-icon"-->
      <!--        type="swap"></a-icon>-->
    </div>
  </Dropdown>
  <div v-else :class="`${prefix}-system-dropdown-wrap`">
    <ul class="system-dropdown">
      <li
        v-for="system of systems"
        :key="system.code"
        :class="{'system-dropdown-item-active' : system.code === curSystem}"
        class="system-dropdown-item"
        @click="handleSystemClick(system.code)"
      >
        <div class="system-dropdown-item-left">
          <Icon
            :type="system.icon"
            class="fa menu-icon"
          ></Icon>
          <span class="system-name">{{ system.name }}</span>
        </div>
        <Icon type="right"></Icon>
      </li>
    </ul>
  </div>
</template>

<script>
import config from '../../config'
import 'ant-design-vue/es/dropdown/style'
import Dropdown from 'ant-design-vue/es/dropdown'
import 'ant-design-vue/es/menu/style'
import Menu from 'ant-design-vue/es/menu'
import Icon from '../Icon'
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
      prefix: config.prefix,
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
      this.$emit('change', system)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../config/style.less";
  @system-current: ~'@{u-prefix}-system-current';
  @system-menu-overlay: ~'@{u-prefix}-system-menu-overlay';
  @system-dropdown-wrap: ~'@{u-prefix}-system-dropdown-wrap';

  .@{system-current} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    margin-bottom: 2px;
    line-height: 40px;
    color: #0055aa;
    box-shadow: 0 1px 2px rgba(0,21,41,.15);
    cursor: pointer;
    .system-name {
      flex: 1;
      font-size: 16px;
      font-weight: 700;
      overflow-x: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .@{system-menu-overlay} {
    .layout-system-item {
      font-weight: 600;
      line-height: 24px;
    }
  }
  .@{system-dropdown-wrap} {
    padding: 0 12px;
    line-height: 32px;
    .system-dropdown-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      margin-top: 8px;
      border-radius: 4px;
      cursor: pointer;
      color: #0052a8;
      &:hover, &.system-dropdown-item-active {
        background: #0055aa;
        color: #ffffff;
      }
    }
  }
  .menu-icon {
    margin-right: 10px;
  }
</style>
