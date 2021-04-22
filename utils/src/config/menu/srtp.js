/**
 * 创新创业
 */
const subUrl = '/srtp/portal'
const routerMap = [
  {
    path: subUrl + '/project?methodToCall=getCommonHome&amp;viewId=ProjectView',
    name: 'Name',
    x: 1,
    y: 2,
    icon: 'icon-xuejiguanli1',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '报名'
    }
  },
  {
    path: subUrl + '/project?methodToCall=getProjectList&amp;viewId=ProjectListView',
    name: 'srtpProjectList',
    x: 1,
    y: 2,
    icon: 'icon-xiangmu',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewProjectListPage'],
      title: '项目'
    }
  },
  {
    path: subUrl + '/project?methodToCall=getPrjQueryPage&amp;viewId=ProjectListView',
    name: 'ProjectQuery',
    x: 1,
    y: 3,
    icon: 'icon-sousuo2',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewProjectQueryPage'],
      title: '项目查询'
    }
  },
  {
    path: subUrl + '/project?methodToCall=getTeaProjectPage&amp;viewId=SubjectView',
    name: 'Subject',
    x: 1,
    y: 4,
    icon: 'icon-zuoye',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '课题'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getFundsPage&amp;viewId=AdminView',
    name: 'srtpFundsManagement',
    x: 1,
    y: 5,
    icon: 'icon-xiangmu',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewFundsManagementPage'],
      title: '经费'
    }
  },
  {
    path: subUrl + '/project?methodToCall=getReviewProjectForBatchPage&amp;viewId=ProjectView',
    name: 'PackageReviewRanking',
    x: 1,
    y: 6,
    icon: 'icon-xuqiupingshen',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewPackageReviewRankingPage'],
      title: '审核'
    }
  },
  {
    path: subUrl + '/project?methodToCall=getPersonalProjectPage&amp;viewId=ProjectListView',
    name: 'PersonalProjectInquiry',
    x: 1,
    y: 6,
    icon: 'icon-sousuo2',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewPersonalProjectInquiryPage'],
      title: '创新创业成果查询'
    }
  },
  {
    path: subUrl + '/contest?methodToCall=getContestCategoryPage&amp;viewId=ContestView',
    name: 'srtpContest',
    x: 2,
    y: 1,
    icon: 'icon-jiangli3',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '竞赛'
    }
  },
  {
    path: subUrl + '/contest?methodToCall=getMainDataImportPage&amp;viewId=ContestView',
    name: 'srtpStudentContestList',
    x: 2,
    y: 2,
    icon: 'icon-daoru',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewCompetitionInfoDataImportPage'],
      title: '数据导入'
    }
  },
  {
    path: subUrl + '/contest?methodToCall=getContestSignUpSelectionListPage&amp;viewId=ContestView',
    name: 'srtpStudentContestList',
    x: 2,
    y: 3,
    icon: 'icon-zhiwumingcheng',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewStudentContestListPage'],
      title: '竞赛报名'
    }
  },
  {
    path: subUrl + '/contest?methodToCall=getContestListPage&amp;viewId=ContestView',
    name: 'ContestManagement',
    x: 2,
    y: 4,
    icon: 'icon-jiangli3',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewContestManagementPage'],
      title: '竞赛管理'
    }
  },
  {
    path: subUrl + '/contest?methodToCall=getContestLevelPage&amp;viewId=ContestView',
    name: 'srtpStudentContestList',
    x: 2,
    y: 5,
    icon: 'icon-pingjia',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewContestLevelPage'],
      title: '竞赛级别'
    }
  },
  {
    path: subUrl + '/contest?methodToCall=getContestTypeInfoList&amp;viewId=ContestView',
    name: 'ContestManagement',
    x: 2,
    y: 6,
    icon: 'icon-jindu13',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewContestTypeInfoPage'],
      title: '竞赛类别'
    }
  },
  {
    path: subUrl + '/contest?methodToCall=getContestTypeLabelPage&amp;viewId=ContestView',
    name: 'srtpStudentContestList',
    x: 2,
    y: 7,
    icon: 'icon-jindu13',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewContestLabelCategoryPage'],
      title: '竞赛标签类别'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getExpertModuleConsolePage&amp;viewId=AdminView',
    name: 'ExpertModuleConsole',
    x: 3,
    y: 1,
    icon: 'icon-zhiwumingcheng',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewExpertModuleConsolePage'],
      title: '专家'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getExpertGroupPage&amp;viewId=AdminView',
    name: 'StudentContestList',
    x: 3,
    y: 2,
    icon: 'icon-peixun',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewExpertGroupPage'],
      title: '专家小组'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getExpertOpinionChoicePage&amp;viewId=AdminView',
    name: 'ManagerExpertOpinion',
    x: 3,
    y: 3,
    icon: 'icon-renwujibie',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewExpertOpinionPage', 'ViewManagerExpertOpinion'],
      title: '专家意见'
    }
  },
  {
    path: subUrl + '/statistics?methodToCall=getStatisticsManagePage&amp;viewId=StatisticView',
    name: 'srtpStatisticManage',
    x: 4,
    y: 1,
    icon: 'icon-tongji',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewStatisticManagePage'],
      title: '统计'
    }
  },
  {
    path: subUrl + '/statistics?methodToCall=getStuDistributionStatisticsPage&amp;viewId=StatisticView',
    name: 'StudentStatistic',
    x: 4,
    y: 2,
    icon: 'icon-xuejiguanli1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewStudentStatisticPage'],
      title: '学生'
    }
  },
  {
    path: subUrl + '/statistics?methodToCall=getInstDistributionStatisticsPage&amp;viewId=StatisticView',
    name: 'TeacherStatistic',
    x: 4,
    y: 3,
    icon: 'icon-iconfont-jiaoshi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewTeacherStatisticPage'],
      title: '教师'
    }
  },
  {
    path: subUrl + '/statistics?methodToCall=getProjectGradeStatisticsPage&amp;viewId=StatisticView',
    name: 'ProjectGrade',
    x: 4,
    y: 5,
    icon: 'icon-yewumokuai',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewProjectGradePage'],
      title: '项目成绩'
    }
  },
  {
    path: subUrl + '/statistics?methodToCall=getProjectInfoStatisticPage&amp;viewId=StatisticView',
    name: 'ProjectStatistics',
    x: 4,
    y: 6,
    icon: 'icon-xiangmu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewProjectStatisticsPage'],
      title: '项目'
    }
  },

  {
    path: '',
    name: 'srtpConsole',
    x: 5,
    y: 1,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewManageConsole'],
      title: '管理台'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getTermManagePage&amp;viewId=AdminView',
    name: 'TermManagement',
    x: 5,
    y: 2,
    icon: 'icon-jieguotiaozheng_jieguotiaozheng',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewTermManagementPage'],
      title: '立项批次'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getContestTimeInfo&amp;viewId=AdminView',
    name: 'ContestTimeInfo',
    x: 5,
    y: 3,
    icon: 'icon-baogao',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewContestTimeInfoPage'],
      title: '竞赛批次'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getReportTemplateManagementPage&amp;viewId=AdminView',
    name: 'ReportTemplateManagement',
    x: 5,
    y: 4,
    icon: 'icon-caidantubiao-05',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewReportTemplateManagementPage'],
      title: '模板'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getImportingProjectPage&amp;viewId=AdminView',
    name: 'ImportingProject',
    x: 5,
    y: 5,
    icon: 'icon-shenqingtijiao',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewImportingProjectPage'],
      title: '项目导入'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getConsolePage&amp;viewId=AdminView',
    name: 'strpConsoleCat',
    x: 5,
    y: 6,
    icon: 'icon-msnui-module',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewConsolePage'],
      title: '类别'
    }
  },

  {
    path: subUrl + '/admin?methodToCall=getPermissionManagementPage&amp;viewId=AdminView',
    name: 'srtpPermissionManagement',
    x: 5,
    y: 7,
    icon: 'icon-zhaopin',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewPermissionManagementPage'],
      title: '权限'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getRoleManagerPage&amp;viewId=AdminView',
    name: 'srtpRoleManager',
    x: 5,
    y: 8,
    icon: 'icon-iconfont-jiaoshi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewRoleManagerPage'],
      title: '角色'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getUserRoleManagerPage&amp;viewId=AdminView',
    name: 'srtpUserRoleManager',
    x: 5,
    y: 9,
    icon: 'icon-yonghu6',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewUserRoleManagerPage'],
      title: '用户'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getTimeSetPage&amp;viewId=AdminView',
    name: 'srtpTimeSet',
    x: 5,
    y: 10,
    icon: 'icon-pingjia6',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewTimeSetPage'],
      title: '时间'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getWorkFlowManagePage&amp;viewId=AdminView',
    name: 'srtpWorkFlowManage',
    x: 5,
    y: 11,
    icon: 'icon-pingjia6',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewWorkFlowManagePage'],
      title: '工作流'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getCertificateClosurePage&amp;viewId=AdminView',
    name: 'EndProjectCertificate',
    x: 5,
    y: 12,
    icon: 'icon-pingjia6',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewEndProjectCertificatePage'],
      title: '结题证书'
    }
  },
  {
    path: subUrl + '/admin?methodToCall=getPrjNumberRulePage&amp;viewId=AdminView',
    name: 'srtpProjectNumberRule',
    x: 5,
    y: 13,
    icon: 'icon-pingjia6',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      namespace: 'KR_SRTP',
      permission: ['ViewProjectNumberRulePage'],
      title: '项目编号生成'
    }
  }
]

export default {
  name: '创新实践平台',
  code: 'srtp',
  namespace: 'KR_SRTP',
  icon: 'icon-server_05',
  originRouters: routerMap
}
