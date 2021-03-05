import { appConfig } from '@/config'
import { BasicLayout } from '@/layouts'

const { name, code, namespace, icon } = appConfig

/**
 * path: 路由地址,
 * name: 路由名称，
 * hidden: (false)是否在菜单显示
 * hideChildrenInMenu: (false)强制菜单显示为Item而不是SubItem(配合 meta.hidden)
 * x: 菜单在下拉菜单中的x坐标位置
 * y: 菜单在下拉菜单中的y坐标位置
 * meta: {
 *  title: 显示在侧边栏、面包屑和标签栏的文字
 *  hiddenInBreadcrumb: (false) 在面包屑中不显示
 *  hidden: (false) 配合hideChildrenInMenu使用，用于隐藏菜单时，提供递归到父菜单显示 选中菜单项
 *  hiddenHeaderContent: (false) 不显示面包屑
 *  keepAlive: (false) 缓存路由
 *  icon: (-) 菜单图标(svg)
 *  permission: 权限
 *  namespace: 系统命名空间(默认系统命名空间，当路由命名空间与系统命名空间不一致时需要添加)
 * }
 */

export const asyncRouters = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: BasicLayout,
    meta: { title: '主页' },
    children: [
      {
        path: '/home',
        name: 'home',
        x: 1,
        meta: { title: '首页', icon: 'home' },
        component: () => import('@/views/home/home')
      },
      {
        path: '/page1',
        name: 'page1',
        x: 1,
        meta: { title: '页面1', icon: 'home' },
        component: () => import('@/views/page/page1')
      }
    ]
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouters = [
  {
    path: '/redirect',
    component: BasicLayout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/constant/redirect')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/constant/login/login')
  },
  {
    path: '/token-index',
    name: 'tokenIndex',
    hidden: true,
    component: () => import('@/views/constant/login/token-index')
  },
  {
    path: '/cas',
    name: 'cas',
    hidden: true,
    component: () => import('@/views/constant/login/cas')
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/constant/exception/404')
  }
]

const curSystemRouters = {
  name,
  code,
  namespace,
  icon,
  originRouters: asyncRouters
}

export default curSystemRouters
