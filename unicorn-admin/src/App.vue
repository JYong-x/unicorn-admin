<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('zh-cn')
export default {
  created () {
    try {
      document.body.removeChild(document.getElementById('app-loading'))
      // setTimeout(function() {
      //   document.getElementById('appConfig').style.display = 'block'
      // }, 500)
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
  #app {
    height: 100%;
    .content-occupy-screen {
      padding: 16px;
      background: #fff;
      margin-bottom: 24px;
    }
  }
  .ant-select-dropdown{
    .ant-select-dropdown-menu{
      li{
        &:first-child{
          min-height: 32px;
        }
      }
    }
  }
</style>
