/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
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
}

export default componentsRouter
