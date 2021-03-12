<template>
  <div class="page-container">
    <div v-if="!$route.meta.hiddenTitleInPage" class="page-header">
      <div v-if="!$route.meta.hiddenTitleInPage" class="page-header-title">{{ $route.meta.title }}</div>
      <div v-if="$slots.extra && !skeleton" class="page-header-extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="page-body">
      <Skeleton v-if="skeleton" active></Skeleton>
      <slot v-else></slot>
    </div>
  </div>
</template>

<script>
import 'ant-design-vue/es/skeleton/style'
import Skeleton from 'ant-design-vue/es/skeleton'
export default {
  name: 'Page',
  components: {
    Skeleton
  },
  props: {
    skeleton: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.page-container {
}
.page-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px 16px;
  .page-header-title {
    flex: 0 0 auto;
    font-size: 20px;
    font-weight: 600;
    color: rgba(0, 0, 0, .85)
  }
  .page-header-extra {
    flex: 0 0 auto;
  }
}
  .page-body {
    padding: 0 24px 24px;
  }
</style>
