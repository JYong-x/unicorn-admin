/**
 * 四六级
 */
const examUrl = '/portal'
const cetRouterMap = [
  {
    path: '',
    name: 'SignUp',
    x: 1,
    y: 2,
    menuLevel: 1,
    meta: {
      icon: 'baoming',
      target: '_blank',
      title: '报名'
    }
  },
  {
    path: examUrl + '/invigilate?viewId=InvigilateView&amp;methodToCall=getInvigilatorApplicant&amp;pageId=pageInvigilatorApplicant',
    name: 'InvigilatorApplicant',
    x: 1,
    y: 2,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewInvigilatorApplicantPagePermission'],
      title: '申请监考'
    }
  },
  {
    path: examUrl + '/?methodToCall=getCetApplyPage&amp;viewId=PortalView&amp;pageId=pageInfoBeforeCetApply',
    name: 'CetApplyPagePermission',
    x: 1,
    y: 2,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewCetApplyPagePermission'],
      title: '四六级报名'
    }
  },
  {
    path: '',
    name: 'mange',
    x: 2,
    y: 1,
    menuLevel: 1,
    meta: {
      icon: 'guanli',
      target: '_blank',
      title: '管理'
    }
  },
  {
    path: examUrl + '/?methodToCall=getSetTimeInfoPage&amp;viewId=PortalView&amp;pageId=pageSetExmTimeInfo',
    name: 'SetTimeInfoPage',
    x: 2,
    y: 2,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewSetTimeInfoPagePermission'],
      title: '考次'
    }
  },
  {
    path: examUrl + '/?methodToCall=getRoleManagerPage&amp;viewId=PortalView&amp;pageId=pageRoleManager',
    name: 'examRoleManagerPage',
    x: 2,
    y: 3,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewRoleManagerPagePermission'],
      title: '角色'
    }
  },
  {
    path: examUrl + '/?methodToCall=getUserRoleManagerPageAll&amp;viewId=PortalView&amp;pageId=pageUserRoleManager',
    name: 'examUserRoleManager',
    x: 2,
    y: 4,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewUserRoleManagerPagePermission'],
      title: '用户'
    }
  },
  {
    path: examUrl + '/?methodToCall=getPermissionManagementPage&amp;viewId=PortalView&amp;pageId=pagePermissionManagement',
    name: 'examPermissionManagementPage',
    x: 2,
    y: 5,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewPermissionManagementPagePermission'],
      title: '权限'
    }
  },
  {
    path: examUrl + '/?methodToCall=getSystemParameterPage&amp;viewId=PortalView&amp;pageId=pageSystemParameter',
    name: 'SystemParameter',
    x: 2,
    y: 6,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewSystemParameterPermission'],
      title: '系统配置'
    }
  },
  {
    path: examUrl + '/?methodToCall=getPermissionManagementPage&amp;viewId=PortalView&amp;pageId=pagePermissionManagement',
    name: 'PermissionManagementPage',
    x: 2,
    y: 5,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewPermissionManagementPagePermission'],
      title: '日志'
    }
  },
  {
    path: examUrl + '/?methodToCall=getSystemParameterPage&amp;viewId=PortalView&amp;pageId=pageSystemParameter/?methodToCall=getBaseInfoPage&amp;viewId=PortalView&amp;pageId=pageBaseInfo',
    x: 2,
    y: 6,
    name: 'BaseInfo',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewBaseInfoPagePermission'],
      title: '数据同步'
    }
  },
  {
    path: examUrl + '/syncUserInfo?viewId=SyncUserInfoView&amp;methodToCall=start&amp;pageId=pageSyncUserInfo',
    x: 2,
    y: 7,
    name: 'SyncUserInfo',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewSyncUserInfoPagePermission'],
      title: '用户信息同步'
    }
  },
  {
    path: examUrl + '/?methodToCall=getStudentGradeImportPage&amp;viewId=PortalView&amp;pageId=pageGradeImport',
    x: 2,
    y: 8,
    name: 'GradeImport',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewGradeImportPagePermission'],
      title: '成绩导入'
    }
  },
  {
    path: '',
    name: 'Proctor',
    x: 3,
    y: 1,
    menuLevel: 1,
    meta: {
      icon: 'benkexiaokaojiankaorenyuanbaoming',
      target: '_blank',
      title: '监考'
    }
  },
  {
    path: examUrl + '/invigilate?viewId=InvigilateView&amp;methodToCall=getInvigilatePreset&amp;pageId=pageInvigilatorPreset',
    name: 'InvigilatorPreset',
    x: 3,
    y: 2,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewInvigilatorPresetPagePermission'],
      title: '名额设置'
    }
  },
  {
    path: examUrl + '/invigilate?viewId=InvigilateView&amp;methodToCall=getInvigilator&amp;pageId=pageInvigilatorManagement',
    name: 'examInvigilatorManagement',
    x: 3,
    y: 3,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewInvigilatorManagementPagePermission'],
      title: '监考安排'
    }
  },
  {
    path: examUrl + '/?methodToCall=getTimetablePage&amp;viewId=PortalView&amp;pageId=pageTimetable',
    name: 'Timetable',
    x: 3,
    y: 4,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewTimetablePagePermission'],
      title: '考试编排'
    }
  },
  {
    path: examUrl + '/?methodToCall=getSignCheckPage&amp;viewId=PortalView&amp;pageId=pageSignCheck',
    name: 'SignCheckPage',
    x: 3,
    y: 5,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewSignCheckPagePermission'],
      title: '培训签到'
    }
  },
  {
    path: examUrl + '/invigilate?viewId=InvigilateView&amp;methodToCall=getCollegeInvigilatorPage&amp;pageId=pageCollegeInvigilator',
    name: 'CollegeInvigilatorPage',
    x: 3,
    y: 6,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewCollegeInvigilatorPagePermission'],
      title: '监考调整'
    }
  },
  {
    path: examUrl + '/invigilate?viewId=InvigilateView&amp;methodToCall=getExamPatrolListPage&amp;pageId=pagePatrolExam',
    name: 'PatrolExam',
    x: 3,
    y: 6,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewPatrolExamPagePermission'],
      title: '巡考'
    }
  },
  {
    path: examUrl + '/?methodToCall=getExamWorkerManagePage&amp;viewId=PortalView&amp;pageId=pageStaffMember',
    x: 3,
    y: 7,
    name: 'StaffMember',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewStaffMemberPagePermission'],
      title: '工作人员'
    }
  },
  {
    path: '',
    name: 'other',
    x: 4,
    y: 1,
    menuLevel: 1,
    meta: {
      icon: 'qita',
      target: '_blank',
      title: '其他'
    }
  },
  {
    path: examUrl + '/?methodToCall=getExmStudentPage&amp;viewId=PortalView&amp;pageId=pageExmStudent',
    name: 'ExmStudent',
    x: 4,
    y: 2,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewExmStudentPagePermission'],
      title: '学籍信息'
    }
  },
  {
    path: examUrl + '/?methodToCall=getApplicantInfoPage&amp;viewId=PortalView&amp;pageId=pageApplicantInfo',
    name: 'ApplicantInfoPage',
    x: 4,
    y: 3,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewApplicantInfoPagePermission'],
      title: '考生信息'
    }
  },
  {
    path: examUrl + '/?methodToCall=getExamRoomPrintPage&amp;viewId=PortalView&amp;pageId=pageExamRoomPrint',
    name: 'ExamRoom',
    x: 4,
    y: 4,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewExamRoomPrintPagePermission'],
      title: '报表打印'
    }
  },
  {
    path: examUrl + '/?viewId=PortalView&amp;methodToCall=getStudentGradeDetailPage&amp;pageId=pageGradeView',
    name: 'GradeView',
    x: 4,
    y: 5,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewGradeViewPagePermission'],
      title: '成绩查看'
    }
  },
  {
    path: examUrl + '/?viewId=PortalView&amp;methodToCall=getMessagePage&amp;pageId=pageMessage',
    name: 'examCollegeInvigilatorPage',
    x: 4,
    y: 6,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_EXM',
      permission: ['ViewCollegeInvigilatorPagePermission'],
      title: '发送信息'
    }
  }
]

export default {
  name: '四六级考试',
  code: 'cet',
  namespace: 'KR_EXM',
  icon: 'svgmoban58',
  baseUrl: '/cet',
  isOld: true,
  originRouters: cetRouterMap
}
