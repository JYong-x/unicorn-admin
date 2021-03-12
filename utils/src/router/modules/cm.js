/**
 * 课程
 */
const cmUrl = '/portal'
const cmRouterMap = [
  {
    path: cmUrl + '/home?methodToCall=getHomePage&amp;viewId=PortalView',
    name: 'cmHome',
    x: 1,
    y: 1,
    menuLevel: 1,
    meta: {
      icon: 'home',
      target: '_blank',
      title: '主页'
    }
  },
  {
    path: cmUrl + '/course?methodToCall=getCourseConsolePage&amp;viewId=StartProposalView',
    name: 'CourseConsole',
    x: 1,
    y: 2,
    menuLevel: 1,
    meta: {
      icon: 'kechengguanli',
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewCourseConsolePage'],
      title: '课程管理'
    }
  },
  {
    path: cmUrl + '/course?methodToCall=getStartNewCurriculumPage&amp;viewId=StartProposalView',
    name: 'StartNewCurriculum',
    x: 1,
    y: 3,
    icon: 'icon-xinjianxiangmu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewStartNewCurriculumPage'],
      title: '新建课程'
    }
  },
  {
    path: cmUrl + '/course?methodToCall=getSearchCoursePage&amp;viewId=StartProposalView',
    name: 'LookUpCourse',
    x: 1,
    y: 4,
    icon: 'icon-xiangmuguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewLookUpCoursePage'],
      title: '课程库'
    }
  },
  {
    path: cmUrl + '/course?methodToCall=getSearchCoursePageForCourseManager&amp;viewId=StartProposalView',
    name: 'PerfectCourseSyllabus',
    x: 1,
    y: 5,
    icon: 'icon-baogaoyishenhe',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewPerfectCourseSyllabusPage'],
      title: '完善课程大纲'
    }
  },
  {
    path: cmUrl + '/course?methodToCall=getProposalReviewPage&amp;viewId=StartProposalView',
    name: 'BillReview',
    x: 1,
    y: 6,
    icon: 'icon-baogaoyishenhe',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewBillReviewPage'],
      title: '管理课程变更'
    }
  },
  {
    path: cmUrl + '/course?methodToCall=getCourseSetPage&amp;viewId=StartProposalView',
    name: 'CourseSet',
    x: 1,
    y: 7,
    icon: 'icon-rizhi1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewCourseSetPage'],
      title: '课程集'
    }
  },
  {
    path: cmUrl + '/trainProgram?methodToCall=getTrainProgramManagementPage&amp;viewId=ProgramView',
    name: 'ProgramConsole',
    x: 2,
    y: 1,
    menuLevel: 1,
    meta: {
      icon: 'tubiao_fanganguanli',
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewProgramConsolePage'],
      title: '培养方案管理'
    }
  },
  {
    path: cmUrl + '/trainProgram?methodToCall=getStartNewTrainProgramPage&amp;viewId=ProgramView',
    name: 'StartNewProgram',
    x: 2,
    y: 2,
    icon: 'icon-xinjianwendang',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewStartNewProgramPage'],
      title: '新建培养方案'
    }
  },
  {
    path: cmUrl + '/trainProgram?methodToCall=getSearchTrainProgramPage&amp;viewId=ProgramView',
    name: 'FindProgram',
    x: 2,
    y: 3,
    icon: 'icon-zhinenghuaxuanpinicon1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewFindProgramPage'],
      title: '培养方案库'
    }
  },
  {
    path: cmUrl + '/trainProgram?methodToCall=getSearchProposalTrainProgramPage&amp;viewId=ProgramView',
    name: 'FindProposalProgram',
    x: 2,
    y: 4,
    icon: 'icon-iconfind',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewFindProposalProgramPage'],
      title: '管理培养方案变更'
    }
  },
  {
    path: cmUrl + '/trainProgram?methodToCall=getOpeningCourseInTrainProgramPage&amp;viewId=ProgramView',
    name: 'getOpeningCourseInTrainProgramPage',
    x: 2,
    y: 5,
    icon: 'icon-ku1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewCheckStartCoursePlanPage'],
      title: '核对开课计划'
    }
  },
  {
    path: cmUrl + '/admin?methodToCall=getManageConsolePage&amp;viewId=AdminView',
    name: 'cmConsole',
    x: 3,
    y: 1,
    menuLevel: 1,
    meta: {
      icon: 'guanli',
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewConsolePage'],
      title: '管理台'
    }
  },
  {
    path: cmUrl + '/admin?methodToCall=getManageCategoryPage&amp;viewId=AdminView',
    name: 'cmCategory',
    x: 3,
    y: 2,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewCategoryPage'],
      title: '类别'
    }
  },
  {
    path: cmUrl + '/admin?methodToCall=getRuleConsolePage&amp;viewId=AdminView',
    name: 'cmRuleConsole',
    x: 3,
    y: 3,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewRuleConsolePage'],
      title: '规则'
    }
  },
  {
    path: cmUrl + '/admin?methodToCall=getPermManagePage&amp;viewId=AdminView',
    name: 'cmPermissionManagementPage',
    x: 3,
    y: 4,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewPermissionManagementPage'],
      title: '权限'
    }
  },
  {
    path: cmUrl + '/admin?methodToCall=getRolePage&amp;viewId=AdminView',
    name: 'cmRoleManager',
    x: 3,
    y: 5,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewRoleManagerPage'],
      title: '角色'
    }
  },
  {
    path: cmUrl + '/admin?methodToCall=getUserManagementPage&amp;viewId=AdminView',
    name: 'cmUserRoleManager',
    x: 3,
    y: 6,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewUserRoleManagerPage'],
      title: '用户'
    }
  },
  {
    path: cmUrl + '/admin?methodToCall=getTimeSetPage&amp;viewId=AdminView',
    name: 'cmTimeSet',
    x: 3,
    y: 7,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewTimeSetPage'],
      title: '时间'
    }
  },

  {
    path: cmUrl + '/admin?methodToCall=getWorkFlowManagePage&amp;viewId=AdminView',
    name: 'cmWorkFlowManage',
    x: 3,
    y: 8,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewWorkFlowManagePage'],
      title: '工作流'
    }
  },
  {
    path: cmUrl + '/admin?methodToCall=getGraduationCreditPage&amp;viewId=AdminView',
    name: 'GraduationCredit',
    x: 3,
    y: 9,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewGraduationCreditPage'],
      title: '毕业学分要求'
    }
  },
  {
    path: cmUrl + '/admin?methodToCall=getCourseManagerPage&amp;viewId=AdminView',
    name: 'CourseManager',
    x: 3,
    y: 10,
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewCourseManagerPage'],
      title: '课程负责人'
    }
  }
]

export default {
  name: '课程/培养方案管理',
  code: 'cm',
  namespace: 'KR_CM',
  icon: 'kecheng9',
  baseUrl: '/cm',
  isOld: true,
  originRouters: cmRouterMap
}
