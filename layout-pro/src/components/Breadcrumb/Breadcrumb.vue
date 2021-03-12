<template>
  <Breadcrumb class="layout-breadcrumb">
    <template v-if="breadList.length > 1">
      <BreadcrumbItem v-for="(item, index) in breadList" :key="item.name">
        <template v-if="!item.meta.hiddenInBreadcrumb">
          <router-link
            v-if="item.name !== name && index !== 1"
            :to="{ path: item.path === '' ? '/' : item.path }"
          >{{ item.meta.title }}</router-link>
          <span v-else>{{ item.meta.title }}</span>
        </template>
      </BreadcrumbItem>
    </template>
  </Breadcrumb>
</template>

<script>
import 'ant-design-vue/es/breadcrumb/style'
import Breadcrumb from 'ant-design-vue/es/breadcrumb'
const { Item: BreadcrumbItem } = Breadcrumb
export default {
  components: {
    Breadcrumb,
    BreadcrumbItem
  },
  data () {
    return {
      name: '',
      breadList: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      console.log(this.$route)
      this.breadList = []

      this.name = this.$route.name

      this.$route.matched.forEach(item => {
        if (item.name !== 'Home' && item.name !== 'home') {
          this.breadList.push(item)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .layout-breadcrumb {
    padding: 0 12px;
    line-height: 40px;
  }
</style>
