import { httpConfig } from '@/config'
/**
 * 排课权限路由
 * @type { *[] }
 */
const timeUrl = httpConfig.appRoot + `/${process.env === 'production' ? 'tt' : 'timetable'}`
const timeTableRouterMap = [
  {
    path: timeUrl + '/Home',
    name: 'Home',
    coordinateX: 1,
    coordinateY: 1,
    iconCls: 'fa fa-home',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewHomePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '主页',
      matched: [{ path: '', name: '' }]
    }
  }, {
    path: '/WorkSpaceHome',
    name: 'WorkSpaceHome',
    coordinateX: 1,
    coordinateY: 1,
    iconCls: 'fa fa-home',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewWorkSpaceHomePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '公共主页',
      matched: [{ path: '', name: '' }]
    }
  }, {
    path: timeUrl + '/CourseClassSettingInfo',
    name: 'CourseClassSettingInfo',
    coordinateX: 1,
    coordinateY: 2,
    iconCls: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseClassSettingInfoPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '参数设置',
      parentName: '参数设置',
      matched: [{ path: '', name: '参数设置' }]
    }
  }, {
    path: timeUrl + '/CourseSessionInfo',
    name: 'CourseSessionInfo',
    coordinateX: 1,
    coordinateY: 3,
    iconCls: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {
      'requireAuth': true,
      permission: ['ViewCourseSessionInfoPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '学期信息',
      parentName: '学期信息',
      matched: [{path: '', name: '学期信息'}]}
  }, {
    path: timeUrl + '/CourseTimePattern',
    name: 'CourseTimePattern',
    coordinateX: 1,
    coordinateY: 3,
    iconCls: 'icon-jindu11',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseTimePatternPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '上课节次及时间',
      parentName: '排课设置',
      matched: [{ path: '/CourseClassSettingInfo', name: '排课设置' }, { path: '', name: '上课节次及时间' }]
    }
  }, {
    path: timeUrl + '/CourseExperimentAndProject',
    name: 'CourseExperimentAndProject',
    coordinateX: 1,
    coordinateY: 4,
    iconCls: 'icon-kecheng3',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseExperimentAndProjectPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '实验课程及项目',
      parentName: '排课设置',
      matched: [{ path: '/CourseClassSettingInfo', name: '排课设置' }, { path: '', name: '实验课程及项目' }]
    }
  }, {
    path: timeUrl + '/CourseBlockedTimePeriodStu',
    name: 'CourseBlockedTimePeriodStu',
    coordinateX: 1,
    coordinateY: 5,
    iconCls: 'icon-weishenqing',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseBlockedTimePeriodStuPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '屏蔽排课时间',
      parentName: '排课设置',
      matched: [{ path: '/CourseClassSettingInfo', name: '排课设置' }, { path: '', name: '屏蔽排课时间' }]
    }
  },
  {
    path: timeUrl + '/FullTimeTeacher',
    name: 'FullTimeTeacher',
    coordinateX: 1,
    coordinateY: 6,
    iconCls: 'icon-jiaoshixinxi',
    menuLevel: 2,
    meta: {
      'requireAuth': true,
      permission: ['ViewFullTimeTeacherPage'],
      pageTitle: '专任教师列表',
      namespaceCode: 'KR_TT',
      parentName: '专任教师',
      matched: [{path: '', name: '专任教师列表'}]}
  }, {
    path: timeUrl + '/CourseInstructionalResource',
    name: 'CourseInstructionalResource',
    coordinateX: 1,
    coordinateY: 6,
    iconCls: 'icon-jiaoxuebanguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseInstructionalResourcePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '教学资源',
      matched: [{ path: '', name: '教学资源' }]
    }
  }, {
    path: timeUrl + '/SetClassParameters',
    name: 'SetClassParameters',
    coordinateX: 1,
    coordinateY: 7,
    iconCls: 'icon-xiugai4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewSetClassParametersPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '排课控制',
      parentName: '排课设置',
      matched: [{ path: '/CourseClassSettingInfo', name: '排课设置' }, { path: '', name: '排课控制' }]
    }
  }, {
    path: timeUrl + '/CourseArrangementTitle',
    name: 'CourseArrangementTitle',
    coordinateX: 1,
    coordinateY: 10,
    iconCls: 'icon-jiaoxueziyuan',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseArrangementTitlePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '课表编排'
    }
  },
  {
    path: timeUrl + '/CourseDistributableExperiment',
    name: 'CourseDistributableExperiment',
    coordinateX: 1,
    coordinateY: 11,
    iconCls: 'icon-yaopinjiance',
    menuLevel: 2,
    meta: {
      'requireAuth': true,
      permission: ['ViewCourseDistributableExperimentPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '分配实验任务',
      parentName: '主页',
      matched: [{path: '', name: '分配实验任务'}]}
  }, {
    path: timeUrl + '/TeachingTaskRequirements',
    name: 'TeachingTaskRequirements',
    coordinateX: 1,
    coordinateY: 11,
    iconCls: 'icon-yaopinjiance',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewTeachingTaskRequirementsPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '教学任务需求',
      parentName: '主页',
      matched: [{ path: '', name: '教学任务需求' }]
    }
  }, {
    path: timeUrl + '/ComprehensiveArrangeCourse',
    name: 'ComprehensiveArrangeCourse',
    coordinateX: 1,
    coordinateY: 12,
    iconCls: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewMultipleArrangeClassPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '综合排课',
      parentName: '综合排课',
      matched: [{ path: '', name: '综合排课' }]
    }
  }, {
    path: timeUrl + '/CourseAssistArrangementClass',
    name: 'CourseAssistArrangementClass',
    coordinateX: 1,
    coordinateY: 13,
    iconCls: 'icon-xuankejieguo',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseAssistArrangementClassPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '辅助排课',
      parentName: '课程编排',
      matched: [{ path: '/CourseStudySchedule', name: '教学安排' }, { path: '', name: '辅助排课' }]
    }
  }, {
    path: timeUrl + '/Schedule',
    name: 'Schedule',
    coordinateX: 1,
    coordinateY: 13,
    iconCls: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {'requireAuth': true,
      permission: ['ViewSchedulePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '排课进度',
      parentName: '排课进度',
      matched: [{path: '', name: '排课进度'}]}
  }, {
    path: timeUrl + '/TeachingClassManagement',
    name: 'TeachingClassManagement',
    coordinateX: 1,
    coordinateY: 14,
    iconCls: 'icon-msnui-copy-file',
    menuLevel: 2,
    meta: {'requireAuth': true,
      permission: ['ViewTeachingClassManagementPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '教学班管理',
      matched: [{path: '', name: '教学班管理'}]
    }
  }, {
    path: timeUrl + '/EditClassRoom',
    name: 'EditClassRoom',
    coordinateX: 1,
    coordinateY: 14,
    iconCls: 'icon-jieguo',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewEditClassRoomPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '编排教室',
      parentName: '编排教室',
      matched: [{ path: '', name: '编排教室' }]
    }
  }, {
    path: timeUrl + '/RescheduleAndSuspendClasses',
    name: '',
    coordinateX: 2,
    coordinateY: 5,
    iconCls: 'icon-kechengdingzhi',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      pageTitle: '调停课'
    }
  },
  {
    path: timeUrl + '/RescheduleAndSuspendClassesApply',
    name: 'RescheduleAndSuspendClassesApply',
    coordinateX: 2,
    coordinateY: 6,
    iconCls: 'icon-tubiaolunkuo_huaban',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      pageTitle: '调停课申请',
      permission: ['ViewRescheduleAndSuspendClassesApplyPage'],
      namespaceCode: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '调停课申请' }]
    }
  },
  {
    path: timeUrl + '/RescheduleAndSuspendClassesApplyManagement',
    name: 'RescheduleAndSuspendClassesApplyManagement',
    coordinateX: 2,
    coordinateY: 7,
    iconCls: 'icon-caidantubiao-05',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      pageTitle: '调停课申请管理',
      permission: ['ViewRescheduleAndSuspendClassesApplyManagementPage'],
      namespaceCode: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '调停课申请管理' }]
    }
  },
  {
    path: timeUrl + '/RescheduleAndSuspendClassesCountSet',
    name: 'RescheduleAndSuspendClassesCountSet',
    coordinateX: 2,
    coordinateY: 8,
    iconCls: 'icon-punishment',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      pageTitle: '调停课次数设置',
      permission: ['ViewRescheduleAndSuspendClassesCountSetPage'],
      namespaceCode: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '调停课次数设置' }]
    }
  },
  {
    path: timeUrl + '/RescheduleAndSuspendClassesStatistics',
    name: 'RescheduleAndSuspendClassesStatistics',
    coordinateX: 2,
    coordinateY: 9,
    iconCls: 'icon-tongji1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      pageTitle: '调停课统计',
      permission: ['ViewRescheduleAndSuspendClassesStatisticsPage'],
      namespaceCode: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '调停课统计' }]
    }
  }, {
    path: timeUrl + '/TimeTabChangeLog',
    name: 'TimeTabChangeLog',
    coordinateX: 2,
    coordinateY: 10,
    iconCls: 'icon-rizhi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      pageTitle: '课表调整记录',
      permission: ['ViewTimeTabChangeLogPage'],
      namespaceCode: 'KR_TT',
      parentName: '调停课',
      matched: [{ path: '', name: '调停课' }, { path: '', name: '课表调整记录' }]
    }
  },
  {
    path: '',
    name: '',
    coordinateX: 2,
    coordinateY: 11,
    iconCls: 'icon-xiaoyuanhuodong',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      pageTitle: '临时活动',
      namespaceCode: 'KR_TT',
      parentName: '临时活动',
      permission: ['ViewApplicationTemporaryActivitiesPage'],
      matched: [{ path: '', name: '临时活动' }]
    }
  }, {
    path: timeUrl + '/ApplicationTemporaryActivities',
    name: 'ApplicationTemporaryActivities',
    coordinateX: 2,
    coordinateY: 12,
    iconCls: 'icon-shenqing5',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      pageTitle: '临时活动申请',
      permission: ['ViewApplicationTemporaryActivitiesPage'],
      namespaceCode: 'KR_TT',
      parentName: '临时活动',
      matched: [{ path: '', name: '临时活动' }, { path: '', name: '临时活动申请' }]
    }
  },
  {
    path: timeUrl + '/TemporaryActivitiesApplyManage',
    name: 'TemporaryActivitiesApplyManage',
    coordinateX: 2,
    coordinateY: 13,
    iconCls: 'icon-kechengguanli5',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      pageTitle: '临时活动申请管理',
      permission: ['ViewTemporaryActivitiesApplyManagePage'],
      namespaceCode: 'KR_TT',
      parentName: '临时活动',
      matched: [{ path: '', name: '临时活动' }, { path: '', name: '临时活动申请管理' }]
    }
  }, {
    path: timeUrl + '/StartPlanTitle',
    name: 'StartPlanTitle',
    coordinateX: 3,
    coordinateY: 1,
    iconCls: 'icon-jindu14',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewStartPlanTitlePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '查询统计'
    }
  }, {
    path: timeUrl + '/AllCourseSchedule',
    name: 'AllCourseSchedule',
    coordinateX: 3,
    coordinateY: 3,
    iconCls: 'icon-xuanke1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseTeacherSchedulePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '课表查询',
      parentName: '查询统计',
      matched: [{ path: '', name: '课表查询' }, { path: '', name: '快速查询' }]
    }
  }, {
    path: timeUrl + '/FreeTimeSchedule',
    name: 'FreeTimeSchedule',
    coordinateX: 3,
    coordinateY: 3,
    iconCls: 'icon-xuanke1',
    menuLevel: 2,
    meta: {
      'requireAuth': true,
      permission: ['ViewFreeTimeSchedulePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '空闲时间查询',
      parentName: '查询统计',
      matched: [{path: '', name: '空闲时间查询'}]}
  },
  {
    path: timeUrl + '/CourseInspection',
    name: 'CourseInspection',
    coordinateX: 3,
    coordinateY: 4,
    iconCls: 'icon-jiance1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCourseInspectionPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '排课检测',
      matched: [{ path: '', name: '排课检测' }]
    }
  }, {
    path: timeUrl + '/ClassHourBalance',
    name: 'ClassHourBalance',
    coordinateX: 3,
    coordinateY: 5,
    iconCls: 'icon-kecheng1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewClassHourBalancePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '学时平衡',
      matched: [{ path: '', name: '学时平衡' }]
    }
  },
  {
    path: timeUrl + '/GeneralCourseStatus',
    name: 'GeneralCourseStatus',
    coordinateX: 3,
    coordinateY: 6,
    iconCls: 'icon-moban',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewGeneralCourseStatusPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '通识课程修读情况',
      matched: [{ path: '', name: '通识课程修读情况' }]
    }
  }, {
    path: timeUrl + '/DataImport',
    name: 'StartPlanTitle',
    coordinateX: 3,
    coordinateY: 7,
    iconCls: 'icon-jindu14',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewStartPlanTitlePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '数据导入'
    }
  }, {
    path: timeUrl + '/ImportTeachingTask',
    name: 'ImportTeachingTask',
    coordinateX: 3,
    coordinateY: 8,
    iconCls: 'icon-ku1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewImportTeachingTaskPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '排课结果导入',
      parentName: '数据导入',
      matched: [{ path: '', name: '数据导入' }, { path: '', name: '排课结果导入' }]
    }
  },
  {
    path: timeUrl + '/timeTableManageConsolo',
    name: 'timeTableManageConsolo',
    coordinateX: 4,
    coordinateY: 1,
    iconCls: 'icon-yonghu4',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewManageConsoloTimeTablePage'],
      namespaceCode: 'KR_TT',
      pageTitle: '管理台',
      parentName: '管理台',
      matched: [{ path: '', name: '管理台' }]
    }
  }, {
    path: timeUrl + '/AdminPermission',
    name: 'AdminPermission',
    coordinateX: 4,
    coordinateY: 3,
    iconCls: 'fa fa-user-secret',
    menuLevel: 2,
    meta: {
      target: '_blank',
      namespaceCode: 'KR_TT',
      pageTitle: '权限',
      parentName: '管理台',
      matched: [{ path: '', name: '权限' }]
    }
  }, {
    path: timeUrl + '/AdminRole',
    name: 'AdminRole',
    coordinateX: 4,
    coordinateY: 4,
    iconCls: 'fa fa-male',
    menuLevel: 2,
    meta: {
      target: '_blank',
      namespaceCode: 'KR_TT',
      pageTitle: '角色',
      parentName: '管理台',
      matched: [{ path: '', name: '角色' }]
    }
  }, {
    path: timeUrl + '/AdminUser',
    name: 'AdminUser',
    coordinateX: 4,
    coordinateY: 5,
    iconCls: 'fa fa-user',
    menuLevel: 2,
    meta: {
      target: '_blank',
      namespaceCode: 'KR_TT',
      pageTitle: '用户',
      entrance: 'timeTableEnter',
      parentName: '管理台',
      matched: [{ path: '', name: '用户' }]
    }
  }, {
    path: timeUrl + '/timeTableAdminUpdateUser',
    name: 'timeTableAdminUpdateUser',
    coordinateX: 0,
    coordinateY: 0,
    iconCls: null,
    menuLevel: 0,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewEditUserPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '用户编辑',
      matched: [{ path: '/timeTableAdminUser', name: '用户' }, { path: '', name: '用户编辑' }]
    }
  },
  {
    path: timeUrl + '/AdminTimeManagement',
    name: 'AdminTimeManagement',
    coordinateX: 4,
    coordinateY: 7,
    iconCls: 'icon-shijian1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewAdminTimeManagementPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '时间',
      parentName: '排课设置',
      matched: [{ path: '', name: '时间' }]
    }
  }, {
    path: timeUrl + '/AdminCategory',
    name: 'AdminCategory',
    coordinateX: 4,
    coordinateY: 2,
    iconCls: 'fa fa-asterisk',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewAdminCategoryPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '类别',
      parentName: '管理台',
      matched: [{ path: '', name: '类别' }]
    }
  }, {
    path: timeUrl + '/AdminWorkManage',
    name: 'AdminWorkManage',
    coordinateX: 4,
    coordinateY: 6,
    iconCls: 'fa fa-random',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewWorkflowPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '工作流',
      parentName: '管理台',
      matched: [{ path: '', name: '工作流' }]
    }
  }, {
    path: timeUrl + '/AdminEditBulletinBoard',
    name: 'AdminEditBulletinBoard',
    coordinateX: 4,
    coordinateY: 7,
    iconCls: 'fa fa-random',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewAdminEditBulletinBoardPage'],
      namespaceCode: 'KR_TT',
      pageTitle: '公告管理',
      parentName: '管理台',
      matched: [{ path: '', name: '公告管理' }]
    }
  },
  {
    path: timeUrl + '*',
    redirect: '/page404'
  }
]

export default {
  name: '排课管理',
  code: 'timetable',
  namespace: 'KR_TT',
  icon: 'icon-server_05',
  originRouters: timeTableRouterMap
}
