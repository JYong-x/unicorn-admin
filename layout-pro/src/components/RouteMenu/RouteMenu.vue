<template>
  <Menu :class="type === 'side' ? 'menu-side' : 'menu-dropdown'">
    <template v-for="menu of menus">
      <SubMenu v-if="menu.children && !menu.hideChildrenInMenu" :key="menu.name">
        <span slot="title">
          <Icon
            v-if="menu.meta && menu.meta.icon"
            :component="typeof menu.meta.icon === 'object' ? menu.meta.icon : undefined"
            :type="typeof menu.meta.icon === 'string' ? menu.meta.icon : undefined"
          ></Icon>
          <span>{{ menu.meta.title }}</span>
        </span>
        <template v-if="!menu.hideChildrenInMenu && menu.children">
          <Item v-for="childMenu of menu.children" :key="childMenu.name">
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
            <router-link :to="childMenu.name">
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
      <Item v-else :key="menu.name">
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
        <router-link :to="menu.name">
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
import 'ant-design-vue/es/menu/style'
import Menu from 'ant-design-vue/es/menu'
import 'ant-design-vue/es/icon/style'
import Icon from 'ant-design-vue/es/icon'
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
    }
  },
  created () {
    console.log(this.menus)
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
