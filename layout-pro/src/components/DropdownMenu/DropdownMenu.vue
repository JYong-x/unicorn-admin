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
        class="menu-icon"
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
    >
      <div
        :class="[`${prefix}-layout-header-menu-content`]"
        @mouseenter="menuEnter"
        @mouseleave="menuLeave"
      >
        <div class="layout-systems-container"></div>
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
                @click="onMenuClick"
              >
                <template v-for="route of menuCol(x)">
                  <sub-menu
                    v-if="!route.hideChildrenInMenu && !route.hidden && route.children && route.children.length"
                    :key="route.path"
                  >
                    <span slot="title">
                      <Icon
                        v-if="route.meta && route.meta.icon"
                        :component="typeof route.meta.icon === 'object' ? route.meta.icon : undefined"
                        :type="typeof route.meta.icon === 'string' ? route.meta.icon : undefined"
                      ></Icon>
                      <span>{{ route.meta.title }}</span>
                    </span>
                    <template v-for="r of route.children">
                      <item
                        v-if="!r.hidden"
                        :key="r.path"
                      >
                        <router-link
                          v-if="!r.meta.target"
                          :to="r.path"
                        >
                          {{ r.meta.title }}
                        </router-link>
                        <a
                          v-else
                          :href="r.absolutePath || r.path"
                          :target="r.meta.target"
                        >{{ r.meta.title }}</a>
                      </item>
                    </template>
                  </sub-menu>
                  <item
                    v-else-if="!route.hidden"
                    :key="route.path"
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
                      :href="route.absolutePath || route.path"
                      :target="route.meta.target"
                    >{{ route.meta.title }}</a>
                  </item>
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
import 'ant-design-vue/es/icon/style'
import Icon from 'ant-design-vue/es/icon'
import 'ant-design-vue/es/menu/style'
import Menu from 'ant-design-vue/es/menu'
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
          console.log(menus)
        })
      }
    }
  },
  created () {
  },
  mounted () {
    this.setOpenKeys()
  },
  methods: {
    setOpenKeys () {
      this.menus.forEach(item => {
        this.openKeys.push(item.name)
      })
    },
    onOpenChange () {},
    onMenuClick (obj) {
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
      width: 100%;
      height: 100%;
      .menu-icon {
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
      background: #e6effa;
    }
    .layout-menu-container {
      display: flex;
      width: 100%;
      .menu-col {
        width: 25%;
        padding: 0 16px;
      }
    }
    .layout-menu {
      border-right: 0;
    }
  }
</style>
