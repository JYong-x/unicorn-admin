/**
 * 教改管理系统路由
 */
const trpmsUrl = '/portal'

export const trpmsRouterMap = [
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
        meta: {
          title: '主页',
          icon: 'home',
          hiddenHeaderContent: true,
          hiddenTitleInPage: true
        },
      },
      {
        path: '/ProjectDetails',
        name: 'ProjectDetails',
        hidden: true,
        meta: {
          // requireAuth: true,
          parentName: '',
          title: '项目详情',
          namespace: 'KR_TRPMS',
          // permission: ['ViewProjectDetailsPage'],
          matched: [{ path: '', name: '项目详情' }]
        },
      },
      {
        path: '/Project',
        name: 'Project',
        x: 2,
        y: 1,
        meta: {
          requireAuth: true,
          parentName: '',
          title: '项目',
          icon: 'xiangmu',
          namespace: 'KR_TRPMS',
          permission: ['ViewProjectPage']
        },
        children: [
          {
            path: '/ProjectManagement',
            name: 'ProjectManagement',
            redirect: '/ProjectManagement',
            meta: { title: '项目管理', icon: 'xiangmuguanli', namespace: 'KR_TRPMS', permission: ['ViewProjectManagementPage'] },
            children: [
              {
                path: '/ProjectManagement',
                name: 'ProjectManagement',
                coordinateX: 1,
                coordinateY: 3,
                menuLevel: 2,
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '项目管理',
                  hiddenInBreadcrumb: true,
                  namespace: 'KR_TRPMS',
                  permission: ['ViewProjectManagementPage'],
                  matched: [{ path: '', name: '项目管理' }]
                },
              },
              {
                path: '/ProjectImport',
                name: 'ProjectImport',
                coordinateX: 1,
                coordinateY: 5,
                icon: 'daoru',
                menuLevel: 2,
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '项目导入',
                  namespace: 'KR_TRPMS',
                  permission: ['ViewProjectImportPage'],
                  matched: [{ path: '', name: '项目导入' }]
                },
              }
            ]
          },
          {
            path: '/ProjectChangeManagement',
            name: 'ProjectChangeManagement',
            redirect: '/ProjectChangeManagement',
            meta: { icon: 'change', title: '项目变更管理', namespace: 'KR_TRPMS', permission: ['ViewProjectChangeManagementPage'] },
            children: [
              {
                path: '/ProjectChangeManagement',
                name: 'ProjectChangeManagement',
                coordinateX: 1,
                coordinateY: 4,
                menuLevel: 2,
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '项目变更管理',
                  hiddenInBreadcrumb: true,
                  namespace: 'KR_TRPMS',
                  permission: ['ViewProjectChangeManagementPage'],
                  matched: [{ path: '', name: '项目变更管理' }]
                },
              }
            ]
          }
        ]
      },
      {
        path: '/Expert',
        name: 'Expert',
        x: 3,
        y: 1,
        meta: {
          requireAuth: true,
          parentName: '',
          icon: 'zhaopin',
          title: '专家评价管理',
          namespace: 'KR_TRPMS',
          permission: ['ViewExpertPage']
        },
        children: [
          {
            path: '/EvaluateStandard',
            name: 'EvaluateStandard',
            redirect: '/EvaluateStandard',
            meta: { title: '评价指标', namespace: 'KR_TRPMS', permission: ['ViewEvaluateStandardPage'] },
            children: [
              {
                path: '/EvaluateStandard',
                name: 'EvaluateStandard',
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '评价指标',
                  hiddenInBreadcrumb: true,
                  namespace: 'KR_TRPMS',
                  permission: ['ViewEvaluateStandardPage'],
                  matched: [{ path: '', name: '评价指标' }]
                },
              }
            ]
          },
          {
            path: '/ExpertReviewBatch',
            name: 'ExpertReviewBatch',
            redirect: '/ExpertReview',
            meta: { title: '专家评审批次', namespace: 'KR_TRPMS', permission: ['ViewExpertReviewBatchPage'] },
            children: [
              {
                path: '/ExpertReviewBatch',
                name: 'ExpertReviewBatch',
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '专家评审批次',
                  hiddenInBreadcrumb: true,
                  namespace: 'KR_TRPMS',
                  permission: ['ViewExpertReviewBatchPage']
                },
              },
              {
                path: '/ExpertReviewBatchDetails',
                name: 'ExpertReviewBatchDetails',
                meta: {
                  // requireAuth: true,
                  parentName: '',
                  title: '专家评审批次详情',
                  namespace: 'KR_TRPMS'
                  // permission: ['ViewExpertReviewBatchDetailsPage']
                },
              }
            ]
          },
          {
            path: '/ExpertReview',
            name: 'ExpertReview',
            redirect: '/ExpertReview',
            meta: { title: '专家评审', namespace: 'KR_TRPMS', permission: ['ViewExpertReviewPage'] },
            children: [
              {
                path: '/ExpertReview',
                name: 'ExpertReview',
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '专家评审',
                  hiddenInBreadcrumb: true,
                  namespace: 'KR_TRPMS',
                  permission: ['ViewExpertReviewPage'],
                  matched: [{ path: '', name: '专家评审' }]
                },
              }
            ]
          }
        ]
      },
      {
        path: '/ManageConsolo',
        name: 'ManageConsolo',
        x: 4,
        y: 1,
        meta: {
          icon: 'guanli',
          title: '管理台',
          requireAuth: true,
          permission: ['ViewManageConsoloPage'],
          namespace: 'KR_TRPMS'
        },
        children: [
          {
            path: '/Category',
            name: 'Category',
            redirect: '/Category',
            meta: {
              title: '类别',
              permission: ['ViewCategoryPage'],
              namespace: 'KR_TRPMS',
              matched: [{ path: '', name: '类别' }]
            },
            children: [
              {
                path: '/Category',
                name: 'Category',
                coordinateX: 4,
                coordinateY: 2,
                menuLevel: 2,
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '类别',
                  hiddenInBreadcrumb: true,
                  permission: ['ViewCategoryPage'],
                  namespace: 'KR_TRPMS',
                  matched: [{ path: '', name: '类别' }]
                },
              },
              {
                path: '/ItemCategory',
                name: 'ItemCategory',
                redirect: '/ItemCategory',
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '项目类别',
                  namespace: 'KR_TRPMS',
                  permission: ['ViewItemCategoryPage'],
                  matched: [{ path: '/Category', name: '类别' }, { path: '', name: '项目类别' }]
                },
                children: [
                  {
                    path: '/ItemCategory',
                    name: 'ItemCategory',
                    meta: {
                      requireAuth: true,
                      parentName: '',
                      title: '项目类别',
                      hiddenInBreadcrumb: true,
                      namespace: 'KR_TRPMS',
                      permission: ['ViewItemCategoryPage'],
                      matched: [{ path: '/Category', name: '类别' }, { path: '', name: '项目类别' }]
                    },
                  },
                  {
                    path: '/AddItemCategory',
                    name: 'AddItemCategory',
                    meta: {
                      requireAuth: true,
                      parentName: '',
                      namespace: 'KR_TRPMS',
                      title: '添加项目类别',
                      permission: ['ViewAddItemCategoryPage'],
                      matched: [{ path: '/Category', name: '类别' }, { path: '/ItemCategory', name: '项目类别' }, { path: '', name: '添加项目类别' }]
                    },
                  },
                  {
                    path: '/EditItemCategory',
                    name: 'EditItemCategory',
                    meta: {
                      requireAuth: true,
                      parentName: '',
                      namespace: 'KR_TRPMS',
                      title: '编辑项目类别',
                      permission: ['ViewAddItemCategoryPage'],
                      matched: [{ path: '/Category', name: '类别' }, { path: '/ItemCategory', name: '项目类别' }, { path: '', name: '编辑项目类别' }]
                    },
                  }
                ]
              },
              {
                path: '/StageCategory',
                name: 'StageCategory',
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '阶段类别',
                  namespace: 'KR_TRPMS',
                  permission: ['ViewStageCategoryPage'],
                  matched: [{ path: '/Category', name: '类别' }, { path: '', name: '阶段类别' }]
                },
              },
              {
                path: '/ProjectWorkflow',
                name: 'ProjectWorkflow',
                redirect: '/ProjectWorkflow',
                meta: {
                  parentName: '',
                  title: '项目工作流',
                  namespace: 'KR_TRPMS',
                  matched: [{ path: '/Category', name: '类别' }, { path: '', name: '项目工作流' }]
                },
                children: [
                  {
                    path: '/ProjectWorkflow',
                    name: 'ProjectWorkflow',
                    meta: {
                      parentName: '',
                      title: '项目工作流',
                      hiddenInBreadcrumb: true,
                      namespace: 'KR_TRPMS',
                      matched: [{ path: '/Category', name: '类别' }, { path: '', name: '项目工作流' }]
                    }
                  }
                ]
              }
            ]
          },
          {
            path: '/AdminPermission',
            name: 'AdminPermission',
            redirect: '/AdminPermission',
            meta: {
              title: '权限',
              namespace: 'KR_TRPMS',
              permission: ['ViewAdminPermissionPage'],
              matched: [{ path: '', name: '权限' }]
            },
            children: [
              {
                path: '/AdminPermission',
                name: 'AdminPermission',
                meta: {
                  title: '权限',
                  hiddenInBreadcrumb: true,
                  namespace: 'KR_TRPMS',
                  permission: ['ViewAdminPermissionPage'],
                  matched: [{ path: '', name: '权限' }]
                },
              }
            ]
          },
          {
            path: '/AdminRole',
            name: 'AdminRole',
            redirect: '/AdminRole',
            meta: {
              title: '角色',
              permission: ['ViewAdminRolePage'],
              namespace: 'KR_TRPMS',
              matched: [{ path: '', name: '角色' }]
            },
            children: [
              {
                path: '/AdminRole',
                name: 'AdminRole',
                meta: {
                  parentName: '',
                  title: '角色',
                  hiddenInBreadcrumb: true,
                  requireAuth: true,
                  permission: ['ViewAdminRolePage'],
                  namespace: 'KR_TRPMS',
                  matched: [{ path: '', name: '角色' }]
                },
              }
            ]
          },
          {
            path: '/AdminUser',
            name: 'AdminUser',
            redirect: '/AdminUser',
            meta: {
              title: '用户',
              namespace: 'KR_TRPMS',
              permission: ['ViewAdminUserPage'],
              matched: [{ path: '', name: '用户' }]
            },
            children: [
              {
                path: '/AdminUser',
                name: 'AdminUser',
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '用户',
                  hiddenInBreadcrumb: true,
                  namespace: 'KR_TRPMS',
                  permission: ['ViewAdminUserPage'],
                  matched: [{ path: '', name: '用户' }]
                },
              },
              {
                path: '/AdminUpdateUser',
                name: 'AdminUpdateUser',
                meta: {
                  requireAuth: true,
                  parentName: '',
                  title: '用户编辑',
                  namespace: 'KR_TRPMS',
                  permission: ['ViewAdminUpdateUserPage'],
                  matched: [{ path: '/AdminUser', name: '用户' }, { path: '', name: '用户编辑' }]
                },
              }
            ]
          },
          {
            path: '/ProjectBatch',
            name: 'ProjectBatch',
            redirect: '/ProjectBatch',
            meta: {
              title: '项目批次',
              permission: ['ViewProjectBatchPage'],
              namespace: 'KR_TRPMS',
              matched: [{ path: '', name: '项目批次' }]
            },
            children: [
              {
                path: '/ProjectBatch',
                name: 'ProjectBatch',
                meta: {
                  parentName: '',
                  title: '项目批次',
                  hiddenInBreadcrumb: true,
                  requireAuth: true,
                  permission: ['ViewProjectBatchPage'],
                  namespace: 'KR_TRPMS',
                  matched: [{ path: '', name: '项目批次' }]
                },
              },
              {
                path: '/AddProjectBatch',
                name: 'AddProjectBatch',
                meta: {
                  // requireAuth: true,
                  parentName: '',
                  namespace: 'KR_TRPMS',
                  title: '添加项目批次',
                  // permission: ['ViewAddProjectBatchPage'],
                  matched: [{ path: '/ProjectBatch', name: '项目批次' }, { path: '', name: '添加项目批次' }]
                },
              },
              {
                path: '/EditProjectBatch',
                name: 'EditProjectBatch',
                meta: {
                  // requireAuth: true,
                  parentName: '',
                  namespaceCode: 'KR_TRPMS',
                  title: '编辑项目批次',
                  // permission: ['ViewAddProjectBatchPage'],
                  matched: [{ path: '/ProjectBatch', name: '项目批次' }, { path: '', name: '编辑项目批次' }]
                },
              }
            ]
          },
          {
            path: '/OffCampusStaff',
            name: 'OffCampusStaff',
            redirect: '/OffCampusStaff',
            meta: {
              title: '校外人员',
              permission: ['ViewOffCampusStaffPage'],
              namespaceCode: 'KR_TRPMS',
              matched: [{ path: '', name: '校外人员' }]
            },
            children: [
              {
                path: '/OffCampusStaff',
                name: 'OffCampusStaff',
                meta: {
                  title: '校外人员',
                  hiddenInBreadcrumb: true,
                  requireAuth: true,
                  permission: ['ViewOffCampusStaffPage'],
                  namespaceCode: 'KR_TRPMS',
                  matched: [{ path: '', name: '校外人员' }]
                },
              }
            ]
          },
          {
            path: '/AnnouncementManagement',
            name: 'AnnouncementManagement',
            redirect: '/AnnouncementManagement',
            meta: {
              title: '公告管理',
              requireAuth: true,
              permission: ['ViewAnnouncementManagementPage'],
              namespaceCode: 'KR_TRPMS',
              matched: [{ path: '', name: '公告管理' }]
            },
            children: [
              {
                path: '/AnnouncementManagement',
                name: 'AnnouncementManagement',
                meta: {
                  title: '公告管理',
                  hiddenInBreadcrumb: true,
                  requireAuth: true,
                  permission: ['ViewAnnouncementManagementPage'],
                  namespaceCode: 'KR_TRPMS',
                  matched: [{ path: '', name: '公告管理' }]
                },
              },
              {
                path: '/EditAnnouncement',
                name: 'EditAnnouncement',
                meta: {
                  title: '公告编辑',
                  requireAuth: true,
                  permission: ['ViewEditAnnouncementPage'],
                  namespaceCode: 'KR_TRPMS',
                  matched: [{ path: '/AnnouncementManagement', name: '公告管理' }, { path: '', name: '公告编辑' }]
                },
              },
              {
                path: '/CheckAnnouncement',
                name: 'CheckAnnouncement',
                meta: {
                  title: '公告详情',
                  requireAuth: true,
                  permission: ['ViewCheckAnnouncementPage'],
                  namespaceCode: 'KR_TRPMS',
                  matched: [{ path: '/AnnouncementManagement', name: '公告管理' }, { path: '', name: '公告详情' }]
                },
              }
            ]
          },
          {
            path: '/NotificationFunction',
            name: 'NotificationFunction',
            redirect: '/NotificationFunction',
            meta: {
              title: '通知功能',
              requireAuth: true,
              permission: ['ViewNotificationFunctionPage'],
              namespaceCode: 'KR_TRPMS',
              matched: [{ path: '', name: '通知功能' }]
            },
            children: [
              {
                path: '/NotificationFunction',
                name: 'NotificationFunction',
                meta: {
                  title: '通知功能',
                  hiddenInBreadcrumb: true,
                  requireAuth: true,
                  permission: ['ViewNotificationFunctionPage'],
                  namespaceCode: 'KR_TRPMS',
                  matched: [{ path: '', name: '通知功能' }]
                },
              }
            ]
          }
        ]
      },
      {
        path: '/ViewPdf',
        name: 'ViewPdf',
        hidden: true,
        meta: {
          title: '浏览pdf',
          namespaceCode: 'KR_TRPMS',
          matched: [{ path: '', name: '浏览pdf' }]
        },
      }
    ]
  },
]

export default {
  name: '教学项目管理',
  code: 'trpms',
  namespace: 'KR_TRPMS',
  icon: 'kechengguanli',
  baseUrl: '/trpms',
  originRouters: trpmsRouterMap
}
