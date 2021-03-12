<template>
  <Menu
    v-bind="$attrs"
    :class="[`${prefix}-layout-menu`, type === 'side' ? 'menu-side' : 'menu-dropdown']"
    :open-keys="openKeys"
    :selected-keys="selectedKeys"
    @openChange="onOpenChange"
    @select="onMenuSelect"
    @click="$emit('menuClick')"
    v-on="$listeners"
  >
    <template v-for="menu of menus">
      <SubMenu
        v-if="!menu.hideChildrenInMenu && !menu.hidden && menu.children && menu.children.length"
        :key="menu.name"
        class="layout-menu-sub-menu-item"
      >
        <span slot="title">
          <Icon
            v-if="menu.meta && menu.meta.icon"
            :component="typeof menu.meta.icon === 'object' ? menu.meta.icon : undefined"
            :type="typeof menu.meta.icon === 'string' ? menu.meta.icon : undefined"
          ></Icon>
          <span>{{ menu.meta.title }}</span>
        </span>
        <template v-if="!menu.hideChildrenInMenu && menu.children">
          <Item
            v-for="childMenu of menu.children"
            :key="childMenu.name"
            class="layout-menu-item"
          >
            <a
              v-if="childMenu.meta.target"
              :href="childMenu.path"
              :target="childMenu.meta.target"
            >
              <Icon
                v-if="childMenu.meta && childMenu.meta.icon"
                :component="typeof childMenu.meta.icon === 'object' ? childMenu.meta.icon : undefined"
                :type="typeof childMenu.meta.icon === 'string' ? childMenu.meta.icon : undefined"
              ></Icon>
              <span>{{ childMenu.meta.title }}</span>
            </a>
            <router-link v-else :to="childMenu.path">
              <Icon
                v-if="childMenu.meta && childMenu.meta.icon"
                :component="typeof childMenu.meta.icon === 'object' ? childMenu.meta.icon : undefined"
                :type="typeof childMenu.meta.icon === 'string' ? childMenu.meta.icon : undefined"
              ></Icon>
              <span>{{ childMenu.meta.title }}</span>
            </router-link>
          </Item>
        </template>
      </SubMenu>
      <Item
        v-else-if="!menu.hidden"
        :key="menu.name"
        class="layout-menu-item"
      >
        <a
          v-if="menu.meta && menu.meta.target"
          :href="menu.path"
          :target="menu.meta.target"
        >
          <Icon
            v-if="menu.meta && menu.meta.icon"
            :component="typeof menu.meta.icon === 'object' ? menu.meta.icon : undefined"
            :type="typeof menu.meta.icon === 'string' ? menu.meta.icon : undefined"
          ></Icon>
          <span>{{ menu.meta.title }}</span>
        </a>
        <router-link v-else :to="menu.path">
          <Icon
            v-if="menu.meta && menu.meta.icon"
            :component="typeof menu.meta.icon === 'object' ? menu.meta.icon : undefined"
            :type="typeof menu.meta.icon === 'string' ? menu.meta.icon : undefined"
          ></Icon>
          <span>{{ menu.meta.title }}</span>
        </router-link>
      </Item>
    </template>
  </Menu>
</template>

<script>
import config from '../../config'
import 'ant-design-vue/es/menu/style'
import Menu from 'ant-design-vue/es/menu'
import Icon from '../Icon'
const { Item, SubMenu } = Menu
export default {
  name: 'BaseMenu',
  components: {
    Menu,
    Item,
    SubMenu,
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'side'
    },
    menus: {
      type: Array,
      default: () => []
    },
    showSystemMenu: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      prefix: config.prefix,
      selectedKeys: [],
      openKeys: []
    }
  },
  computed: {
    rootSubmenuKeys: vm => {
      const keys = []
      vm.menus.forEach(item => keys.push(item.path))
      return keys
    }
  },
  watch: {
    $route: {
      handler () {
        this.updateMenu()
      },
      immediate: true
    }
  },
  created () {},
  methods: {
    updateMenu () {
      const routes = this.$route.matched.concat()
      // const { hidden } = this.$route.meta
      if (routes.length >= 3) {
        // routes.pop()
        this.selectedKeys = [routes[2].name]
      } else {
        this.selectedKeys = [routes.pop().name]
      }
      const openKeys = []
      routes.forEach(item => {
        item.name && openKeys.push(item.name)
      })

      this.openKeys = openKeys
    },
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => !this.openKeys.includes(key))
      if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    onMenuSelect (obj) {
      this.selectedKeys = [obj.key]
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../config/style.less";
  @layout-menu: ~'@{u-prefix}-layout-menu';
  .@{layout-menu} {
    max-height: 100%;
    overflow-y: auto;
    border-right: 0;
    ::v-deep .ant-menu-submenu-title{
      width: 100%;
    }
  }
</style>
