/**
 * 排课权限路由
 * @type { *[] }
 */
const timeTableRouterMap = [
  {
    path: '/Home',
    name: 'Home',
    x: 1,
    y: 1,
    icon: 'fa-home',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewHomePage'],
      namespace: 'KR_TT',
      title: '主页',
      matched: [{ path: '', name: '' }]
    }
  },{
    path: '/CourseClassSettingInfo',
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
    path: '/CourseSessionInfo',
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
    path: '/CourseTimePattern',
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
    path: '/CourseExperimentAndProject',
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
    path: '/CourseBlockedTimePeriodStu',
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
    path: '/FullTimeTeacher',
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
    path: '/CourseInstructionalResource',
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
    path: '/SetClassParameters',
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
    path: '/CourseArrangementTitle',
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
    path: '/CourseDistributableExperiment',
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
    path: '/TeachingTaskRequirements',
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
    path: '/ComprehensiveArrangeCourse',
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
    path: '/CourseAssistArrangementClass',
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
    path: '/Schedule',
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
    path: '/TeachingClassManagement',
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
    path: '/EditClassRoom',
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
    path: '/RescheduleAndSuspendClasses',
    name: 'RescheduleAndSuspendClasses',
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
    path: '/RescheduleAndSuspendClassesApply',
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
    path: '/RescheduleAndSuspendClassesApplyManagement',
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
    path: '/RescheduleAndSuspendClassesCountSet',
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
    path: '/RescheduleAndSuspendClassesStatistics',
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
    path: '/TimeTabChangeLog',
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
    name: 'ApplicationTemporaryActivities',
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
    path: '/ApplicationTemporaryActivities',
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
    path: '/TemporaryActivitiesApplyManage',
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
    path: '/StartPlanTitle',
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
    path: '/AllCourseSchedule',
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
    path: '/FreeTimeSchedule',
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
    path: '/CourseInspection',
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
    path: '/ClassHourBalance',
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
    path: '/GeneralCourseStatus',
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
  },
  {
    path: '',
    name: 'TeachMaterialManagement',
    x: 3,
    y: 7,
    icon: 'icon-kecheng10',
    menuLevel: 1,
    meta: { 'requireAuth': true, permission: ['ViewTeachMaterialManagementPage'], namespace: 'KR_TT', title: '教材管理' }
  },
  {
    path: '/TextbookLibrary',
    name: 'TextbookLibrary',
    x: 3,
    y: 8,
    icon: 'icon-ku1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewTextbookLibraryPage'],
      namespace: 'KR_TT',
      title: '教材库',
      matched: [{path: '', name: '教材管理'}, {path: '', name: '教材库'}]
    }
  }, {
    path: '/PublishingLibrary',
    name: 'PublishingLibrary',
    x: 3,
    y: 9,
    icon: 'icon-ku1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewPublishingLibraryTaskPage'],
      namespace: 'KR_TT',
      title: '出版社库',
      matched: [{path: '', name: '教材管理'}, {path: '', name: '出版社库'}]
    }
  }, {
    path: '/CurriculumTextbook',
    name: 'CurriculumTextbook',
    x: 3,
    y: 10,
    icon: 'icon-ku1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewCurriculumTextbookTaskPage'],
      namespace: 'KR_TT',
      title: '课程对教材',
      matched: [{path: '', name: '教材管理'}, {path: '', name: '课程对教材'}]
    }
  }, {
    path: '/DataImport',
    name: 'DataImport',
    x: 3,
    y: 11,
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
    path: '/ImportTeachingTask',
    name: 'ImportTeachingTask',
    x: 3,
    y: 12,
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
    path: '/timeTableManageConsolo',
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
    path: '/AdminPermission',
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
    path: '/AdminRole',
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
    path: '/AdminUser',
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
    path: '/timeTableAdminUpdateUser',
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
    path: '/AdminTimeManagement',
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
    path: '/AdminCategory',
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
    path: '/AdminWorkManage',
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
    path: '/AdminEditBulletinBoard',
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
    path: '*',
    redirect: '/page404'
  }
]

export default {
  name: '排课管理',
  code: 'timetable',
  namespace: 'KR_TT',
  icon: 'icon-server_05',
  baseUrl: `/tt`,
  isOld: true,
  originRouters: timeTableRouterMap
}
