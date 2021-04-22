/**
 * 课程
 */
const routerMap = [
  {
    path: '/home?methodToCall=getHomePage&amp;viewId=PortalView',
    name: 'cmHome',
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
    path: '/course?methodToCall=getCourseConsolePage&amp;viewId=StartProposalView',
    name: 'CourseConsole',
    x: 1,
    y: 2,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewCourseConsolePage'],
      title: '课程管理'
    }
  },
  {
    path: '/course?methodToCall=getStartNewCurriculumPage&amp;viewId=StartProposalView',
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
    path: '/course?methodToCall=getSearchCoursePage&amp;viewId=StartProposalView',
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
    path: '/course?methodToCall=getSearchCoursePageForCourseManager&amp;viewId=StartProposalView',
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
    path: '/course?methodToCall=getProposalReviewPage&amp;viewId=StartProposalView',
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
    path: '/course?methodToCall=getCourseSetPage&amp;viewId=StartProposalView',
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
    path: '/trainProgram?methodToCall=getTrainProgramManagementPage&amp;viewId=ProgramView',
    name: 'ProgramConsole',
    x: 2,
    y: 1,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewProgramConsolePage'],
      title: '培养方案管理'
    }
  },
  {
    path: '/trainProgram?methodToCall=getStartNewTrainProgramPage&amp;viewId=ProgramView',
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
    path: '/trainProgram?methodToCall=getSearchTrainProgramPage&amp;viewId=ProgramView',
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
    path: '/trainProgram?methodToCall=getSearchProposalTrainProgramPage&amp;viewId=ProgramView',
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
    path: '/trainProgram?methodToCall=getOpeningCourseInTrainProgramPage&amp;viewId=ProgramView',
    name: 'FindProposalProgram',
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
    path: '/admin?methodToCall=getManageConsolePage&amp;viewId=AdminView',
    name: 'cmConsole',
    x: 3,
    y: 1,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_CM',
      permission: ['ViewConsolePage'],
      title: '管理台'
    }
  },
  {
    path: '/admin?methodToCall=getManageCategoryPage&amp;viewId=AdminView',
    name: 'cmCategory',
    x: 3,
    y: 2,
    icon: 'icon-msnui-module',
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
    path: '/admin?methodToCall=getRuleConsolePage&amp;viewId=AdminView',
    name: 'cmRuleConsole',
    x: 3,
    y: 3,
    icon: 'icon-xitongguanli',
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
    path: '/admin?methodToCall=getPermManagePage&amp;viewId=AdminView',
    name: 'cmPermissionManagementPage',
    x: 3,
    y: 4,
    icon: 'icon-zhaopin',
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
    path: '/admin?methodToCall=getRolePage&amp;viewId=AdminView',
    name: 'cmRoleManager',
    x: 3,
    y: 5,
    icon: 'icon-iconfont-jiaoshi',
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
    path: '/admin?methodToCall=getUserManagementPage&amp;viewId=AdminView',
    name: 'cmUserRoleManager',
    x: 3,
    y: 6,
    icon: 'icon-yonghu6',
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
    path: '/admin?methodToCall=getTimeSetPage&amp;viewId=AdminView',
    name: 'cmTimeSet',
    x: 3,
    y: 7,
    icon: 'icon-rizhi1',
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
    path: '/admin?methodToCall=getWorkFlowManagePage&amp;viewId=AdminView',
    name: 'cmWorkFlowManage',
    x: 3,
    y: 8,
    icon: 'icon-baogaoyishenhe',
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
    path: '/admin?methodToCall=getGraduationCreditPage&amp;viewId=AdminView',
    name: 'GraduationCredit',
    x: 3,
    y: 9,
    icon: 'icon-caozuorizhi',
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
    path: '/admin?methodToCall=getCourseManagerPage&amp;viewId=AdminView',
    name: 'CourseManager',
    x: 3,
    y: 10,
    icon: 'icon-zhiwumingcheng',
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
  icon: 'icon-kecheng9',
  originRouters: routerMap
}
