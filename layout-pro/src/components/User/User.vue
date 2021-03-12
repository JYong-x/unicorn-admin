<template>
  <Dropdown
    :trigger="['click']"
    :get-popup-container="triggerNode => triggerNode"
    placement="bottomRight"
    @visibleChange="visibleChange"
  >
    <div class="trigger-wrap">
      <Avatar
        class="avatar"
        icon="user"
      ></Avatar>
      <Icon
        type="caret-down"
        class="direction-icon"
      ></Icon>
    </div>
    <div
      slot="overlay"
      class="dropdown-container"
      @click.stop
    >
      <div
        class="content-item info"
        @click.stop
      >
        <div>
          <span class="info-item user-name text-b">{{ userInfo.name }}</span>
          <span class="info-item user-code">{{ userInfo.tag }}</span>
        </div>
        <div class="info-item user-department">{{ userInfo.deptName }}</div>
      </div>
      <Button
        :disabled="logoutLoading"
        :loading="logoutLoading"
        class="content-item btn"
        type="link"
        block
        @click="logout"
      >注销</Button>
    </div>
  </Dropdown>
</template>

<script>
import 'ant-design-vue/es/dropdown/style'
import Dropdown from 'ant-design-vue/es/dropdown'
import 'ant-design-vue/es/avatar/style'
import Avatar from 'ant-design-vue/es/avatar'
import 'ant-design-vue/es/icon/style'
import Icon from 'ant-design-vue/es/icon'
import 'ant-design-vue/es/button/style'
import Button from 'ant-design-vue/es/button'
export default {
  name: 'User',
  components: {
    Dropdown,
    Avatar,
    Icon,
    Button
  },
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      visible: false,
      logoutLoading: false
    }
  },
  methods: {
    visibleChange (visible) {
      this.visible = visible
    },
    logout () {
      this.logoutLoading = true
      this.$store.dispatch('Logout').then(() => {
        console.log('退出登录')
      }).finally(() => {
        this.logoutLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .trigger-wrap {
    cursor: pointer;
    .avatar {
      background-color: transparent;
      border: 2px solid #fff;
    }
    .direction-icon {
      padding-left: 8px;
      color: #fff;
    }
  }
  .dropdown-container {
    margin-top: -4px;
    background: #fff;
    border: 1px solid #D9D9D9;
    border-radius: 4px;

    /* box-shadow: 0 2px 8px rgba(0,0,0,.15); */
    .content-item {
      padding: 8px 16px;
      .user-name {
        font-size: 16px;
        padding-right: 8px;
      }
      .user-code, .user-department {
        font-size: 12px;
        color: #8c8c8c;
      }
      &:not(:last-child) {
        border-bottom: 1px dashed #d9d9d9;
      }
      &.info {
        line-height: 32px;
        cursor: default;
      }
      &.btn {
        padding: 0 16px 0;
        cursor: pointer;
        border-radius: 0;
        text-align: left;
        color: rgba(0, 0, 0, .65);
        transition: all .3s;
        &:hover {
          /* color: #33A3FF; */
          background: #E6EFFA;
        }
      }
    }
    .content-item:not(:first-child):not(.btn) {
      padding-top: 8px;
    }
  }
</style>
