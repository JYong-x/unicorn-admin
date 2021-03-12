## 文件命名规范
### views
在`views`文件下，代表路由的`.vue`文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例子：

@/src/views/permission/permission.vue

使用横线连接 (kebab-case)来命名views主要是出于以下几个考虑。

横线连接 (kebab-case) 也是官方推荐的命名规范之一 文档
views下的.vue文件代表的是一个路由，所以它需要和component进行区分(component 都是大写开头)
页面的url 也都是横线连接的，比如https://www.xxx.admin/export-excel，所以路由对应的view应该要保持统一
没有大小写敏感问题

## Component
所有的`Component`文件都是以大写开头 (PascalCase)，这也是官方所 推荐的。

但除了 `index.vue`。

例子：

@/src/components/Card/index.vue
@/src/components/Menu/Menu.vue

## JS文件

所有的.js文件都以小驼峰命名 (kebabCase)。

例子：

@/src/utils/exportExcel.js

