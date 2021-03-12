<template>
  <div v-if="!isMobile" :class="[`${prefix}-layout-header-menu`]">
    <div
      ref="menuBtn"
      class="menu-btn"
      @mouseenter="menuEnter"
      @mouseleave="menuLeave"
    >
      <Icon
        type="menu"
        class="menu-btn-icon"
      ></Icon>
    </div>
    <Drawer
      :visible="visible"
      placement="top"
      :closable="false"
      :z-index="900"
      height="auto"
      :body-style="{maxHeight: '80vh', padding: 0}"
      :wrap-style="{top: '60px'}"
      :wrap-class-name="`${prefix}-layout-header-menu-drawer`"
    >
      <div
        :class="[`${prefix}-layout-header-menu-content`]"
        @mouseenter="menuEnter"
        @mouseleave="menuLeave"
      >
        <div class="layout-systems-container">
          <slot name="systemMenu"></slot>
        </div>
        <div class="layout-menu-container">
          <template v-for="x of maxMenuX">
            <div
              v-if="visibleMenuCol(x)"
              :key="x"
              class="menu-col"
            >
              <Menu
                :open-keys="openKeys"
                :selected-keys="selectedKeys"
                class="layout-menu"
                mode="inline"
                theme="light"
                @openChange="onOpenChange"
                @click="onMenuSelect"
              >
                <template v-for="route of menuCol(x)">
                  <SubMenu
                    v-if="!route.hideChildrenInMenu && !route.hidden && route.children && route.children.length"
                    :key="route.name"
                    class="layout-menu-sub-menu-item"
                  >
                    <span slot="title" class="layout-menu-level-1">
                      <Icon
                        v-if="route.meta && route.meta.icon"
                        :component="typeof route.meta.icon === 'object' ? route.meta.icon : undefined"
                        :type="typeof route.meta.icon === 'string' ? route.meta.icon : undefined"
                      ></Icon>
                      <span>{{ route.meta.title }}</span>
                    </span>
                    <template v-for="r of route.children">
                      <Item
                        v-if="!r.hidden"
                        :key="r.name"
                        class="layout-menu-item"
                      >
                        <router-link
                          v-if="!r.meta.target"
                          :to="r.path"
                        >
                          {{ r.meta.title }}
                        </router-link>
                        <a
                          v-else
                          :href="r.path"
                          :target="r.meta.target"
                        >{{ r.meta.title }}</a>
                      </Item>
                    </template>
                  </SubMenu>
                  <Item
                    v-else-if="!route.hidden"
                    :key="route.name"
                    class="layout-menu-item layout-menu-level-1"
                  >
                    <router-link
                      v-if="!route.meta.target"
                      :to="route.path"
                    >
                      <Icon
                        v-if="route.meta && route.meta.icon"
                        :component="typeof route.meta.icon === 'object' ? route.meta.icon : undefined"
                        :type="typeof route.meta.icon === 'string' ? route.meta.icon : undefined"
                      ></Icon>
                      <span>{{ route.meta.title }}</span>
                    </router-link>
                    <a
                      v-else
                      :href="route.path"
                      :target="route.meta.target"
                    >{{ route.meta.title }}</a>
                  </Item>
                </template>
              </Menu>
            </div>
          </template>
        </div>
      </div>
    </Drawer>
  </div>
</template>

<script>
import config from '../../config'
import 'ant-design-vue/es/drawer/style'
import Drawer from 'ant-design-vue/es/drawer'
import 'ant-design-vue/es/menu/style'
import Menu from 'ant-design-vue/es/menu'
import Icon from '../Icon'
const { Item, SubMenu } = Menu
export default {
  name: 'DropdownMenu',
  components: {
    Icon,
    Drawer,
    Menu,
    Item,
    SubMenu
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Array,
      default: () => []
    },
    showSystemMenu: {
      type: Boolean,
      default: true
    },
    config: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      prefix: config.prefix,
      visible: false,
      openKeys: [],
      selectedKeys: [],
      maxMenuX: 4
    }
  },
  computed: {
    visibleMenuCol () {
      return function (x) {
        return Boolean(this.menus.find(ele => (ele.x) === x))
      }
    },
    menuCol () {
      return function (x) {
        return this.menus.filter(ele => (ele.x) === x)
      }
    }
  },
  watch: {
    menus: {
      handler (menus) {
        menus.map(item => {
          if (item.x) {
            this.maxMenuX = Math.max(this.maxMenuX, item.x)
          }
          this.menus.forEach(item => {
            this.openKeys.push(item.name)
          })
        })
      },
      immediate: true
    },
    $route: {
      handler () {
        this.updateMenu()
      },
      immediate: true
    }
  },
  created () {
  },
  mounted () {
    // this.setOpenKeys()
  },
  methods: {
    updateMenu () {
      const routes = this.$route.matched.concat()
      const { hidden } = this.$route.meta
      if (routes.length >= 3 && hidden) {
        routes.pop()
        this.selectedKeys = [routes[routes.length - 1].name]
      } else {
        this.selectedKeys = [routes.pop().name]
      }
      const openKeys = []
      routes.forEach(item => {
        item.name && openKeys.push(item.name)
      })

      this.openKeys = openKeys
    },
    onOpenChange (openKeys) {},
    onMenuSelect (obj) {
      this.selectedKeys = [obj.key]
      this.visible = false
    },
    menuEnter () {
      clearTimeout(this.leaveTimer)
      this.enterTimer = setTimeout(() => {
        this.visible = true
      }, 300)
    },
    menuLeave () {
      clearTimeout(this.enterTimer)
      clearTimeout(this.leaveTimer)
      this.leaveTimer = setTimeout(() => {
        this.visible = false
      }, 300)
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../config/style.less";
  @layout-header-menu: ~'@{u-prefix}-layout-header-menu';
  @layout-header-menu-content: ~'@{u-prefix}-layout-header-menu-content';
  .@{layout-header-menu} {
    width: 100%;
    height: 100%;
    .menu-btn {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 100%;
      .menu-btn-icon {
        font-size: 24px;
        color: #fff;
      }
    }
  }
  .@{layout-header-menu-content} {
    display: flex;
    min-height: 300px;
    .layout-systems-container {
      flex: 0 0 20%;
      max-height: 80vh;
      overflow-y: auto;
      background: #e6effa;
    }
    .layout-menu-container {
      display: flex;
      flex: 1;
      width: 100%;
      max-height: 80vh;
      overflow-y: auto;
      background: #ffffff;
      .menu-col {
        width: 25%;
        padding: 0 16px;
      }
    }
    .layout-menu-level-1, .layout-menu-level-1 a {
      font-weight: 600;
      color: rgba(0, 0, 0, .85)
    }
    .layout-menu {
      border-right: 0;
    }
  }
</style>
