/**
 * 成绩权限路由
 * @type { *[] }
 */
const resultRouterMap = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    meta: { title: '主页' },
    children: [
      {
        path: '/home',
        name: 'Home',
        x: 1,
        y: 1,
        menuLevel: 0,
        meta: {
          title: '主页',
          icon: 'home',
          hiddenHeaderContent: true,
          hiddenTitleInPage: true
        }
      },
      /**
       * * --------------------------------参数管理---------------------------------------
       */
      {
        path: '/ManageParameter',
        name: 'ManageParameter',
        x: 1,
        y: 2,
        meta: {
          icon: 'canshuguanli',
          requireAuth: true,
          permission: ['ViewManageParameterPage'],
          title: '参数管理',
          namespace: 'KR_SAM'
        },
        children: [
          {
            path: '/CreditSystem',
            name: 'CreditSystem',
            meta: {
              requireAuth: true,
              permission: ['ViewCreditSystemPage'],
              title: '分制管理',
              namespace: 'KR_SAM',
              hiddenInBreadcrumb: true,
              keepAlive: true
            }
          },
          {
            path: '/AdminTimeManagement',
            name: 'AdminTimeManagement',
            meta: {
              requireAuth: true,
              permission: ['ViewAdminTimeManagementPage'],
              namespace: 'KR_SAM',
              title: '时间管理'
            }
          }
        ]
      },
      /**
       * * --------------------------------成绩录入---------------------------------------
       */
      {
        path: '/ScoreInput',
        name: 'ScoreInput',
        hidden: true,
        redirect: '/ScoreInput',
        meta: { title: '成绩录入', isMenuItem: true, permission: ['ViewScoreInputPage'] },
        children: [
          {
            path: '/ScoreInput',
            name: 'ScoreInput',
            meta: {
              title: '成绩录入',
              hiddenInBreadcrumb: true,
              permission: ['ViewScoreInputPage'],
              keepAlive: false
            }
          },
          {
            path: '/GradeImport',
            name: 'GradeImport',
            meta: {
              title: '批量导入',
              keepAlive: false
            }
          }
        ]
      },
      {
        path: '/management',
        name: 'Management',
        x: 2,
        y: 1,
        meta: {
          requireAuth: true,
          permission: ['ViewGradesManagementPage'],
          title: '成绩管理',
          namespace: 'KR_SAM',
          icon: 'chengjiguanli'
        },
        children: [
          {
            path: '/GradeDatabaseManagement',
            name: 'GradeDatabaseManagement',
            meta: {
              requireAuth: true,
              namespace: 'KR_SAM',
              permission: ['ViewGradeDatabaseManagementPage'],
              title: '成绩库管理'
            }
          },
          {
            path: '/GradeChanges',
            name: 'GradeChanges',
            hidden: true,
            meta: {
              title: '新建成绩变更'
            }
          },
          {
            path: '/GradeReviewMange',
            name: 'GradeReviewMange',
            meta: {
              requireAuth: true,
              namespace: 'KR_SAM',
              permission: ['ViewGradeReviewMangePage'],
              title: '成绩变更审核'
            }
          },
          {
            path: '/GpaManagement',
            name: 'GpaManagement',
            meta: {
              requireAuth: true,
              namespace: 'KR_SAM',
              permission: ['ViewGpaManagementPage'],
              title: '绩点管理'
            }
          },
          {
            path: '/ScoreManagement',
            name: 'ScoreManagement',
            meta: {
              requireAuth: true,
              namespace: 'KR_SAM',
              permission: ['ViewScoreManagementPage'],
              title: '成绩管理'
            }
          },
          {
            path: '/StudentCheckExaminationPaperApply',
            name: 'StudentCheckExaminationPaperApply',
            meta: {
              title: '学生查卷申请',
              requireAuth: true,
              namespace: 'KR_SAM',
              permission: ['ViewStuCheckExamPaperApplyPage']
            }
          }
        ]
      },
      {
        path: '/change',
        name: 'change',
        x: 3,
        y: 3,
        meta: {
          requireAuth: true,
          permission: ['ViewSpecialGradesPage'],
          title: '特殊成绩',
          namespace: 'KR_SAM',
          icon: 'wj-tsdj'
        },
        children: [
          {
            path: '/GradeConversion',
            name: 'GradeConversion',
            redirect: '/GradeConversion',
            meta: {
              requireAuth: true,
              namespace: 'KR_SAM',
              permission: ['ViewGradeConversionPage'],
              title: '成绩转换'
            },
            children: [
              {
                path: '/GradeConversion',
                name: 'GradeConversion',
                meta: {
                  title: '成绩转换',
                  hiddenInBreadcrumb: true
                }
              },
              {
                path: '/GradeConversionDetail',
                name: 'GradeConversionDetail',
                meta: {
                  title: '成绩转换详情'
                }
              }
            ]
          },
          {
            path: '/CourseRecognition',
            name: 'CourseRecognition',
            redirect: '/CourseRecognition',
            meta: {
              requireAuth: true,
              permission: ['ViewCourseRecognitionPage'],
              namespace: 'KR_SAM',
              title: '成绩认定'
            },
            children: [
              {
                path: '/CourseRecognition',
                name: 'CourseRecognition',
                meta: {
                  hiddenInBreadcrumb: true,
                  requireAuth: true,
                  permission: ['ViewCourseRecognitionPage'],
                  namespace: 'KR_SAM',
                  title: '成绩认定'
                }
              },
              {
                path: '/EditCourseRecognition',
                name: 'EditCourseRecognition',
                meta: {
                  // requireAuth: true,
                  // permission: ['ViewCourseRecognitionPage'],
                  namespace: 'KR_SAM',
                  title: '编辑成绩认定'
                }
              }
            ]
          },
          {
            path: '/ImportGrade',
            name: 'ImportGrade',
            meta: {
              requireAuth: true,
              permission: ['ViewImportGradePage'],
              namespace: 'KR_SAM',
              title: '成绩导入'
            }
          }
        ]
      },
      {
        path: '/Alarm',
        name: 'Alarm',
        x: 3,
        y: 2,
        meta: {
          requireAuth: true,
          permission: ['ViewAlarmPage'],
          title: '成绩异动',
          namespace: 'KR_SAM',
          icon: 'jingshi'
        },
        children: [
          {
            path: '/AchievementChangeAlarm',
            name: 'AchievementChangeAlarm',
            meta: {
              requireAuth: true,
              namespace: 'KR_SAM',
              permission: ['ViewAchievementChangeAlarmPage'],
              title: '成绩异动报警'
            }
          }
        ]
      },
      {
        path: '/Resit',
        name: 'Resit',
        x: 2,
        y: 4,
        meta: {
          namespace: 'KR_SAM',
          requireAuth: true,
          permission: ['ViewResitPage'],
          title: '补考管理',
          icon: 'kaoshi'
        },
        children: [
          {
            path: '/ResitManagement',
            name: 'ResitManagement',
            meta: {
              requireAuth: true,
              namespace: 'KR_SAM',
              permission: ['ViewResitManagementPage'],
              title: '补考管理'
            }
          }
        ]
      },
      /**
       * * --------------------------------查询统计---------------------------------------
       */
      {
        path: '/statistics',
        name: 'Statistics',
        redirect: '/ResultInquiry',
        x: 3,
        y: 1,
        meta: {
          title: '查询统计',
          icon: 'tongji',
          permission: ['ViewSearchStatisticsPage'],
          requireAuth: true,
          namespace: 'KR_SAM'
        },
        children: [
          {
            path: '/ResultInquiry',
            name: 'ResultInquiry',
            meta: {
              title: '成绩查询',
              namespaceCode: 'KR_SAM',
              permission: ['ViewResultInquiryPage']
            }
          }
        ]
      },
      /**
       * * --------------------------------管理台---------------------------------------
       */
      {
        path: '/ManageConsolo',
        name: 'ManageConsolo',
        x: 4,
        y: 1,
        meta: { title: '管理台', icon: 'guanli', namespaceCode: 'KR_SAM',
          permission: ['ViewManageConsolePage'] },
        children: [
          {
            path: '/AdminWorkFlowCategory',
            name: 'AdminWorkFlowCategory',
            meta: {
              // requireAuth: true,
              permission: ['ViewWorkFlowCategoryPage'],
              namespaceCode: 'KR_SAM',
              title: '工作流类别'
            }
          },
          {
            path: '/AdminPermission',
            name: 'AdminPermission',
            meta: {
              title: '权限',
              namespaceCode: 'KR_SAM',
              permission: ['ViewAdminPermissionPage']
            }
          },
          {
            path: '/AdminRole',
            name: 'AdminRole',
            meta: {
              title: '角色',
              namespaceCode: 'KR_SAM',
              permission: ['ViewAdminRolePage']
            }
          },
          {
            path: '/AdminUser',
            redirect: '/AdminUser',
            meta: { title: '用户', permission: ['ViewAdminUserPage'] },
            children: [
              {
                path: '/AdminUser',
                name: 'AdminUser',
                meta: { title: '用户', hiddenInBreadcrumb: true, permission: ['ViewAdminUserPage'] }
              },
              {
                path: '/AdminUpdateUser',
                name: 'AdminUpdateUser',
                meta: { title: '用户编辑', hiddenInBreadcrumb: true, permission: ['ViewAdminUserPage'] }
              }
            ]
          },
          {
            path: '/AdminWorkManage',
            name: 'AdminWorkManage',
            meta: {
              requireAuth: true,
              permission: ['ViewWorkflowPage'],
              namespaceCode: 'KR_SAM',
              title: '工作流'
            }
          },
          {
            path: '/AnnouncementManagement',
            redirect: '/AnnouncementManagement',
            meta: { title: '公告管理', permission: ['ViewAnnouncementManagementPage'] },
            hiddenChildrenInMenu: true,
            children: [
              {
                path: '/AnnouncementManagement',
                name: 'AnnouncementManagement',
                meta: { title: '公告管理', hiddenInBreadcrumb: true }
              },
              {
                path: '/EditAnnouncement',
                name: 'EditAnnouncement',
                hidden: true,
                meta: {
                  permission: ['ViewEditAnnouncementPage'],
                  title: '公告编辑'
                }
              }
            ]
          }
        ]
      }
      /**
       * -----------------------------------------------------------------------
       */
    ]
  },
]

export default {
  name: '成绩管理',
  code: 'sam',
  namespace: 'KR_SAM',
  icon: 'chengjiguanli1',
  baseUrl: '/sam',
  originRouters: resultRouterMap
}
