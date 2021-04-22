/**
 * 成绩权限路由
 * @type { *[] }
 */
const subUrl =  '/sam'
const routerMap = [
  {
    path: subUrl + '/Home',
    name: 'Home',
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
    path: subUrl + '/ScoreInput',
    name: 'ScoreInput',
    icon: '',
    menuLevel: 0,
    meta: {
      target: '_blank',
      parentName: '主页',
      title: '成绩录入',
      matched: [{ path: '', name: '成绩录入' }]
    }
  },
  {
    path: subUrl + '/GradeChanges',
    name: 'GradeChanges',
    x: 1,
    y: 3,
    icon: 'icon-zuoye',
    menuLevel: 0,
    meta: {
      target: '_blank',
      parentName: '课程列表',
      title: '新建成绩变更',
      matched: [{ path: 'CurriculumSchedule', name: '课程列表' }, { path: '', name: '新建成绩变更' }]
    }
  },
  {
    path: subUrl + '/GradeReviewMange',
    name: 'GradeReviewMange',
    x: 1,
    y: 6,
    icon: 'icon-shenhexiangmu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '主页',
      title: '审核管理',
      matched: [{ path: '', name: '审核管理' }]
    }
  },
  {
    path: subUrl + '/GradeDatabaseManagement',
    name: 'GradeDatabaseManagement',
    x: 1,
    y: 7,
    icon: 'icon-chaxun',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '主页',
      title: '成绩库管理',
      matched: [{ path: '', name: '成绩库管理' }]
    }
  },
  {
    path: subUrl + '/ResultInquiry',
    name: 'ResultInquiry',
    x: 1,
    y: 8,
    icon: 'icon-chaxun',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '主页',
      title: '成绩查询',
      matched: [{ path: '', name: '成绩查询' }]
    }
  },
  {
    path: subUrl + '/GradeConversion',
    name: 'GradeConversion',
    x: 1,
    y: 8,
    icon: 'icon-qiehuanfanxiangnizhuanmianxing',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '主页',
      title: '成绩转换',
      matched: [{ path: '', name: '成绩转换' }]
    }
  },
  {
    path: subUrl + '/ScoreManagement',
    name: 'ScoreManagement',
    x: 1,
    y: 9,
    icon: 'icon-kechengguanli5',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '主页',
      title: '成绩管理',
      matched: [{ path: '', name: '成绩管理' }]
    }
  },
  {
    path: subUrl + '/AchievementChangeAlarm',
    name: 'AchievementChangeAlarm',
    x: 1,
    y: 10,
    icon: 'icon-kechengguanli5',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '主页',
      title: '成绩异动报警',
      matched: [{ path: '', name: '成绩异动报警' }]
    }
  },
  {
    path: subUrl + '/ResitManagement',
    name: 'ResitManagement',
    x: 1,
    y: 10,
    icon: 'icon-kaoshiguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '主页',
      title: '补考管理',
      matched: [{ path: '', name: '补考管理' }]
    }
  },
  {
    path: subUrl + '/CourseRecognition',
    name: 'CourseRecognition',
    icon: 'icon-moban-copy',
    x: 1,
    y: 11,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseRecognitionPage'],
      namespace: 'KR_SAM',
      title: '成绩认定',
      parentName: '主页',
      matched: [{ path: '', name: '成绩认定' }]
    }
  },
  /**
   * * --------------------------------管理台---------------------------------------
   */
  {
    path: subUrl + '/ManageConsolo',
    name: 'ManageConsolo',
    x: 4,
    y: 1,
    icon: 'icon-shuangren',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '管理台',
      namespace: 'KR_SAM',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl + '/AdminPermission',
    name: 'AdminPermission',
    x: 4,
    y: 3,
    icon: 'icon-zhaopin',
    menuLevel: 2,
    meta: {
      target: '_blank',
      // requireAuth: true,
      parentName: '',
      title: '权限',
      namespace: 'KR_SAM',
      permission: ['ViewAdminPermissionPage'],
      matched: [{ path: '', name: '权限' }]
    }
  },
  {
    path: subUrl + '/AdminRole',
    name: 'AdminRole',
    x: 4,
    y: 4,
    icon: 'icon-iconfont-jiaoshi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '',
      title: '角色',
      namespace: 'KR_SAM',
      matched: [{ path: '', name: '角色' }]
    }
  },
  {
    path: subUrl + '/AdminUser',
    name: 'AdminUser',
    x: 4,
    y: 5,
    icon: 'icon-yonghu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '用户',
      namespace: 'KR_SAM',
      permission: ['ViewAdminUserPage'],
      matched: [{ path: '', name: '用户' }]
    }
  },
  {
    path: subUrl + '/AdminWorkManage',
    name: 'AdminWorkManage',
    x: 4,
    y: 6,
    icon: 'icon-moban-copy',
    menuLevel: 2,
    meta: {
      target: '_blank',
      // requireAuth: true,
      permission: ['ViewWorkflowPage'],
      namespace: 'KR_SAM',
      title: '工作流',
      parentName: '管理台',
      matched: [{ path: '', name: '工作流' }]
    }
  },
  {
    path: subUrl + '/AnnouncementManagement',
    name: 'AnnouncementManagement',
    x: 4,
    y: 7,
    icon: 'icon-tubiaoku-',
    menuLevel: 2,
    meta: {
      target: '_blank',
      // requireAuth: true,
      permission: ['ViewWorkflowPage'],
      namespace: 'KR_SAM',
      title: '公告管理',
      parentName: '管理台',
      matched: [{ path: '', name: '公告管理' }]
    }
  },
  {
    path: subUrl + '/AdminTimeManagement',
    name: 'AdminTimeManagement',
    x: 4,
    y: 8,
    icon: 'icon-shijian6',
    menuLevel: 2,
    meta: {
      target: '_blank',
      // requireAuth: true,
      // permission: ['ViewAdminTimeManagementPage'],
      namespace: 'KR_SAM',
      title: '时间',
      parentName: '管理台',
      matched: [{ path: '', name: '时间' }]
    }
  }
  /**
   * -----------------------------------------------------------------------
   */
]

export default {
  name: '成绩管理',
  code: 'sam',
  namespace: 'KR_SAM',
  icon: 'icon-server_05',
  originRouters: routerMap
}
