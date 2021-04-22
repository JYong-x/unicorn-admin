import { httpConfig } from '@/config'

const teachEvaUrl = httpConfig.appRoot + '/teach/portal'
const testUrl = httpConfig.appRoot + '/test/portal'
const teachEvaRouterMap = [
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 1,
    icon: 'icon-zhuye',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '主页',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 3,
    y: 2,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '查询/统计',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 3,
    y: 3,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '评教结果查询',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 3,
    y: 4,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '评教进度',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 3,
    y: 5,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '评教统计',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 3,
    y: 6,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '评学统计',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 3,
    y: 7,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '问卷调查',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 2,
    y: 1,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '评教管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 2,
    y: 2,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '评教课程管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 2,
    y: 3,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '评教结果管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 2,
    y: 4,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '问卷管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 2,
    y: 5,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '问卷设置',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 2,
    y: 6,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '问卷填写',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 2,
    y: 7,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '问卷结果管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 1,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '评教/评学',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 2,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '评教设置',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 3,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '指标管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 4,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '学生评教',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 5,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '同步评教',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 6,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '专家评教',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 7,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '领导评教',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 8,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '评学设置',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 9,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '学生评学',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 1,
    y: 10,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '教师评学',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 4,
    y: 1,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '管理台',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 4,
    y: 2,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '类别',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 4,
    y: 3,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '时间',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 4,
    y: 4,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '用户',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 4,
    y: 5,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '角色',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: testUrl,
    name: '',
    x: 4,
    y: 6,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '权限',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 4,
    y: 7,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '日志',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: teachEvaUrl,
    name: '',
    x: 4,
    y: 8,
    icon: 'icon-zhutiqiehuanicon',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '工作流',
      matched: [{ path: '', name: '' }]
    }
  }
]

export default {
  name: '教室教学档案',
  code: 'tams',
  namespace: 'KR_TEACH',
  icon: 'icon-jiaoshixinxi',
  originRouters: teachEvaRouterMap
}
