import { httpConfig } from '@/config'
/**
 * 选课权限路由
 * @type { *[] }
 */
const enrlUrl = httpConfig.appRoot + `/enroll`
export const enrollRouterMap = [
  {
    path: '/',
    name: 'index',
    redirect: '/Home',
    meta: {
      target: '_blank', title: '首页' },
    children: [
      {
        path: enrlUrl + '/Home',
        absolutePath: enrlUrl + '/Home',
        name: 'Home',
        x: 1,
        y: 1,
        meta: {
          target: '_blank',
          iconCls: 'fa icon-zhuye',
          hiddenTitleInPage: true,
          hiddenHeaderContent: true,
          namespaceCode: 'KR_ENRL',
          pageTitle: '主页',
          hiddenTab: true
        }
      },
      {
        path: enrlUrl + '/CourseSetting',
        absolutePath: enrlUrl + '/CourseSetting',
        name: 'CourseSetting',
        x: 2,
        y: 1,
        meta: {
          target: '_blank',
          'requireAuth': true,
          iconCls: 'icon-xuanke1',
          permission: ['ViewCourseEnrlSettingPage'],
          namespaceCode: 'KR_ENRL',
          pageTitle: '选课设置'
        },
        children: [
          {
            path: '/CourseSelectBatch',
            absolutePath: enrlUrl + '/CourseSelectBatch',
            name: 'CourseSelectBatch',
            menuLevel: 2,
            meta: {
              target: '_blank',
              'requireAuth': true,
              iconCls: 'icon-yewumokuai',
              permission: ['ViewCourseEnrlBatchPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '选课批次'
            }
          },
          {
            path: enrlUrl + '/BatchInfo',
            absolutePath: enrlUrl + '/BatchInfo',
            name: 'BatchInfo',
            meta: {
              target: '_blank',
              iconCls: 'icon-jindu12',
              permission: ['ViewCourseBatchInfoPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '选课参数'
            }
          },
          {
            path: enrlUrl + '/ApplicationPeriod',
            absolutePath: enrlUrl + '/ApplicationPeriod',
            name: 'ApplyConfig',
            redirect: '/ApplicationPeriod',
            meta: {
              target: '_blank',
              'requireAuth': true,
              permission: ['ViewApplicationPeriodPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '申请设置',
              matched: [{ path: '', name: '申请设置' }]
            },
            children: [
              {
                path: enrlUrl + '/ApplicationPeriod',
                absolutePath: enrlUrl + '/ApplicationPeriod',
                name: 'ApplicationPeriod',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewApplicationPeriodPage'],
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '申请时段'
                }
              },
              {
                path: enrlUrl + '/ApplyConfiguration',
                absolutePath: enrlUrl + '/ApplyConfiguration',
                name: 'ApplyConfiguration',
                meta: {
                  target: '_blank',
                  // 'requireAuth': true,
                  // permission: ['ViewApplyConfigurationPage'],
                  iconCls: 'icon-jindu12',
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '申请设置'
                }
              }
            ]
          },
          {
            path: enrlUrl + '/ClassBind',
            absolutePath: enrlUrl + '/ClassBind',
            name: 'ClassBind',
            meta: {
              target: '_blank', 'requireAuth': true,
              iconCls: 'fa fa-user',
              permission: ['ViewClassBind'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '教学班绑定'
            }
          },
          {
            path: enrlUrl + '/RefreshRepairRules',
            absolutePath: enrlUrl + '/RefreshRepairRules',
            name: 'RefreshRepairRules',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewStudentCourseStartEnrlPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '刷新&重修规则'
            }
          },
          {
            path: enrlUrl + '/EnglishLevelSetting',
            absolutePath: enrlUrl + '/EnglishLevelSetting',
            name: 'EnglishLevelSetting',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewEnglishLevelSettingPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '学生英语等级设置'
            }
          }
        ]
      },
      {
        path: enrlUrl + '/CourseEnrollManage',
        absolutePath: enrlUrl + '/CourseEnrollManage',
        name: 'CourseEnrollManage',
        x: 3,
        y: 1,
        meta: {
          target: '_blank', 'requireAuth': true,
          iconCls: 'icon-chakan7',
          permission: ['ViewCourseEnrollManagePage'],
          namespaceCode: 'KR_ENRL',
          pageTitle: '选课管理'
        },
        children: [
          {
            path: enrlUrl + '/CourseDropTotal',
            absolutePath: enrlUrl + '/CourseDropTotal',
            name: 'CourseDropTotal',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseDropPoolPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '退课池'
            }
          },
          {
            path: enrlUrl + '/CourseTeachingClass',
            absolutePath: enrlUrl + '/CourseTeachingClass',
            name: 'CourseTeachingClass',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrlClassPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '教学班管理'
            }
          },
          {
            path: enrlUrl + '/CourseStudent',
            absolutePath: enrlUrl + '/CourseStudent',
            name: 'CourseStudent',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrlStudentPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '为学生选课'
            }
          },
          {
            path: enrlUrl + '/ElectionWithdrawalReview',
            absolutePath: enrlUrl + '/ElectionWithdrawalReview',
            name: 'ElectionWithdrawalReview',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrlDropReviewPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '选/退课审核'
            }
          },
          {
            path: enrlUrl + '/CourseSelectCheckResult',
            absolutePath: enrlUrl + '/CourseSelectCheckResult',
            name: 'CourseSelectCheckResult',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrollmentResultPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '学生选课结果'
            }
          },
          {
            path: enrlUrl + '/SelectCourseProgress',
            absolutePath: enrlUrl + '/SelectCourseProgress',
            name: 'CourseStudent',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewSelectCourseProgressPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '学生选课进度'
            }
          },
          {
            path: enrlUrl + '/ElectiveWithdrawalApplicationLog',
            absolutePath: enrlUrl + '/ElectiveWithdrawalApplicationLog',
            name: 'ElectiveWithdrawalApplicationLog',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewElectiveWithdrawalApplicationLogPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '选/退课记录'
            }
          },
          {
            path: enrlUrl + '/ImportManagement',
            absolutePath: enrlUrl + '/ImportManagement',
            name: 'ImportManagement',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewImportCenterPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '导入管理'
            }
          },
          {
            path: enrlUrl + '/CourseStudentConflict',
            absolutePath: enrlUrl + '/CourseStudentConflict',
            name: 'CourseStudentConflict',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewCourseEnrlConfictCheckPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '冲突检测'
            }
          }
        ]
      },
      {
        path: enrlUrl + '/ManageConsolo',
        absolutePath: enrlUrl + '/ManageConsolo',
        name: 'ManageConsolo',
        x: 4,
        y: 0,
        meta: {
          target: '_blank', 'requireAuth': true,
          iconCls: 'icon-yonghu4',
          permission: ['ViewManageConsoloPage'],
          namespaceCode: 'KR_ENRL',
          pageTitle: '管理台'
        },
        children: [
          {
            path: enrlUrl + '/AdminCategory',
            absolutePath: enrlUrl + '/AdminCategory',
            name: 'AdminCategory',
            redirect: '/AdminCategory',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewAdminCategoryPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '类别'
            },
            children: [
              {
                path: enrlUrl + '/AdminCategory',
                absolutePath: enrlUrl + '/AdminCategory',
                name: 'AdminCategory',
                meta: {
                  target: '_blank', 'requireAuth': true,
                  permission: ['ViewAdminCategoryPage'],
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '类别',
                  hiddenInBreadcrumb: true
                }
              },
              {
                path: enrlUrl + '/AdminWorkFlowCategory',
                absolutePath: enrlUrl + '/AdminWorkFlowCategory',
                name: 'AdminWorkFlowCategory',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewWorkFlowCategoryPage'],
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '工作流类别'
                }
              },
              {
                path: enrlUrl + '/ReasonApplication',
                absolutePath: enrlUrl + '/ReasonApplication',
                name: 'ReasonApplication',
                meta: {
                  target: '_blank', 'requireAuth': true,
                  permission: ['ViewClassTagTypePage'],
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '申请选/退课类别原因'
                }
              }
            ]
          },
          {
            path: enrlUrl + '/AdminPermission',
            absolutePath: enrlUrl + '/AdminPermission',
            name: 'AdminPermission',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewAdminPermissionPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '权限'
            }
          },
          {
            path: enrlUrl + '/AdminRole',
            absolutePath: enrlUrl + '/AdminRole',
            name: 'AdminRole',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewRolePage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '角色' }
          },
          {
            path: enrlUrl + '/AdminUser',
            absolutePath: enrlUrl + '/AdminUser',
            name: 'AdminUser',
            redirect: '/AdminUser',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewUserPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '用户'
            },
            children: [
              {
                path: enrlUrl + '/AdminUser',
                absolutePath: enrlUrl + '/AdminUser',
                name: 'AdminUser',
                meta: {
                  target: '_blank', 'requireAuth': true,
                  permission: ['ViewUserPage'],
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '用户',
                  hiddenInBreadcrumb: true
                }
              },
              {
                path: enrlUrl + '/AdminUpdateUser',
                absolutePath: enrlUrl + '/AdminUpdateUser',
                name: 'AdminUpdateUser',
                meta: {
                  target: '_blank', 'requireAuth': true,
                  permission: ['ViewEditUserPage'],
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '用户编辑'
                }
              }
            ]
          },
          {
            path: enrlUrl + '/AdminWorkManage',
            absolutePath: enrlUrl + '/AdminWorkManage',
            meta: {
              target: '_blank', 'requireAuth': true,
              permission: ['ViewWorkflowPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '工作流'
            }
          },
          {
            path: enrlUrl + '/AdminEditBulletinBoard',
            absolutePath: enrlUrl + '/AdminEditBulletinBoard',
            name: 'AdminEditBulletinBoard',
            redirect: '/AdminEditBulletinBoard',
            meta: {
              target: '_blank',
              'requireAuth': true,
              permission: ['ViewAdminEditBulletinBoardPage'],
              namespaceCode: 'KR_ENRL',
              pageTitle: '公告管理'
            },
            children: [
              {
                path: enrlUrl + '/AdminEditBulletinBoard',
                absolutePath: enrlUrl + '/AdminEditBulletinBoard',
                name: 'AdminEditBulletinBoard',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewAdminEditBulletinBoardPage'],
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '公告管理',
                  hiddenInBreadcrumb: true
                }
              },
              {
                path: enrlUrl + '/AddAdminUserEditBulletinBoard',
                absolutePath: enrlUrl + '/AddAdminUserEditBulletinBoard',
                name: 'AddAdminUserEditBulletinBoard',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewAnnouncementEditPage'],
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '新增公告栏'
                }
              },
              {
                path: enrlUrl + '/AdminUserEditBulletinBoard',
                absolutePath: enrlUrl + '/AdminUserEditBulletinBoard',
                name: 'AdminUserEditBulletinBoard',
                meta: {
                  target: '_blank',
                  'requireAuth': true,
                  permission: ['ViewAnnouncementEditPage'],
                  namespaceCode: 'KR_ENRL',
                  pageTitle: '编辑公告栏'
                }
              }
            ]
          }
        ]
      },
      {
        path: enrlUrl + '/CourseStuSelectionList',
        absolutePath: enrlUrl + '/CourseStuSelectionList',
        name: 'CourseStuSelectionList',
        hidden: true,
        meta: {
          target: '_blank', 'requireAuth': true,
          permission: ['ViewStudenEnrlCourseListPage'],
          namespaceCode: 'KR_ENRL',
          pageTitle: '选课列表'
        }
      },
      {
        path: enrlUrl + '/CourseSelectionApplication',
        absolutePath: enrlUrl + '/CourseSelectionApplication',
        name: 'CourseSelectionApplication',
        hidden: true,
        meta: {
          target: '_blank', 'requireAuth': true,
          permission: ['ViewCourseSelectionApplication'],
          namespaceCode: 'KR_ENRL',
          pageTitle: '特殊选课申请'
        }
      },
      {
        path: enrlUrl + '/enrollCourseDropRuleOuterApply',
        absolutePath: enrlUrl + '/enrollCourseDropRuleOuterApply',
        name: 'CourseDropRuleOuterApply',
        hidden: true,
        meta: {
          target: '_blank', 'requireAuth': true,
          permission: ['ViewCourseDropRuleOuterApplyPage'],
          namespaceCode: 'KR_ENRL',
          pageTitle: '特殊退课申请'
        }
      }
    ]
  }
]
export default {
  name: '选课管理',
  code: 'enroll',
  namespace: 'KR_ENRL',
  icon: 'icon-server_05',
  originRouters: enrollRouterMap
}
