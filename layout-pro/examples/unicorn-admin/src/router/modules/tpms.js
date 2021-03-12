import { httpConfig } from '@/config'
/**
 * 教师教学档案
 */
const tpmsUrl = httpConfig.appRoot + '/tpms/portal'
const tpmsRouterMap = [
  {
    path: tpmsUrl + '/home?methodToCall=getTPMSHomePage&viewId=PortalView',
    name: 'tpmsHome',
    x: 1,
    y: 1,
    icon: 'icon-xuejiguanli1',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '主页'
    }
  },
  {
    path: tpmsUrl + '/class?methodToCall=getMyPortfolio&amp;viewId=PortfolioView',
    name: 'PersonalCourse',
    x: 1,
    y: 2,
    icon: 'icon-xuejiguanli1',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewPersonalCoursePage'],
      title: '我的档案'
    }
  },
  {
    path: tpmsUrl + '/portfolio?methodToCall=getAdminPerformanceQueryPage&amp;viewId=PortfolioView',
    name: 'AdministratorsPerformanceEvaluation',
    x: 1,
    y: 3,
    icon: 'icon-shenhe2',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewAdministratorsPerformanceEvaluationPage'],
      title: '业绩查询'
    }
  },
  {
    path: tpmsUrl + '/class?methodToCall=getCourseInfoConfirmAndReportErrorPage&amp;viewId=ReviewView',
    name: 'CourseConfirmConsole',
    x: 1,
    y: 4,
    icon: 'icon-xuqiupingshen',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewCourseConfirmConsolePage'],
      title: '教学班'
    }
  },
  {
    path: tpmsUrl + '/portfolio?methodToCall=getReviewConsolePage&amp;viewId=ReviewView',
    name: 'ReviewConsole',
    x: 2,
    y: 1,
    icon: 'icon-xuqiupingshen',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewReviewConsolePage'],
      title: '审核'
    }
  },
  {
    path: tpmsUrl + '/achievement?methodToCall=getEduTeachingAchvPage&amp;viewId=ReviewView',
    name: 'AchievementReviewBlock',
    x: 2,
    y: 2,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewAchievementReviewBlockPage'],
      title: '成果'
    }
  },
  {
    path: '',
    name: 'AchievementReviewBlock',
    x: 2,
    y: 3,
    icon: 'icon-zhidaobiaozhun',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewOnlineTeachingPage'],
      title: '在线教学'
    }
  },
  {
    path: tpmsUrl + '/class?methodToCall=getManageClassAttendancePage&amp;viewId=PortfolioView',
    name: 'AchievementReviewBlock',
    x: 2,
    y: 4,
    icon: 'icon-tongji1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewBureauOnlineStatisticsTeaPage'],
      title: '在线教学情况统计'
    }
  },
  {
    path: tpmsUrl + '/class?methodToCall=getInstructorClassAttendancePage&amp;viewId=PortfolioView',
    name: 'AchievementReviewBlock',
    x: 2,
    y: 5,
    icon: 'icon-zhidaobiaozhun',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewTeachersTeachOnlinePage'],
      title: '在线教学情况'
    }
  },
  {
    path: '',
    name: 'BPackageMoney',
    x: 3,
    y: 1,
    icon: 'icon-mingxi',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewBPackageMoneyPage'],
      title: '岗位津贴'
    }
  },
  {
    path: tpmsUrl + '/statistics?methodToCall=getPgBInfoPage&amp;viewId=StatisticView',
    name: 'PostAllowanceCalculation',
    x: 3,
    y: 2,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewPostAllowanceCalculationPage'],
      title: '津贴核算'
    }
  },
  {
    path: tpmsUrl + '/statistics?methodToCall=getAllowanceDetailsPage&amp;viewId=StatisticView',
    name: 'AllowanceDetailsConsole',
    x: 3,
    y: 3,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewAllowanceDetailsConsolePage'],
      title: '津贴明细'
    }
  },
  {
    path: tpmsUrl + '/statistics?methodToCall=getBDataImportPage&amp;viewId=StatisticView',
    name: 'DataImport',
    x: 3,
    y: 3,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewDataImportPage'],
      title: '数据导入'
    }
  },
  {
    path: '',
    name: 'ManageConcole',
    x: 4,
    y: 1,
    icon: 'icon-xuqiupingshen',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewManageConcolePage'],
      title: '管理台'
    }
  },
  {
    path: tpmsUrl + '/admin?methodToCall=getCourseLabelManagePage&amp;viewId=AdminView',
    name: 'CourseLabelManage',
    x: 4,
    y: 2,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewCourseLabelManagePage'],
      title: '课程标签'
    }
  },
  {
    path: tpmsUrl + '/admin?methodToCall=getConsolePage&amp;viewId=AdminView',
    name: 'ViewConsolePage',
    x: 4,
    y: 3,
    icon: 'icon-msnui-module',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewConsolePage'],
      title: '类别'
    }
  },
  {
    path: tpmsUrl + '/admin?methodToCall=getRuleConsole&amp;viewId=AdminView',
    name: 'tpmsRuleConsole',
    x: 4,
    y: 4,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewRuleConsolePage'],
      title: '规则'
    }
  },
  {
    path: tpmsUrl + '/admin?methodToCall=getRoleManagerPage&amp;viewId=AdminView',
    name: 'tpmsRoleManager',
    x: 4,
    y: 5,
    icon: 'icon-iconfont-jiaoshi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewRoleManagerPage'],
      title: '角色'
    }
  },
  {
    path: tpmsUrl + '/admin?methodToCall=getRoleManagerPage&amp;viewId=AdminView',
    name: 'tpmsUserRoleManager',
    x: 4,
    y: 6,
    icon: 'icon-yonghu6',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewUserRoleManagerPage'],
      title: '用户'
    }
  },
  {
    path: tpmsUrl + '/admin?methodToCall=getPermissionManagementPage&amp;viewId=AdminView',
    name: 'tpmsPermissionManagement',
    x: 4,
    y: 7,
    icon: 'icon-zhaopin',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewPermissionManagementPage'],
      title: '权限'
    }
  },
  {
    path: tpmsUrl + '/admin?methodToCall=getTimeSetPage&amp;viewId=AdminView',
    name: 'tpmsTimeSet',
    x: 4,
    y: 8,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewTimeSetPage'],
      title: '时间'
    }
  },

  {
    path: tpmsUrl + '/admin?methodToCall=getWorkFlowManagePage&amp;viewId=AdminView',
    name: 'tpmsWorkFlowManagePage',
    x: 4,
    y: 9,
    icon: 'icon-xueshengguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['WorkFlowManagePage'],
      title: '工作流'
    }
  },
  {
    path: tpmsUrl + '/admin?methodToCall=getJournalLibPage&amp;viewId=AdminView',
    name: 'JournalLibrary',
    x: 4,
    y: 10,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_TPMS',
      permission: ['ViewJournalLibraryPage'],
      title: '期刊库'
    }
  }
]

export default {
  name: '教师教学档案',
  code: 'tpms',
  namespace: 'KR_TPMS',
  icon: 'icon-pici',
  originRouters: tpmsRouterMap
}
