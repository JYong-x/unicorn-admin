/**
 * 助教
 */
const tamsUrl = '/portal'
const tpmsUrl = '/tpms/portal'
const tamsRouterMap = [
  {
    path: tamsUrl + '/home?methodToCall=getCommonHome&amp;viewId=PortalView',
    name: 'tamsHome',
    x: 1,
    y: 1,
    icon: 'icon-zhuye',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '主页'
    }
  },
  {
    path: tamsUrl + '/class?methodToCall=getClassListPage&amp;viewId=ClassView',
    name: 'ClassList',
    x: 1,
    y: 2,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewClassListPage'],
      title: '课程'
    }
  },
  {
    path: tamsUrl + '/ta?methodToCall=getTaListPage&amp;viewId=TaView',
    name: 'TaList',
    x: 1,
    y: 3,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewTaListPage'],
      title: '助教'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getFundsPage&amp;viewId=AdminView',
    name: 'tamsFundsManagement',
    x: 1,
    y: 4,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewFundsManagementPage'],
      title: '津贴'
    }
  },
  {
    path: tamsUrl + '/event?methodToCall=getPublishEventPage&amp;viewId=EventView',
    name: 'Event',
    x: 1,
    y: 5,
    icon: 'icon-bumen1',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewEventPage'],
      title: '活动'
    }
  },
  {
    path: tamsUrl + '/train?methodToCall=getTrainingConsolePage&amp;viewId=TrainView',
    name: 'TrainingConsole',
    x: 1,
    y: 5,
    icon: 'icon-kecheng8',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewTrainingConsolePage'],
      title: '培训'
    }
  },

  {
    path: tamsUrl + '/train?methodToCall=trainCourseEnrollmentPage&amp;viewId=TrainView',
    name: 'SelectTrainingCourse',
    x: 1,
    y: 6,
    icon: 'icon-zhuanjia',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewSelectTrainingCoursePage'],
      title: '培训选课'
    }
  },
  {
    path: tamsUrl + '/train?methodToCall=getTrainInfoTableListPage&amp;viewId=TrainView',
    name: 'TrainInfoTableList',
    x: 1,
    y: 7,
    icon: 'icon-peixun3',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewTrainInfoTableListPage'],
      title: '平行工作坊'
    }
  },
  {
    path: tamsUrl + '/train?methodToCall=getTrainingCourseSeatDistributionPage&amp;viewId=TrainView',
    name: 'TrainingCourseSeatDistribution',
    x: 1,
    y: 8,
    icon: 'icon-peixun-copy',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewTrainingCourseSeatDistributionPage'],
      title: '集中培训'
    }
  },
  {
    path: tamsUrl + '/train?methodToCall=getTaTrainResultPage&amp;viewId=TrainView',
    name: 'TrainingTeachingAssistantsResultPage',
    x: 1,
    y: 9,
    icon: 'icon-peixun2',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['TrainingTeachingAssistantsResultPage'],
      title: '助教培训结果'
    }
  },
  {
    path: tpmsUrl + '/statistics?methodToCall=getStatisticManagePage&amp;viewId=StatisticsView',
    name: 'tpmsStatisticManage',
    x: 3,
    y: 1,
    icon: 'icon-tongji',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewStatisticManagePage'],
      title: '统计'
    }
  },
  {
    path: tamsUrl + '/statistics?methodToCall=getActivityCount&amp;viewId=StatisticsView',
    name: 'ActivityCount',
    x: 3,
    y: 2,
    icon: 'icon-xiangmuguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewActivityCountPage'],
      title: '日志'
    }
  },
  {
    path: tamsUrl + '/statistics?methodToCall=getClassStatisticPage&amp;viewId=StatisticsView',
    name: 'ClassStatistics',
    x: 3,
    y: 3,
    icon: 'icon-xiangmuguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewClassStatisticsPage'],
      title: '课程'
    }
  },
  {
    path: tamsUrl + '/statistics?methodToCall=getTaStatisticPage&amp;viewId=StatisticsView',
    name: 'AssistantStatistics',
    x: 3,
    y: 4,
    icon: 'icon-xiangmuguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewAssistantStatisticsPage'],
      title: '助教'
    }
  },

  {
    path: '',
    name: 'tamsReview',
    x: 2,
    y: 1,
    icon: 'icon-pingjia3',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '评审'
    }
  },
  {
    path: tamsUrl + '/class?methodToCall=getReviewQuotaPage&amp;viewId=ClassView',
    name: 'ReviewQuota',
    x: 2,
    y: 2,
    icon: 'icon-zhuanjiaku',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewReviewQuotapage'],
      title: '名额'
    }
  },
  {
    path: tamsUrl + '/class?methodToCall=getConfigureReviewTeacherPage&amp;viewId=ClassView',
    name: 'ConfigureReviewTeacher',
    x: 2,
    y: 3,
    icon: 'icon-xiugai',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewConfigureReviewTeacherPage'],
      title: '评审教师'
    }
  },
  {
    path: tamsUrl + '/class?methodToCall=getReviewPage&amp;viewId=ClassView',
    name: 'ReviewPage',
    x: 2,
    y: 4,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewReviewPage'],
      title: '助教工作评价'
    }
  },
  {
    path: tamsUrl + '/ta?methodToCall=getTaTeacherEvalIndexPage&amp;viewId=TaView',
    name: 'TAIndicatorEntry',
    x: 2,
    y: 5,
    icon: 'icon-pingjia4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewTAIndicatorEntryPage'],
      title: '助教指标录入'
    }
  },

  {
    path: tamsUrl + '/ta?methodToCall=getTaStudentEvalPage&amp;viewId=TaView',
    name: 'TAEvaluationInformation',
    x: 2,
    y: 6,
    icon: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewTAEvaluationInformationPage'],
      title: '助教评教情况'
    }
  },
  {
    path: tamsUrl + '/ta?methodToCall=getExcellentTaSignInSettingPage&amp;viewId=TaView',
    name: 'ExcAssistantRegistrationSet',
    x: 2,
    y: 7,
    icon: 'icon-xueshengguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewExcAssistantRegistrationSetPage'],
      title: '卓越助教报名设置'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getManageStationPage&amp;viewId=AdminView',
    name: 'Review',
    x: 4,
    y: 1,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewManagerDashboardPage'],
      title: '管理台'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getConsolePage&amp;viewId=AdminView',
    name: 'tamsConsole',
    x: 4,
    y: 2,
    icon: 'icon-msnui-module',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewConsolePage'],
      title: '类别'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getRoleManagerPage&amp;viewId=AdminView',
    name: 'tamsRoleManager',
    x: 4,
    y: 3,
    icon: 'icon-iconfont-jiaoshi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewRoleManagerPage'],
      title: '角色'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getUserRoleManagerPage&amp;viewId=AdminView',
    name: 'tamsUserRoleManager',
    x: 4,
    y: 4,
    icon: 'icon-yonghu6',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewUserRoleManagerPage'],
      title: '用户'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getPermissionManagementPage&amp;viewId=AdminView',
    name: 'tamsPermissionManagement',
    x: 4,
    y: 5,
    icon: 'icon-zhaopin',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewPermissionManagementPage'],
      title: '权限'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getTermManagePage&amp;viewId=AdminView',
    name: 'TermManager',
    x: 4,
    y: 6,
    icon: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewTermManagerPage'],
      title: '批次'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getWorkFlowManagePage&amp;viewId=AdminView',
    name: 'tamsWorkFlowManage',
    x: 4,
    y: 7,
    icon: 'icon-xueshengguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewWorkFlowManagePage'],
      title: '工作流'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getTimeSetPage&amp;viewId=AdminView',
    name: 'TimeSettings',
    x: 4,
    y: 8,
    icon: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewTimeSettingsPage'],
      title: '时间'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getStudentNoticePage&amp;viewId=AdminView',
    name: 'StudentNoticeInfo',
    x: 4,
    y: 9,
    icon: 'icon-fabu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewStudentNoticeInfoPage'],
      title: '学生通知'
    }
  },

  {
    path: tamsUrl + '/admin?methodToCall=getSyncInfoPage&amp;viewId=AdminView',
    name: 'SyncInfo',
    x: 4,
    y: 10,
    icon: 'icon-xiangqingchakan',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewSyncInfoPage'],
      title: '同步信息'
    }
  },
  {
    path: tamsUrl + '/admin?methodToCall=getBlackListPage&amp;viewId=AdminView',
    name: 'BlackList',
    x: 4,
    y: 11,
    icon: 'icon-xueshengguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TAMS',
      permission: ['ViewBlackListPage'],
      title: '黑名单'
    }
  }
]

export default {
  name: '助教管理',
  code: 'tams',
  namespace: 'KR_TAMS',
  icon: 'icon-jiaoshixinxi',
  baseUrl: '/tams',
  isOld: true,
  originRouters: tamsRouterMap
}
