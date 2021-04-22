import { httpConfig } from '@/config'
/**
 * 排课权限路由
 * @type { *[] }
 */
const subUrl = '/tt'
const routerMap = [
  {
    path: subUrl + '/Home',
    name: 'Home',
    x: 1,
    y: 1,
    icon: 'fa fa-home',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewHomePage'],
      namespace: 'KR_TT',
      title: '主页',
      matched: [{ path: '', name: '' }]
    }
  }, {
    path: '/WorkSpaceHome',
    name: 'WorkSpaceHome',
    x: 1,
    y: 1,
    icon: 'fa fa-home',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewWorkSpaceHomePage'],
      namespace: 'KR_TT',
      title: '公共主页',
      matched: [{ path: '', name: '' }]
    }
  }, {
    path: subUrl + '/CourseClassSettingInfo',
    name: 'CourseClassSettingInfo',
    x: 1,
    y: 2,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseClassSettingInfoPage'],
      namespace: 'KR_TT',
      title: '参数设置',
      parentName: '参数设置',
      matched: [{ path: '', name: '参数设置' }]
    }
  }, {
    path: subUrl + '/CourseSessionInfo',
    name: 'CourseSessionInfo',
    x: 1,
    y: 3,
    icon: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {
      'requireAuth': true,
      permission: ['ViewCourseSessionInfoPage'],
      namespace: 'KR_TT',
      title: '学期信息',
      parentName: '学期信息',
      matched: [{path: '', name: '学期信息'}]}
  }, {
    path: subUrl + '/CourseTimePattern',
    name: 'CourseTimePattern',
    x: 1,
    y: 3,
    icon: 'icon-jindu11',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseTimePatternPage'],
      namespace: 'KR_TT',
      title: '上课节次及时间',
      parentName: '排课设置',
      matched: [{ path: '/CourseClassSettingInfo', name: '排课设置' }, { path: '', name: '上课节次及时间' }]
    }
  }, {
    path: subUrl + '/CourseExperimentAndProject',
    name: 'CourseExperimentAndProject',
    x: 1,
    y: 4,
    icon: 'icon-kecheng3',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseExperimentAndProjectPage'],
      namespace: 'KR_TT',
      title: '实验课程及项目',
      parentName: '排课设置',
      matched: [{ path: '/CourseClassSettingInfo', name: '排课设置' }, { path: '', name: '实验课程及项目' }]
    }
  }, {
    path: subUrl + '/CourseBlockedTimePeriodStu',
    name: 'CourseBlockedTimePeriodStu',
    x: 1,
    y: 5,
    icon: 'icon-weishenqing',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseBlockedTimePeriodStuPage'],
      namespace: 'KR_TT',
      title: '屏蔽排课时间',
      parentName: '排课设置',
      matched: [{ path: '/CourseClassSettingInfo', name: '排课设置' }, { path: '', name: '屏蔽排课时间' }]
    }
  },
  {
    path: subUrl + '/FullTimeTeacher',
    name: 'FullTimeTeacher',
    x: 1,
    y: 6,
    icon: 'icon-jiaoshixinxi',
    menuLevel: 2,
    meta: {
      'requireAuth': true,
      permission: ['ViewFullTimeTeacherPage'],
      title: '专任教师列表',
      namespace: 'KR_TT',
      parentName: '专任教师',
      matched: [{path: '', name: '专任教师列表'}]}
  }, {
    path: subUrl + '/CourseInstructionalResource',
    name: 'CourseInstructionalResource',
    x: 1,
    y: 6,
    icon: 'icon-jiaoxuebanguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseInstructionalResourcePage'],
      namespace: 'KR_TT',
      title: '教学资源',
      matched: [{ path: '', name: '教学资源' }]
    }
  }, {
    path: subUrl + '/SetClassParameters',
    name: 'SetClassParameters',
    x: 1,
    y: 7,
    icon: 'icon-xiugai4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewSetClassParametersPage'],
      namespace: 'KR_TT',
      title: '排课控制',
      parentName: '排课设置',
      matched: [{ path: '/CourseClassSettingInfo', name: '排课设置' }, { path: '', name: '排课控制' }]
    }
  }, {
    path: subUrl + '/CourseArrangementTitle',
    name: 'CourseArrangementTitle',
    x: 1,
    y: 10,
    icon: 'icon-jiaoxueziyuan',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseArrangementTitlePage'],
      namespace: 'KR_TT',
      title: '课表编排'
    }
  },
  {
    path: subUrl + '/CourseDistributableExperiment',
    name: 'CourseDistributableExperiment',
    x: 1,
    y: 11,
    icon: 'icon-yaopinjiance',
    menuLevel: 2,
    meta: {
      'requireAuth': true,
      permission: ['ViewCourseDistributableExperimentPage'],
      namespace: 'KR_TT',
      title: '分配实验任务',
      parentName: '主页',
      matched: [{path: '', name: '分配实验任务'}]}
  }, {
    path: subUrl + '/TeachingTaskRequirements',
    name: 'TeachingTaskRequirements',
    x: 1,
    y: 11,
    icon: 'icon-yaopinjiance',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewTeachingTaskRequirementsPage'],
      namespace: 'KR_TT',
      title: '教学任务需求',
      parentName: '主页',
      matched: [{ path: '', name: '教学任务需求' }]
    }
  }, {
    path: subUrl + '/ComprehensiveArrangeCourse',
    name: 'ComprehensiveArrangeCourse',
    x: 1,
    y: 12,
    icon: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewMultipleArrangeClassPage'],
      namespace: 'KR_TT',
      title: '综合排课',
      parentName: '综合排课',
      matched: [{ path: '', name: '综合排课' }]
    }
  }, {
    path: subUrl + '/CourseAssistArrangementClass',
    name: 'CourseAssistArrangementClass',
    x: 1,
    y: 13,
    icon: 'icon-xuankejieguo',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseAssistArrangementClassPage'],
      namespace: 'KR_TT',
      title: '辅助排课',
      parentName: '课程编排',
      matched: [{ path: '/CourseStudySchedule', name: '教学安排' }, { path: '', name: '辅助排课' }]
    }
  }, {
    path: subUrl + '/Schedule',
    name: 'Schedule',
    x: 1,
    y: 13,
    icon: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {'requireAuth': true,
      permission: ['ViewSchedulePage'],
      namespace: 'KR_TT',
      title: '排课进度',
      parentName: '排课进度',
      matched: [{path: '', name: '排课进度'}]}
  }, {
    path: subUrl + '/TeachingClassManagement',
    name: 'TeachingClassManagement',
    x: 1,
    y: 14,
    icon: 'icon-msnui-copy-file',
    menuLevel: 2,
    meta: {'requireAuth': true,
      permission: ['ViewTeachingClassManagementPage'],
      namespace: 'KR_TT',
      title: '教学班管理',
      matched: [{path: '', name: '教学班管理'}]
    }
  }, {
    path: subUrl + '/EditClassRoom',
    name: 'EditClassRoom',
    x: 1,
    y: 14,
    icon: 'icon-jieguo',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewEditClassRoomPage'],
      namespace: 'KR_TT',
      title: '编排教室',
      parentName: '编排教室',
      matched: [{ path: '', name: '编排教室' }]
    }
  }, {
    path: subUrl + '/RescheduleAndSuspendClasses',
    name: '',
    x: 2,
    y: 5,
    icon: 'icon-kechengdingzhi',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      title: '调停课'
    }
  },
  {
    path: subUrl + '/RescheduleAndSuspendClassesApply',
    name: 'RescheduleAndSuspendClassesApply',
    x: 2,
    y: 6,
    icon: 'icon-tubiaolunkuo_huaban',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      title: '调停课申请',
      permission: ['ViewRescheduleAndSuspendClassesApplyPage'],
      namespace: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '调停课申请' }]
    }
  },
  {
    path: subUrl + '/RescheduleAndSuspendClassesApplyManagement',
    name: 'RescheduleAndSuspendClassesApplyManagement',
    x: 2,
    y: 7,
    icon: 'icon-caidantubiao-05',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      title: '调停课申请管理',
      permission: ['ViewRescheduleAndSuspendClassesApplyManagementPage'],
      namespace: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '调停课申请管理' }]
    }
  },
  {
    path: subUrl + '/RescheduleAndSuspendClassesCountSet',
    name: 'RescheduleAndSuspendClassesCountSet',
    x: 2,
    y: 8,
    icon: 'icon-punishment',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      title: '调停课次数设置',
      permission: ['ViewRescheduleAndSuspendClassesCountSetPage'],
      namespace: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '调停课次数设置' }]
    }
  },
  {
    path: subUrl + '/RescheduleAndSuspendClassesStatistics',
    name: 'RescheduleAndSuspendClassesStatistics',
    x: 2,
    y: 9,
    icon: 'icon-tongji1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      title: '调停课统计',
      permission: ['ViewRescheduleAndSuspendClassesStatisticsPage'],
      namespace: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '调停课统计' }]
    }
  }, {
    path: subUrl + '/TimeTabChangeLog',
    name: 'TimeTabChangeLog',
    x: 2,
    y: 10,
    icon: 'icon-rizhi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      title: '课表调整记录',
      permission: ['ViewTimeTabChangeLogPage'],
      namespace: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '课表调整记录' }]
    }
  },
  {
    path: '',
    name: '',
    x: 2,
    y: 11,
    icon: 'icon-xiaoyuanhuodong',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      title: '临时活动',
      namespace: 'KR_TT',
      parentName: '临时活动',
      permission: ['ViewApplicationTemporaryActivitiesPage'],
      matched: [{ path: '', name: '临时活动' }]
    }
  }, {
    path: subUrl + '/ApplicationTemporaryActivities',
    name: 'ApplicationTemporaryActivities',
    x: 2,
    y: 12,
    icon: 'icon-shenqing5',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      title: '临时活动申请',
      permission: ['ViewApplicationTemporaryActivitiesPage'],
      namespace: 'KR_TT',
      parentName: '临时活动',
      matched: [{ path: '', name: '临时活动' }, { path: '', name: '临时活动申请' }]
    }
  },
  {
    path: subUrl + '/TemporaryActivitiesApplyManage',
    name: 'TemporaryActivitiesApplyManage',
    x: 2,
    y: 13,
    icon: 'icon-kechengguanli5',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      title: '临时活动申请管理',
      permission: ['ViewTemporaryActivitiesApplyManagePage'],
      namespace: 'KR_TT',
      parentName: '临时活动',
      matched: [{ path: '', name: '临时活动' }, { path: '', name: '临时活动申请管理' }]
    }
  }, {
    path: subUrl + '/StartPlanTitle',
    name: 'StartPlanTitle',
    x: 3,
    y: 1,
    icon: 'icon-jindu14',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewStartPlanTitlePage'],
      namespace: 'KR_TT',
      title: '查询统计'
    }
  }, {
    path: subUrl + '/AllCourseSchedule',
    name: 'AllCourseSchedule',
    x: 3,
    y: 3,
    icon: 'icon-xuanke1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseTeacherSchedulePage'],
      namespace: 'KR_TT',
      title: '课表查询',
      parentName: '查询统计',
      matched: [{ path: '', name: '课表查询' }, { path: '', name: '快速查询' }]
    }
  }, {
    path: subUrl + '/FreeTimeSchedule',
    name: 'FreeTimeSchedule',
    x: 3,
    y: 3,
    icon: 'icon-xuanke1',
    menuLevel: 2,
    meta: {
      'requireAuth': true,
      permission: ['ViewFreeTimeSchedulePage'],
      namespace: 'KR_TT',
      title: '空闲时间查询',
      parentName: '查询统计',
      matched: [{path: '', name: '空闲时间查询'}]}
  },
  {
    path: subUrl + '/CourseInspection',
    name: 'CourseInspection',
    x: 3,
    y: 4,
    icon: 'icon-jiance1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseInspectionPage'],
      namespace: 'KR_TT',
      title: '排课检测',
      matched: [{ path: '', name: '排课检测' }]
    }
  }, {
    path: subUrl + '/ClassHourBalance',
    name: 'ClassHourBalance',
    x: 3,
    y: 5,
    icon: 'icon-kecheng1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewClassHourBalancePage'],
      namespace: 'KR_TT',
      title: '学时平衡',
      matched: [{ path: '', name: '学时平衡' }]
    }
  },
  {
    path: subUrl + '/GeneralCourseStatus',
    name: 'GeneralCourseStatus',
    x: 3,
    y: 6,
    icon: 'icon-moban',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewGeneralCourseStatusPage'],
      namespace: 'KR_TT',
      title: '通识课程修读情况',
      matched: [{ path: '', name: '通识课程修读情况' }]
    }
  }, {
    path: subUrl + '/DataImport',
    name: 'StartPlanTitle',
    x: 3,
    y: 7,
    icon: 'icon-jindu14',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewStartPlanTitlePage'],
      namespace: 'KR_TT',
      title: '数据导入'
    }
  }, {
    path: subUrl + '/ImportTeachingTask',
    name: 'ImportTeachingTask',
    x: 3,
    y: 8,
    icon: 'icon-ku1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewImportTeachingTaskPage'],
      namespace: 'KR_TT',
      title: '排课结果导入',
      parentName: '数据导入',
      matched: [{ path: '', name: '数据导入' }, { path: '', name: '排课结果导入' }]
    }
  },
  {
    path: subUrl + '/timeTableManageConsolo',
    name: 'timeTableManageConsolo',
    x: 4,
    y: 1,
    icon: 'icon-yonghu4',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewManageConsoloTimeTablePage'],
      namespace: 'KR_TT',
      title: '管理台',
      parentName: '管理台',
      matched: [{ path: '', name: '管理台' }]
    }
  }, {
    path: subUrl + '/AdminPermission',
    name: 'AdminPermission',
    x: 4,
    y: 3,
    icon: 'fa fa-user-secret',
    menuLevel: 2,
    meta: {
      target: '_blank',
      namespace: 'KR_TT',
      title: '权限',
      parentName: '管理台',
      matched: [{ path: '', name: '权限' }]
    }
  }, {
    path: subUrl + '/AdminRole',
    name: 'AdminRole',
    x: 4,
    y: 4,
    icon: 'fa fa-male',
    menuLevel: 2,
    meta: {
      target: '_blank',
      namespace: 'KR_TT',
      title: '角色',
      parentName: '管理台',
      matched: [{ path: '', name: '角色' }]
    }
  }, {
    path: subUrl + '/AdminUser',
    name: 'AdminUser',
    x: 4,
    y: 5,
    icon: 'fa fa-user',
    menuLevel: 2,
    meta: {
      target: '_blank',
      namespace: 'KR_TT',
      title: '用户',
      entrance: 'timeTableEnter',
      parentName: '管理台',
      matched: [{ path: '', name: '用户' }]
    }
  }, {
    path: subUrl + '/timeTableAdminUpdateUser',
    name: 'timeTableAdminUpdateUser',
    x: 0,
    y: 0,
    icon: null,
    menuLevel: 0,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewEditUserPage'],
      namespace: 'KR_TT',
      title: '用户编辑',
      matched: [{ path: '/timeTableAdminUser', name: '用户' }, { path: '', name: '用户编辑' }]
    }
  },
  {
    path: subUrl + '/AdminTimeManagement',
    name: 'AdminTimeManagement',
    x: 4,
    y: 7,
    icon: 'icon-shijian1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewAdminTimeManagementPage'],
      namespace: 'KR_TT',
      title: '时间',
      parentName: '排课设置',
      matched: [{ path: '', name: '时间' }]
    }
  }, {
    path: subUrl + '/AdminCategory',
    name: 'AdminCategory',
    x: 4,
    y: 2,
    icon: 'fa fa-asterisk',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewAdminCategoryPage'],
      namespace: 'KR_TT',
      title: '类别',
      parentName: '管理台',
      matched: [{ path: '', name: '类别' }]
    }
  }, {
    path: subUrl + '/AdminWorkManage',
    name: 'AdminWorkManage',
    x: 4,
    y: 6,
    icon: 'fa fa-random',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewWorkflowPage'],
      namespace: 'KR_TT',
      title: '工作流',
      parentName: '管理台',
      matched: [{ path: '', name: '工作流' }]
    }
  }, {
    path: subUrl + '/AdminEditBulletinBoard',
    name: 'AdminEditBulletinBoard',
    x: 4,
    y: 7,
    icon: 'fa fa-random',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewAdminEditBulletinBoardPage'],
      namespace: 'KR_TT',
      title: '公告管理',
      parentName: '管理台',
      matched: [{ path: '', name: '公告管理' }]
    }
  },
  {
    path: subUrl + '*',
    redirect: '/page404'
  }
]

export default {
  name: '排课管理',
  code: 'timetable',
  namespace: 'KR_TT',
  icon: 'icon-server_05',
  originRouters: routerMap
}
