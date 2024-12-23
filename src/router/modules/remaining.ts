const Layout = () => import('@/layout/Layout.vue')

const remainingRouter: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/crawler',
    component: Layout,
    meta: {},
    children: [
      {
        path: '/crawler',
        name: 'Crawler',
        component: () => import('@/views/crawler/index.vue'),
        meta: {},
      },
    ]
  },
  {
    path: '/vlog',
    name: 'Vlog',
    component: Layout,
    meta: {},
  },
]

export default remainingRouter
