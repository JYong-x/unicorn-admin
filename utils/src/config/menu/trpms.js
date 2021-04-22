/**
 * 教改管理系统路由
 */
const subUrl = '/trpms/portal'

export const routerMap = [
  {
    path: subUrl + '/Home',
    name: 'Home',
    x: 1,
    y: 1,
    icon: 'fa fa-home',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '主页',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl + '/ManageConsolo',
    name: 'ManageConsolo',
    x: 4,
    y: 1,
    icon: 'icon-xiangmuguanli',
    menuLevel: 1,
    meta: {
      target: '_blank',
      title: '管理台',
      requireAuth: true,
      permission: ['ViewManageConsoloPage'],
      namespace: 'KR_TRPMS',
      matched: [{ path: '', name: '' }]
    }
  },
  {
    path: subUrl + '/OffCampusStaff',
    name: 'OffCampusStaff',
    x: 4,
    y: 6,
    icon: 'icon-shuangren',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '校外人员',
      requireAuth: true,
      permission: ['ViewOffCampusStaffPage'],
      namespace: 'KR_TRPMS',
      matched: [{ path: '', name: '校外人员' }]
    }
  },
  {
    path: subUrl + '/AnnouncementManagement',
    name: 'AnnouncementManagement',
    x: 4,
    y: 7,
    icon: 'icon-xiugai4',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '公告管理',
      requireAuth: true,
      permission: ['ViewAnnouncementManagementPage'],
      namespace: 'KR_TRPMS',
      matched: [{ path: '', name: '公告管理' }]
    }
  },
  {
    path: subUrl + '/NotificationFunction',
    name: 'NotificationFunction',
    x: 4,
    y: 8,
    icon: 'icon-tongzhi_',
    menuLevel: 2,
    meta: {
      target: '_blank',
      title: '通知功能',
      requireAuth: true,
      permission: ['ViewNotificationFunctionPage'],
      namespace: 'KR_TRPMS',
      matched: [{ path: '', name: '通知功能' }]
    }
  },
  {
    path: '',
    name: 'EntryScore',
    icon: 'icon-jindu14',
    meta: {
      target: '_blank',
      requireAuth: true,
      permission: ['ViewDataPreparationPage'],
      namespace: 'KR_TRPMS',
      title: ''
    }
  },
  {
    path: subUrl + '/Category',
    name: 'Category',
    x: 4,
    y: 2,
    icon: 'icon-msnui-module',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '类别',
      permission: ['ViewCategoryPage'],
      namespace: 'KR_TRPMS',
      matched: [{ path: '', name: '类别' }]
    }
  },
  {
    path: subUrl + '/AdminPermission',
    name: 'AdminPermission',
    x: 4,
    y: 3,
    icon: 'icon-zhaopin',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '权限',
      namespace: 'KR_TRPMS',
      permission: ['ViewAdminPermissionPage'],
      matched: [{ path: '', name: '权限' }]
    }
  },
  {
    path: subUrl + '/AdminRole',
    name: 'AdminRole',
    x: 4,
    y: 4,
    icon: 'icon-iconfont-jiaoshi',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '',
      title: '角色',
      requireAuth: true,
      permission: ['ViewAdminRolePage'],
      namespace: 'KR_TRPMS',
      matched: [{ path: '', name: '角色' }]
    }
  },
  {
    path: subUrl + '/AdminUser',
    name: 'AdminUser',
    x: 4,
    y: 5,
    icon: 'icon-yonghu',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '用户',
      namespace: 'KR_TRPMS',
      permission: ['ViewAdminUserPage'],
      matched: [{ path: '', name: '用户' }]
    }
  },
  {
    path: subUrl + '/ProjectBatch',
    name: 'ProjectBatch',
    x: 4,
    y: 5,
    icon: 'icon-xiangmu2',
    menuLevel: 2,
    meta: {
      target: '_blank',
      parentName: '',
      title: '项目批次',
      requireAuth: true,
      permission: ['ViewProjectBatchPage'],
      namespace: 'KR_TRPMS',
      matched: [{ path: '', name: '项目批次' }]
    }
  },
  {
    path: subUrl + '/Expert',
    name: 'Expert',
    x: 2,
    y: 1,
    icon: 'icon-zhaopin',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '专家评价管理',
      namespace: 'KR_TRPMS',
      permission: ['ViewExpertPage'],
      matched: [{ path: '', name: '专家评价管理' }]
    }
  },
  {
    path: subUrl + '/ExpertReviewBatch',
    name: 'ExpertReviewBatch',
    x: 2,
    y: 3,
    icon: 'icon-xiangmu2',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '专家评审批次',
      namespace: 'KR_TRPMS',
      permission: ['ViewExpertReviewBatchPage'],
      matched: [{ path: '', name: '专家评审批次' }]
    }
  },
  {
    path: subUrl + '/ExpertReview',
    name: 'ExpertReview',
    x: 2,
    y: 4,
    icon: 'icon-confirm',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '专家评审',
      namespace: 'KR_TRPMS',
      permission: ['ViewExpertReviewPage'],
      matched: [{ path: '', name: '专家评审' }]
    }
  },
  {
    path: subUrl + '/EvaluateStandard',
    name: 'EvaluateStandard',
    x: 2,
    y: 2,
    icon: 'icon-pingjia5',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '评价指标',
      namespace: 'KR_TRPMS',
      permission: ['ViewEvaluateStandardPage'],
      matched: [{ path: '', name: '评价指标' }]
    }
  },
  {
    path: subUrl + '/Project',
    name: 'Project',
    x: 1,
    y: 2,
    icon: 'icon-xiangmu2',
    menuLevel: 1,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '项目',
      namespace: 'KR_TRPMS',
      permission: ['ViewProjectPage'],
      matched: [{ path: '', name: '项目' }]
    }
  },
  {
    path: subUrl + '/ProjectManagement',
    name: 'ProjectManagement',
    x: 1,
    y: 3,
    icon: 'icon-xiangmuguanli',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '项目管理',
      namespace: 'KR_TRPMS',
      permission: ['ViewProjectManagementPage'],
      matched: [{ path: '', name: '项目管理' }]
    }
  },
  {
    path: subUrl + '/ProjectChangeManagement',
    name: 'ProjectChangeManagement',
    x: 1,
    y: 4,
    icon: 'icon-change',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '项目变更管理',
      namespace: 'KR_TRPMS',
      permission: ['ViewProjectChangeManagementPage'],
      matched: [{ path: '', name: '项目变更管理' }]
    }
  },
  {
    path: subUrl + '/ProjectImport',
    name: 'ProjectImport',
    x: 1,
    y: 5,
    icon: 'icon-daoru1',
    menuLevel: 2,
    meta: {
      target: '_blank',
      requireAuth: true,
      parentName: '',
      title: '项目导入',
      namespace: 'KR_TRPMS',
      permission: ['ViewProjectImportPage'],
      matched: [{ path: '', name: '项目导入' }]
    }
  }
]

export default {
  name: '教学项目管理',
  code: 'trpms',
  namespace: 'KR_TRPMS',
  icon: 'icon-kechengguanli',
  originRouters: routerMap
}
