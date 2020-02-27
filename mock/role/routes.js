// Just a mock data

export const constantRoutes = [
  {
    path: '/redirect',
    component: 'layout/Layout',
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: 'views/redirect/index'
      }
    ]
  },
  {
    path: '/login',
    component: 'views/login/index',
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: 'views/login/auth-redirect',
    hidden: true
  },
  {
    path: '',
    component: 'layout/Layout',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: 'views/dashboard/index',
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/components',
    component: 'layout/Layout',
    redirect: 'noRedirect',
    name: 'ComponentDemo',
    meta: {
      title: 'Components',
      icon: 'component'
    },
    children: [
      {
        path: 'frame',
        component: () => new Promise((resolve, reject) => {
          import(`@/components/Frame`).then(({ default: model }) => {
            model.props.link.default = 'https://cn.vuejs.org'
            resolve(model)
          }).catch(error => {
            reject(error)
          })
        }),
        name: 'FrameDemo',
        meta: { title: 'Frame' }
      },
      {
        path: 'frame2',
        component: () => new Promise((resolve, reject) => {
          import(`@/components/Frame`).then(({ default: model }) => {
            model.props.link.default = 'https://www.baidu.com'
            resolve(model)
          }).catch(error => {
            reject(error)
          })
        }),
        name: 'FrameDemo2',
        meta: { title: 'Frame2' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]
