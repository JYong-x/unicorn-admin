import { httpConfig } from '@/config'
/**
 * 学籍路由
 */
const smsUrl = httpConfig.appRoot + '/sms/portal'
const smsRouterMap = [
  {
    path: smsUrl + '/home?methodToCall=getHomePage&amp;viewId=PortalView',
    name: 'smsHome',
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
    path: smsUrl + '/studentmanagement?methodToCall=getMySchoolRollPage&amp;viewId=StudentStatusView',
    name: 'MySchoolRoll',
    x: 1,
    y: 2,
    icon: 'icon-xuejiyidonggongzuoliucheng',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewMySchoolRollPage'],
      title: '我的学籍'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getMySchoolRollInfoPage&amp;viewId=StudentStatusView',
    name: 'SchoolRollInformation',
    x: 1,
    y: 3,
    icon: 'icon-gerenxinxi7',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewSchoolRollInformationPage'],
      title: '学籍信息'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getSchoolRollManagementPage&amp;viewId=StudentStatusView',
    name: 'SchoolRollManagement',
    x: 1,
    y: 4,
    icon: 'icon-xuejiguanli1',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewSchoolRollManagementPage'],
      title: '学生'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getSchoolRollInfoPage&amp;viewId=StudentStatusView',
    name: 'smsSchoolRollLibrary',
    x: 1,
    y: 5,
    icon: 'icon-kucun1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewSchoolRollLibraryPage'],
      title: '学生库'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getStudentIdSettingPage&amp;viewId=AdminView',
    name: 'StudentNumberGeneratio',
    x: 1,
    y: 6,
    icon: 'icon-shengchengmulu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewStudentNumberGenerationPage'],
      title: '批量导入学生'
    }
  },
  {
    path: smsUrl + '/statistic?methodToCall=getStatisticStudentNumPage&amp;viewId=StudentStatusView',
    name: 'StudentStatistics',
    x: 1,
    y: 7,
    icon: 'icon-tongji2',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewStudentStatisticsPage'],
      title: '学生统计'
    }
  },
  {
    path: smsUrl + '/statistic?methodToCall=getStatisticStudentNumPage&amp;viewId=StudentStatusView',
    name: 'ApplyManagement',
    x: 1,
    y: 8,
    icon: 'icon-xuejiyidonggongzuoliucheng',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewApplyManagementPage'],
      title: '学籍异动申请'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getRewardAndPunishPage&amp;viewId=StudentStatusView',
    name: 'RewardAndPunish',
    x: 1,
    y: 9,
    icon: 'icon-change',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewRewardAndPunishPage'],
      title: '奖励与处分'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getSMPunishPage&amp;viewId=StudentStatusView',
    name: 'Punish',
    x: 1,
    y: 10,
    icon: 'icon-punishment',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewPunishPage'],
      title: '处分'
    }
  },
  {
    path: smsUrl + '/graduationReview?methodToCall=getGraduationReviewManagementPage&amp;viewId=GraduationReviewView',
    name: 'GraduationReviewManagement',
    x: 1,
    y: 10,
    icon: 'icon-chakan7',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewGraduationReviewManagementPage'],
      title: '审查'
    }
  },
  {
    path: smsUrl + '/graduationReview?methodToCall=getGraduationReviewPage&amp;viewId=GraduationReviewView',
    name: 'GraduationReview',
    x: 1,
    y: 12,
    icon: 'icon-biye',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewGraduationReviewPage'],
      title: '毕业审查'
    }
  },
  {
    path: smsUrl + '/graduationReview?methodToCall=getStudentSelfCheckPage&amp;viewId=GraduationReviewView',
    name: 'StudentNumberGeneration',
    x: 1,
    y: 13,
    icon: 'icon-zhuanxue',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewStudentNumberGenerationPage'],
      title: '学生自查'
    }
  },
  {
    path: smsUrl + '/academicAdvisor?methodToCall=getAcademicAdvisorManagementPage&amp;viewId=AcademicAdvisorView',
    name: 'AcademicAdvisorManagement',
    x: 2,
    y: 1,
    icon: 'icon-tongji2',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewAcademicAdvisorManagementPage'],
      title: '学业导师'
    }
  },
  {
    path: smsUrl + '/academicAdvisor?methodToCall=getAcademicAdvisorAssignManagePage&amp;viewId=AcademicAdvisorView',
    name: 'ChoiceAcademy',
    x: 2,
    y: 2,
    icon: 'icon-fenpei',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewChoiceAcademyPage'],
      title: '分配管理'
    }
  },
  {
    path: smsUrl + '/academicAdvisor?methodToCall=countAcademicAdvisorInfo&amp;viewId=AcademicAdvisorView',
    name: 'GuidanceDetails',
    x: 2,
    y: 4,
    icon: 'icon-caozuorizhi1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewGuidanceDetailsPage'],
      title: '指导详情'
    }
  },
  {
    path: smsUrl + '/academicAdvisor?methodToCall=getMyAcademicAdvisorPage&amp;viewId=AcademicAdvisorView',
    name: 'smsMyAcademicAdvisor',
    x: 2,
    y: 5,
    icon: 'icon-kucun1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewMyAcademicAdvisorPage'],
      title: '我的学业导师'
    }
  },
  {
    path: smsUrl + '/academicAdvisor?methodToCall=getMyAcademicGuidancePage&amp;viewId=AcademicAdvisorView',
    name: 'MyAcademicGuidance',
    x: 2,
    y: 4,
    icon: 'icon-zhidao',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewMyAcademicGuidancePage'],
      title: '我的学业指导'
    }
  },
  {
    path: smsUrl + '/majorLargeClass?methodToCall=getMajorLargeClassShuntingModulePage&amp;viewId=LargeClassView',
    name: 'LargeClassShunting',
    x: 2,
    y: 5,
    icon: 'icon-tongji2',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewLargeClassShuntingPage'],
      title: '大类分流'
    }
  },
  {
    path: smsUrl + '/majorLargeClass?methodToCall=getMajorLargeClassManagePage&amp;viewId=LargeClassView',
    name: 'LargeClassManagement',
    x: 2,
    y: 6,
    icon: 'icon-renqunfenliu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewLargeClassManagementPage'],
      title: '分流设置'
    }
  },
  {
    path: smsUrl + '/majorLargeClass?methodToCall=getStudentWishFillInPage&amp;viewId=LargeClassView',
    name: 'DiversionVolunteer',
    x: 2,
    y: 7,
    icon: 'icon-renqunfenliu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewDiversionVolunteerPage'],
      title: '分流志愿'
    }
  },
  {
    path: smsUrl + '/majorLargeClass?methodToCall=getLargeClassShuntingSelectionPage&amp;viewId=LargeClassView',
    name: 'ShuntingSelect',
    x: 2,
    y: 8,
    icon: 'icon-shuangren',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewShuntingSelectPage'],
      title: '分流选拔'
    }
  },
  {
    path: smsUrl + '/majorLargeClass?methodToCall=getLargeClassPublishApplyReviewPage&amp;viewId=LargeClassView',
    name: 'LargeClassReleaseReview',
    x: 2,
    y: 9,
    icon: 'icon-baogaoyishenhe',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewLargeClassReleaseReviewPage'],
      title: '分流审核'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getOverseasExchangeManagementPage&amp;viewId=StudentStatusView',
    name: 'OverseasExchangeManagement',
    x: 4,
    y: 4,
    icon: 'icon-zhuanxue',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewOverseasExchangeManagementPage'],
      title: '校外长期交流'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getOverseasExchangeProjectsPage&amp;viewId=StudentStatusView',
    name: 'OverseasExchange',
    x: 4,
    y: 5,
    icon: 'icon-chuguo',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewOverseasExchangePage'],
      title: '校外长期交流管理'
    }
  },

  {
    path: smsUrl + '/studentmanagement?methodToCall=getMyOverseasExchProjApplicationsPage&amp;viewId=StudentStatusView',
    name: 'StudentOverseasExchange',
    x: 4,
    y: 6,
    icon: 'icon-chuguo',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewStudentOverseasExchangePage'],
      title: '校外长期交流学分认定'
    }
  },
  {
    path: '',
    name: 'ShortTermExchange',
    x: 4,
    y: 7,
    icon: 'icon-fankui',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewShortTermExchangePage'],
      title: '短期交流'
    }
  },
  {
    path: smsUrl + '/shortTermStudy?methodToCall=queryShortTermStudyProjectVOCondition&amp;viewId=StudentStatusView',
    name: 'ShortTermExchangeProgram',
    x: 4,
    y: 7,
    icon: 'icon-fankui',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewShortTermExchangeProgramPage'],
      title: '短期交流项目'
    }
  },
  {
    path: smsUrl + '/shortTermStudy?methodToCall=queryShortTermStudyApproveApplyVOCondition&amp;viewId=StudentStatusView',
    name: 'ShortTermExchangeCertManagement',
    x: 4,
    y: 8,
    icon: 'icon-fankui',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewShortTermExchangeCertManagementPage'],
      title: '短期交流认定管理'
    }
  },
  {
    path: smsUrl + '/shortTermStudy?methodToCall=getStudentShortTermApplyVOList&amp;viewId=StudentStatusView',
    name: 'ShortTermExchangeCreditRecognition',
    x: 4,
    y: 9,
    icon: 'icon-renzheng3',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewShortTermExchangeCreditRecognitionPage'],
      title: '短期交流学分认定'
    }
  },
  {
    path: smsUrl + '/home?methodToCall=getHomePage&amp;viewId=PortalView',
    name: 'PostgraduateTutor',
    x: 4,
    y: 10,
    icon: 'icon-daoshi1',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewPostgraduateTutorPage'],
      title: '研究生导师'
    }
  },
  {
    path: smsUrl + '/tutor?methodToCall=getTutorChoiceDeptPage&amp;viewId=AcademicAdvisorView',
    name: 'PostgraduateChoiceAcademy',
    x: 4,
    y: 11,
    icon: 'icon-daoshiguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewPostgraduateChoiceAcademyPage'],
      title: '分配管理'
    }
  },
  {
    path: smsUrl + '/tutor?methodToCall=getStuTutorWishPage&amp;viewId=AcademicAdvisorView',
    name: 'PostgraduateWishFil',
    x: 4,
    y: 12,
    icon: 'icon-daoshi1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewPostgraduateWishFillPage'],
      title: '志愿填报'
    }
  },
  {
    path: smsUrl + '/tutor?methodToCall=getGuidanceMasterSelectionPage&amp;viewId=AcademicAdvisorView',
    name: 'GuidePostgraduateSelect',
    x: 4,
    y: 13,
    icon: 'icon-zhaopin2',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewGuidePostgraduateSelectPage'],
      title: '指导研究生选拔'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getReviewManagementPage&amp;viewId=ReviewView',
    name: 'smsReviewManagement',
    x: 3,
    y: 1,
    icon: 'icon-tongji2',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewReviewManagementPage'],
      title: '学籍异动'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getStuApplicationsReviewPage&amp;viewId=ReviewView',
    name: 'ReviewApply',
    x: 3,
    y: 2,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewReviewApplyPage'],
      title: '学籍异动审核'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getEnrollmentModifyReviewPage&amp;viewId=ReviewView',
    name: 'SchoolRollChangeReview',
    x: 3,
    y: 3,
    icon: 'icon-tongji2',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewSchoolRollChangeReviewPage'],
      title: '学籍信息变更审核'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=searchDocumentNumberManagementInfo&amp;viewId=StudentStatusView',
    name: 'DocumentNumberManagement',
    x: 3,
    y: 4,
    icon: 'icon-moban',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewDocumentNumberManagementPage'],
      title: '文号管理'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getStuSchoolWorkWarnPage&amp;viewId=StudentStatusView',
    name: 'SchoolWorkWarn',
    x: 3,
    y: 5,
    icon: 'icon-jingshimian1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewSchoolWorkWarnPage'],
      title: '学业警示'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getStuEnrollChangeWarningPage&amp;viewId=StudentStatusView',
    name: 'ChangeWarningExceedSchoolYearLimit',
    x: 3,
    y: 6,
    icon: 'icon-xuqiupingshen',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewChangeWarningExceedSchoolYearLimitPage'],
      title: '异动警示'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getCommonApplyInstructionPage&amp;viewId=AdminView',
    name: 'ChangeApplicationDescriptionList',
    x: 3,
    y: 7,
    icon: 'icon-shuoming',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewChangeApplicationDescriptionListPage'],
      title: '异动申请说明'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getTransferMajorSettingPage&amp;viewId=ReviewView',
    name: 'ChangeMajorSet',
    x: 3,
    y: 8,
    icon: 'icon-qiehuanfanxiangnizhuanmianxing',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewChangeMajorSetPage'],
      title: '转专业设置'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getCheckInAndRegisterManagementPage&amp;viewId=StudentStatusView',
    name: 'CheckInAndRegisterManagement',
    x: 3,
    y: 9,
    icon: 'icon-confirm',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewCheckInAndRegisterManagementPage'],
      title: '报到注册'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getStudentCheckedInPage&amp;viewId=StudentStatusView',
    name: 'StudentRegister',
    x: 3,
    y: 10,
    icon: 'icon-kecheng8',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewStudentRegisterPage'],
      title: '学生报到'
    }
  },
  {
    path: smsUrl + '/studentmanagement?methodToCall=getStudentRegisterPage&amp;viewId=StudentStatusView',
    name: 'StudentEnrolment',
    x: 3,
    y: 11,
    icon: 'icon-baogaoyishenhe',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewStudentEnrolmentPage'],
      title: '学生注册'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getStudentLabelManagementPage&amp;viewId=AdminView',
    name: 'StudentLabelManagement',
    x: 4,
    y: 1,
    icon: 'icon-zhiwumingcheng',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewStudentLabelManagementPage'],
      title: '学生标签'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getStudentLabelSettingPage&amp;viewId=AdminView',
    name: 'StudentLabelSetting',
    x: 4,
    y: 2,
    icon: 'icon-zhiwumingcheng',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewStudentLabelSettingPage'],
      title: '学生标签设置'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getStudentLabelPermissionPage&amp;viewId=AdminView',
    name: 'StudentLabelPermission',
    x: 4,
    y: 3,
    icon: 'icon-xitongguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewStudentLabelPermissionPage'],
      title: '学生标签权限'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getManageConsolePage&amp;viewId=AdminView',
    name: 'smsConsole',
    x: 5,
    y: 1,
    icon: 'icon-zhiwumingcheng',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewConsolePage'],
      title: '管理台'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getRuleListPage&amp;viewId=AdminView',
    name: 'RuleList',
    x: 5,
    y: 2,
    icon: 'icon-zhaiyao',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewRuleListPage'],
      title: '规则'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getManageCategoryPage&amp;viewId=AdminView',
    name: 'smsCategory',
    x: 5,
    y: 2,
    icon: 'icon-msnui-module',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewCategoryPage'],
      title: '类别'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getLogPage&amp;viewId=AdminView',
    name: 'LogList',
    x: 5,
    y: 3,
    icon: 'icon-server_05',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewLogListPage'],
      title: '日志'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getPermManagePage&amp;viewId=AdminView',
    name: 'smsPermissionManagement',
    x: 5,
    y: 4,
    icon: 'icon-zhaopin',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewPermissionManagementPage'],
      title: '权限'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getRolePage&amp;viewId=AdminView',
    name: 'smsRoleManager',
    x: 5,
    y: 5,
    icon: 'icon-iconfont-jiaoshi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewRoleManagerPage'],
      title: '角色'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getUserManagementPage&amp;viewId=AdminView',
    name: 'smsUserRoleManager',
    x: 5,
    y: 6,
    icon: 'icon-yonghu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewUserRoleManagerPage'],
      title: '用户'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getCounsellorSettingPage&amp;viewId=AdminView',
    name: 'CounselorSetup',
    x: 5,
    y: 7,
    icon: 'icon-iconfont-jiaoshi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewCounselorSetupPage'],
      title: '辅导员'
    }
  },

  {
    path: smsUrl + '/admin?methodToCall=getTimeSetPage&amp;viewId=AdminView',
    name: 'smsTimeSet',
    x: 5,
    y: 8,
    icon: 'icon-zhaiyao',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewTimeSetPage'],
      title: '时间'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getFunctionControlPage&amp;viewId=AdminView',
    name: 'ControlSwitch',
    x: 5,
    y: 9,
    icon: 'icon-jindu12',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewControlSwitchPage'],
      title: '控制开关'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getWorkFlowManagePage&amp;viewId=AdminView',
    name: 'smsWorkFlowManage',
    x: 5,
    y: 10,
    icon: 'icon-zhaiyao',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewWorkFlowManagePage'],
      title: '工作流'
    }
  },
  {
    path: smsUrl + '/home?methodToCall=getAnnouncementEditListPage&amp;viewId=PortalView',
    name: 'EditBulletinBoard',
    x: 5,
    y: 11,
    icon: 'icon-xiugai4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewEditBulletinBoardPage'],
      title: '公告管理'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=getTemplateManagementPage&amp;viewId=AdminView',
    name: 'UploadTemplate',
    x: 5,
    y: 12,
    icon: 'icon-tijiao',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewUploadTemplatePage'],
      title: '模板上传'
    }
  },
  {
    path: smsUrl + '/adminClass?methodToCall=getAdminClassInfoList&amp;viewId=AdminView',
    name: 'AdministrativeClassManagement',
    x: 5,
    y: 13,
    icon: 'icon-xuejiguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewAdministrativeClassManagementPage'],
      title: '行政班'
    }
  },
  {
    path: smsUrl + '/admin?methodToCall=queryMajorByCondition&amp;viewId=AdminView',
    name: 'ProfessionalManagement',
    x: 5,
    y: 14,
    icon: 'icon-xiangmuguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SMS',
      permission: ['ViewProfessionalManagementPage'],
      title: '专业'
    }
  }
]

export default {
  name: '学籍管理',
  code: 'sms',
  namespace: 'KR_SMS',
  icon: 'icon-gerenxinxi7',
  originRouters: smsRouterMap
}
