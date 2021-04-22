const subUrl = '/test/portal'
const routerMap = [
  {
    path: subUrl,
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
    path: subUrl,
    name: '',
    x: 2,
    y: 1,
    icon: 'icon-chengji-',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '考试管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 1,
    y: 2,
    icon: 'icon-jingshi6',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '考试违纪管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 1,
    y: 3,
    icon: 'icon-tongji',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '考试违纪统计',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 1,
    y: 4,
    icon: 'icon-jingshi6',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '考试违纪等级',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 2,
    icon: 'icon-peixun5',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '校外监考教师维护',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 3,
    icon: 'icon-shijian1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '考试时间模式设置',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 4,
    icon: 'icon-kecheng10',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '考试课程管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 5,
    icon: 'icon-kecheng10',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '考次管理',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 6,
    icon: 'icon-shijian1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '智能排考',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 7,
    icon: 'icon-zhaopin',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '排考参数设置',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 8,
    icon: 'icon-zhaopin',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '监考教师安排',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 9,
    icon: 'icon-zhuanjia',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '学生考试安排',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 9,
    icon: 'icon-shujuziyuan-chuangxinjigou',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '考试地点管理 ',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 10,
    icon: 'icon-shijian',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '考试时间安排',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 2,
    y: 11,
    icon: 'icon-dayin4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '打印管理 ',
      matched: [{ path: '', name: '' }]
    }
  },

  {
    path: subUrl,
    name: '',
    x: 3,
    y: 1,
    icon: 'icon-yonghu4',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '管理台',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 3,
    y: 2,
    icon: 'icon-yonghu4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '用户',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 3,
    y: 3,
    icon: 'icon-yonghu4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '角色',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 3,
    y: 4,
    icon: 'icon-yonghu4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '权限',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 3,
    y: 5,
    icon: 'icon-yonghu4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '日志',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl,
    name: '',
    x: 3,
    y: 6,
    icon: 'icon-yonghu4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '工作流',
      matched: [{ path: '', name: '' }]
    }
  }
]

export default {
  name: '考试',
  code: 'tams',
  namespace: 'KR_TEST',
  icon: 'icon-jiaoshixinxi',
  originRouters: routerMap
}

