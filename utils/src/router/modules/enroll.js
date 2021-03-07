/**
 * 选课权限路由
 * @type { *[] }
 */
export const enrollRouterMap = [
  {
    path: '/',
    name: 'index',
    redirect: '/Home',
    meta: {
      target: '_blank', title: '首页' },
    children: [
      {
        path: '/Home',
        name: 'Home',
        x: 1,
        y: 1,
        meta: {
          target: '_blank',
          icon: 'fa icon-zhuye',
          hiddenTitleInPage: true,
          hiddenHeaderContent: true,
          namespace: 'KR_ENRL',
          title: '主页',
          hiddenTab: true
        }
      },
      {
        path: '/CourseSetting',
        name: 'CourseSetting',
        x: 2,
        y: 1,
        meta: {
          target: '_blank',
          'requireAuth': true,
          icon: 'icon-xuanke1',
          permission: ['ViewCourseEnrlSettingPage'],
          namespace: 'KR_ENRL',
          title: '选课设置'
        },
        children: [
          {
            path: '/CourseSelectBatch',
            name: 'CourseSelectBatch',
            menuLevel: 2,
            meta: {
              target: '_blank',
              'requireAuth': true,
              icon: 'icon-yewumokuai',
              permission: ['ViewCourseEnrlBatchPage'],
              namespace: 'KR_ENRL',
              title: '选课批次'
            }
          },
          {
            path: '/BatchInfo',
            name: 'BatchInfo',
            meta: {
              target: '_blank',
              icon: 'icon-jindu12',
              permission: ['ViewCourseBatchInfoPage'],
              namespace: 'KR_ENRL',
              title: '选课参数'
            }
          },
          {
            path: '/ApplicationPeriod',
            name: 'ApplyConfig',
            redirect: '/ApplicationPeriod',
            meta: {
              target: '_blank',
              'requireAuth': true,
              permission: ['ViewApplicationPeriodPage'],
              namespace: 'KR_ENRL',
              title: '申请设置',
              matched: [{ path: '', name: '申请设置' }]
            },
            children: [
              {
                path:  '/ApplicationPeriod',
                name: 'ApplicationPeriod',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewApplicationPeriodPage'],
                  namespace: 'KR_ENRL',
                  title: '申请时段'
                }
              },
              {
                path:  '/ApplyConfiguration',
                name: 'ApplyConfiguration',
                meta: {
                  target: '_blank',
                  // 'requireAuth': true,
                  // permission: ['ViewApplyConfigurationPage'],
                  icon: 'icon-jindu12',
                  namespace: 'KR_ENRL',
                  title: '申请设置'
                }
              }
            ]
          },
          {
            path:  '/ClassBind',
            name: 'ClassBind',
            meta: {
              target: '_blank', 'requireAuth': true,
              icon: 'fa fa-user',
              permission: ['ViewClassBind'],
              namespace: 'KR_ENRL',
              title: '教学班绑定'
            }
          },
          {
            path:  '/RefreshRepairRules',
            name: 'RefreshRepairRules',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewStudentCourseStartEnrlPage'],
              namespace: 'KR_ENRL',
              title: '刷新&重修规则'
            }
          },
          {
            path:  '/EnglishLevelSetting',
            name: 'EnglishLevelSetting',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewEnglishLevelSettingPage'],
              namespace: 'KR_ENRL',
              title: '学生英语等级设置'
            }
          }
        ]
      },
      {
        path:  '/CourseEnrollManage',
        name: 'CourseEnrollManage',
        x: 3,
        y: 1,
        meta: {
          target: '_blank', 'requireAuth': true,
          icon: 'icon-chakan7',
          permission: ['ViewCourseEnrollManagePage'],
          namespace: 'KR_ENRL',
          title: '选课管理'
        },
        children: [
          {
            path:  '/CourseDropTotal',
            absolutePath:  '/CourseDropTotal',
            name: 'CourseDropTotal',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseDropPoolPage'],
              namespace: 'KR_ENRL',
              title: '退课池'
            }
          },
          {
            path:  '/CourseTeachingClass',
            absolutePath:  '/CourseTeachingClass',
            name: 'CourseTeachingClass',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrlClassPage'],
              namespace: 'KR_ENRL',
              title: '教学班管理'
            }
          },
          {
            path:  '/CourseStudent',
            absolutePath:  '/CourseStudent',
            name: 'CourseStudent',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrlStudentPage'],
              namespace: 'KR_ENRL',
              title: '为学生选课'
            }
          },
          {
            path:  '/ElectionWithdrawalReview',
            absolutePath:  '/ElectionWithdrawalReview',
            name: 'ElectionWithdrawalReview',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrlDropReviewPage'],
              namespace: 'KR_ENRL',
              title: '选/退课审核'
            }
          },
          {
            path:  '/CourseSelectCheckResult',
            absolutePath:  '/CourseSelectCheckResult',
            name: 'CourseSelectCheckResult',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrollmentResultPage'],
              namespace: 'KR_ENRL',
              title: '学生选课结果'
            }
          },
          {
            path:  '/SelectCourseProgress',
            absolutePath:  '/SelectCourseProgress',
            name: 'CourseStudent',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewSelectCourseProgressPage'],
              namespace: 'KR_ENRL',
              title: '学生选课进度'
            }
          },
          {
            path:  '/ElectiveWithdrawalApplicationLog',
            absolutePath:  '/ElectiveWithdrawalApplicationLog',
            name: 'ElectiveWithdrawalApplicationLog',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewElectiveWithdrawalApplicationLogPage'],
              namespace: 'KR_ENRL',
              title: '选/退课记录'
            }
          },
          {
            path:  '/ImportManagement',
            absolutePath:  '/ImportManagement',
            name: 'ImportManagement',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewImportCenterPage'],
              namespace: 'KR_ENRL',
              title: '导入管理'
            }
          },
          {
            path:  '/CourseStudentConflict',
            absolutePath:  '/CourseStudentConflict',
            name: 'CourseStudentConflict',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrlConfictCheckPage'],
              namespace: 'KR_ENRL',
              title: '冲突检测'
            }
          }
        ]
      },
      {
        path:  '/ManageConsolo',
        name: 'ManageConsolo',
        x: 4,
        y: 0,
        meta: {
          target: '_blank', 'requireAuth': true,
          icon: 'icon-yonghu4',
          permission: ['ViewManageConsoloPage'],
          namespace: 'KR_ENRL',
          title: '管理台'
        },
        children: [
          {
            path:  '/AdminCategory',
            absolutePath:  '/AdminCategory',
            name: 'AdminCategory',
            redirect: '/AdminCategory',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewAdminCategoryPage'],
              namespace: 'KR_ENRL',
              title: '类别'
            },
            children: [
              {
                path:  '/AdminCategory',
                absolutePath:  '/AdminCategory',
                name: 'AdminCategory',
                meta: {
                  target: '_blank', 'requireAuth': true,
                  permission: ['ViewAdminCategoryPage'],
                  namespace: 'KR_ENRL',
                  title: '类别',
                  hiddenInBreadcrumb: true
                }
              },
              {
                path:  '/AdminWorkFlowCategory',
                absolutePath:  '/AdminWorkFlowCategory',
                name: 'AdminWorkFlowCategory',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewWorkFlowCategoryPage'],
                  namespace: 'KR_ENRL',
                  title: '工作流类别'
                }
              },
              {
                path:  '/ReasonApplication',
                absolutePath:  '/ReasonApplication',
                name: 'ReasonApplication',
                meta: {
                  target: '_blank', 'requireAuth': true,
                  permission: ['ViewClassTagTypePage'],
                  namespace: 'KR_ENRL',
                  title: '申请选/退课类别原因'
                }
              }
            ]
          },
          {
            path:  '/AdminPermission',
            absolutePath:  '/AdminPermission',
            name: 'AdminPermission',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewAdminPermissionPage'],
              namespace: 'KR_ENRL',
              title: '权限'
            }
          },
          {
            path:  '/AdminRole',
            absolutePath:  '/AdminRole',
            name: 'AdminRole',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewRolePage'],
              namespace: 'KR_ENRL',
              title: '角色' }
          },
          {
            path:  '/AdminUser',
            absolutePath:  '/AdminUser',
            name: 'AdminUser',
            redirect: '/AdminUser',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewUserPage'],
              namespace: 'KR_ENRL',
              title: '用户'
            },
            children: [
              {
                path:  '/AdminUser',
                absolutePath:  '/AdminUser',
                name: 'AdminUser',
                meta: {
                  target: '_blank', 'requireAuth': true,
                  permission: ['ViewUserPage'],
                  namespace: 'KR_ENRL',
                  title: '用户',
                  hiddenInBreadcrumb: true
                }
              },
              {
                path:  '/AdminUpdateUser',
                absolutePath:  '/AdminUpdateUser',
                name: 'AdminUpdateUser',
                meta: {
                  target: '_blank', 'requireAuth': true,
                  permission: ['ViewEditUserPage'],
                  namespace: 'KR_ENRL',
                  title: '用户编辑'
                }
              }
            ]
          },
          {
            path:  '/AdminWorkManage',
            absolutePath:  '/AdminWorkManage',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewWorkflowPage'],
              namespace: 'KR_ENRL',
              title: '工作流'
            }
          },
          {
            path:  '/AdminEditBulletinBoard',
            absolutePath:  '/AdminEditBulletinBoard',
            name: 'AdminEditBulletinBoard',
            redirect: '/AdminEditBulletinBoard',
            meta: {
              target: '_blank',
              'requireAuth': true,
              permission: ['ViewAdminEditBulletinBoardPage'],
              namespace: 'KR_ENRL',
              title: '公告管理'
            },
            children: [
              {
                path:  '/AdminEditBulletinBoard',
                absolutePath:  '/AdminEditBulletinBoard',
                name: 'AdminEditBulletinBoard',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewAdminEditBulletinBoardPage'],
                  namespace: 'KR_ENRL',
                  title: '公告管理',
                  hiddenInBreadcrumb: true
                }
              },
              {
                path:  '/AddAdminUserEditBulletinBoard',
                absolutePath:  '/AddAdminUserEditBulletinBoard',
                name: 'AddAdminUserEditBulletinBoard',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewAnnouncementEditPage'],
                  namespace: 'KR_ENRL',
                  title: '新增公告栏'
                }
              },
              {
                path:  '/AdminUserEditBulletinBoard',
                absolutePath:  '/AdminUserEditBulletinBoard',
                name: 'AdminUserEditBulletinBoard',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewAnnouncementEditPage'],
                  namespace: 'KR_ENRL',
                  title: '编辑公告栏'
                }
              }
            ]
          }
        ]
      },
      {
        path:  '/CourseStuSelectionList',
        name: 'CourseStuSelectionList',
        hidden: true,
        meta: {
          target: '_blank', 'requireAuth': true,
          permission: ['ViewStudenEnrlCourseListPage'],
          namespace: 'KR_ENRL',
          title: '选课列表'
        }
      },
      {
        path:  '/CourseSelectionApplication',
        name: 'CourseSelectionApplication',
        hidden: true,
        meta: {
          target: '_blank', 'requireAuth': true,
          permission: ['ViewCourseSelectionApplication'],
          namespace: 'KR_ENRL',
          title: '特殊选课申请'
        }
      },
      {
        path:  '/enrollCourseDropRuleOuterApply',
        name: 'CourseDropRuleOuterApply',
        hidden: true,
        meta: {
          target: '_blank', 'requireAuth': true,
          permission: ['ViewCourseDropRuleOuterApplyPage'],
          namespace: 'KR_ENRL',
          title: '特殊退课申请'
        }
      }
    ]
  }
]
export default {
  name: '选课管理',
  code: 'enroll',
  baseUrl: '/enroll/',
  namespace: 'KR_ENRL',
  icon: 'icon-server_05',
  originRouters: enrollRouterMap
}
