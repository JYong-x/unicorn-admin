import Vue from 'vue'
import Page from './page'

const prefix = 'U'

const componentConfigs = []

const componentFiles = require.context('../base', true, /\.vue$/)
componentFiles.keys().forEach(filePath => {
  const value = componentFiles(filePath)
  const componentName = filePath.split('/').pop().replace(/\.\w+$/, '')
  componentConfigs.push({
    name: prefix + componentName,
    value: value.default || value
  })
})

const index = {
  install (Vue) {
    Vue.component(prefix + 'Page', Page)
    componentConfigs.forEach(item => {
      Vue.component(item.name, item.value)
    })
  }
}

Vue.use(index)
