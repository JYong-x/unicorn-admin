/**
 * 排考权限路由
 * @type { *[] }
 */

export const examRouters = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: BasicLayout,
    meta: { title: '主页' },
    children: [
      {
        path: '/home',
        name: 'Home',
        x: 1,
        y: 1,
        meta: { title: '主页', icon: 'icon-zhuye', keepAlive: true, hiddenHeaderContent: true },
        component: () => import('@/views/home/home'),
        children: [
        ]
      },
      {
        path: '/preferences',
        name: 'Preferences',
        x: 1,
        y: 1,
        meta: { title: '参数设置', icon: 'icon-xiangmuguanli', permission: ['ViewPreferencesPage'] },
        component: RouteView,
        children: [
          {
            path: '/exam-set',
            name: 'ExamSet',
            meta: { title: '排考参数', permission: ['ViewExamSetPage'] },
            component: () => import('@/views/examSet/exam-set')
          },
          {
            path: '/session-info',
            name: 'SessionInfo',
            meta: { title: '学期信息', permission: ['ViewSessionInfoPage'] },
            component: () => import('@/views/sessionInfo/session-info')
          },
          {
            path: '/exam-stage',
            name: 'ExamStage',
            meta: { title: '考次信息', permission: ['ViewExamStagePage'] },
            component: () => import('@/views/examStage/exam-stage')
          },
          {
            path: '/lock-free-classrooms',
            name: 'lock-free-classrooms',
            meta: { title: '锁定空闲教室', permission: ['ViewLockFreeClassroomsPage'] },
            component: () => import('@/views/lockFreeClassrooms/lock-free-classrooms')
          },
          {
            path: '/resource',
            name: 'Resource',
            meta: { title: '资源管理', permission: ['ViewResourcePage'] },
            component: () => import('@/views/resource/resource')
          }
        ]
      },
      {
        path: '/ExamTask',
        name: 'ExamTask',
        x: 2,
        y: 1,
        meta: { title: '排考管理', icon: 'icon-xiangmuguanli', permission: ['ViewExamTaskPage'] },
        component: RouteView,
        children: [
          {
            path: '/exam-task-management',
            name: 'exam-task-management',
            meta: { title: '考试任务管理', permission: ['ViewExamTaskManagementPage'] },
            component: RouteView,
            children: [
              {
                path: '/exam-task-management',
                name: 'exam-task-management',
                meta: { title: '考试任务管理', keepAlive: true, hiddenInBreadcrumb: true },
                component: () => import('@/views/examTaskManagement/exam-task-management')
              },
              {
                path: '/batch-exam-task-management',
                name: 'batch-exam-task-management',
                meta: { title: '批量安排监考教师', hiddenTitleInPage: true },
                component: () => import('@/views/batchEditExaminationRoomInfo/batch-edit-examination-room-info')
              }
            ]
          },

          {
            path: '/tour-teacher-set',
            name: 'tour-teacher-set',
            meta: { title: '巡考教师设置', permission: ['ViewTourTeacherSetPage'], keepAlive: true },
            component: () => import('@/views/tourTeacherSet/tour-teacher-set')
          }
        ]
      },
      {
        path: '/applyPostponement',
        name: 'applyPostponement',
        x: 2,
        y: 2,
        meta: { title: '缓考管理', permission: ['ViewPostManagementPage'], icon: 'icon-xiangmuguanli' },
        component: RouteView,
        children: [
          {
            path: '/apply-postponement',
            name: 'apply-postponement',
            meta: { title: '缓考申请', permission: ['ViewApplyPostponementPage'], keepAlive: true },
            component: () => import('@/views/applyPostponement/apply-postponement')
          },
          {
            path: '/postponement-management',
            name: 'postponement-management',
            meta: { title: '缓考管理', permission: ['ViewPostponementManagementPage'], keepAlive: true },
            component: () => import('@/views/postponementManagement/postponement-management')
          }
        ]
      },
      {
        path: '/violationDiscipline',
        name: 'violationDiscipline',
        x: 2,
        y: 3,
        meta: { title: '违纪', permission: ['ViewViolationManagementPage'], icon: 'icon-xiangmuguanli' },
        component: RouteView,
        children: [
          {
            path: '/violation-management',
            redirect: '/violation-management',
            meta: { title: '违纪管理', permission: ['ViewViolationManagementPage'] },
            component: RouteView,
            children: [
              {
                path: '/violation-management',
                name: 'violation-management',
                meta: { title: '违纪管理',
                  permission: ['ViewViolationManagementPage'], keepAlive: true, hiddenInBreadcrumb: true },
                component: () => import('@/views/violationManagement/violation-management')
              },
              {
                path: '/disciplinary-registration',
                name: 'disciplinary-registration',
                meta: { title: '违纪登记' },
                component: () => import('@/views/disciplinaryRegistration/disciplinary-registration')
              }
            ]
          },
          {
            path: '/disciplinary-apply',
            redirect: '/disciplinary-apply',
            meta: { title: '违纪申请', permission: ['ViewDisciplinaryApplyPage'] },
            component: RouteView,
            children: [
              {
                path: '/disciplinary-apply',
                name: 'disciplinary-apply',
                meta: { title: '违纪申请',
                  permission: ['ViewDisciplinaryApplyPage'], keepAlive: true, hiddenInBreadcrumb: true },
                component: () => import('@/views/disciplinaryApplication/disciplinary-apply')
              },
              {
                path: '/discipline-registration',
                name: 'discipline-registration',
                meta: { title: '违纪登记' },
                component: () => import('@/views/disciplinaryRegistration/disciplinary-registration')
              },
              {
                path: '/view-discipline-registration',
                name: '/view-discipline-registration',
                meta: { title: '查看违纪登记' },
                component: () => import('@/views/disciplinaryRegistration/disciplinary-registration')
              }
            ]
          }
        ]
      },
      {
        path: '/QueryStats',
        name: 'QueryStats',
        x: 3,
        y: 1,
        meta: { title: '查询统计', icon: 'icon-xiangmuguanli', permission: ['ViewQueryStatsPage'] },
        component: RouteView,
        children: [
          {
            path: '/classroom-arrangement-query',
            name: 'classroom-arrangement-query',
            meta: { title: '教室安排查询', permission: ['ViewClassroomArrangementQueryPage'] },
            component: () => import('@/views/classroomArrangementQuery/classroom-arrangement-query')
          },
          {
            path: '/exam-table-query',
            name: 'exam-table-query',
            meta: { title: '考表查询', permission: ['ViewExamTableQueryPage'] },
            component: () => import('@/views/examTableQuery/exam-table-query')
          },
          {
            path: '/invigilation-query',
            name: 'invigilation-query',
            meta: { title: '监考查询', permission: ['ViewInvigilationQueryPage'] },
            component: () => import('@/views/invigilationQuery/invigilation-query')
          },
          {
            path: '/patrol-test-query',
            name: 'patrol-test-query',
            meta: { title: '巡考查询', permission: ['ViewPatrolTestQueryPage'] },
            component: () => import('@/views/patrolTestQuery/patrol-test-query')
          }
        ]
      },
      {
        path: '/admin',
        name: 'Admin',
        x: 4,
        y: 1,
        meta: { title: '管理台', icon: 'icon-xitongguanli', permission: ['ViewAdminPage'] },
        component: RouteView,
        children: [
          {
            path: '/permission',
            name: 'Permission',
            meta: { title: '权限', permission: ['ViewPermissionPage'] },
            component: () => import('@/views/admin/permission/permission')
          },
          {
            path: '/role',
            name: 'Role',
            meta: { title: '角色', permission: ['ViewRolePage'] },
            component: () => import('@/views/admin/role/role')
          },
          {
            path: '/users',
            redirect: '/users',
            meta: { title: '用户', permission: ['ViewUsersPage'] },
            component: RouteView,
            children: [
              {
                path: '/users',
                name: 'Users',
                meta: { title: '用户', hiddenInBreadcrumb: true },
                component: () => import('@/views/admin/users/users')
              },
              {
                path: '/edit-user',
                name: 'EditUser',
                meta: { title: '用户编辑', hiddenInBreadcrumb: true },
                component: () => import('@/views/admin/users/edit-user')
              }
            ]
          },
          {
            path: '/workflow',
            name: 'Workflow',
            meta: { title: '工作流', permission: ['ViewWorkflowPage'] },
            component: () => import('@/views/admin/workflow-manage/workflow-manage')
          },
          {
            path: '/time',
            name: 'Time',
            meta: { title: '时间', permission: ['ViewTimePage'] },
            component: () => import('@/views/admin/time/time')
          },
          {
            path: '/category',
            name: 'category',
            redirect: '/category',
            meta: { title: '类别', permission: ['ViewCategoryPage'] },
            hiddenChildrenInMenu: true,
            component: RouteView,
            children: [
              {
                path: '/category',
                name: 'Category',
                meta: { title: '类别', permission: ['ViewCategoryPage'], hiddenInBreadcrumb: true },
                component: () => import('@/views/admin/category/category')
              },
              {
                path: 'exam',
                name: 'Exam',
                meta: { title: '考试类别', permission: ['ViewExamPage'] },
                component: () => import('@/views/admin/category/exam/exam')
              },
              {
                path: 'defer',
                name: 'Defer',
                meta: { title: '缓考申请原因', permission: ['ViewDeferPage'] },
                component: () => import('@/views/admin/category/defer/defer')
              },
              {
                path: 'disciplinary',
                name: 'Disciplinary',
                meta: { title: '违纪类型', permission: ['ViewDisciplinaryPage'] },
                component: () => import('@/views/admin/category/disciplinary/disciplinary')
              }
            ]
          },
          {
            path: '/announcement',
            redirect: '/announcement',
            meta: { title: '公告管理', permission: ['ViewAnnouncementPage'] },
            component: RouteView,
            hiddenChildrenInMenu: true,
            children: [
              {
                path: '/announcement',
                name: 'Announcement',
                meta: { title: '公告管理', hiddenInBreadcrumb: true },
                component: () => import('@/views/admin/announcement/announcement')
              },
              {
                path: '/announcement-edit',
                name: 'AnnouncementEdit',
                meta: { title: '公告编辑' },
                component: () => import('@/views/admin/announcement/announcement-edit')
              }
            ]
          }
        ]
      }
    ]
  }
]

export default {
  name: '排考管理',
  code: 'exam',
  namespace: 'KR_EXAM',
  icon: 'kaoshi1',
  baseUrl: `/exm`,
  originRouters: examRouters
}
