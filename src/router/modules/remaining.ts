const Layout = () => import('@/layout/Layout.vue')

const remainingRouter: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    name: 'NewLayout',
    meta: {},
  },
]

export default remainingRouter
