import { AppstoreOutlined, DesktopOutlined, MailOutlined } from '@ant-design/icons'
import { lazy } from 'react'
import { Link, Navigate } from 'react-router-dom'
import AdminLayout from '../layouts'
import NotFound from './not-found'
import NotAuth from './not-auth'

type MenuRoute = {
  name?: string
  path: string
  icon?: React.ReactNode
  auth?: boolean
  hideInMenu?: boolean
  index?: boolean
  element?: React.ReactNode
  children?: MenuRoute[]
}

type RoutesType = Pick<MenuRoute, 'path' | 'element'> & {
  children?: RoutesType[]
}

type MenuItem = {
  key: string
  icon?: React.ReactNode
  label: string | React.ReactNode
  children?: MenuItem[]
}

type BreadcrumbMap<T extends MenuRoute> = Record<T['path'], T['name']>

// https://legacy.reactjs.org/docs/code-splitting.html#route-based-code-splitting
const Home = lazy(() => import('@/pages/home'))
const OrderList = lazy(() => import('@/pages/order/list'))
const OrderDetail = lazy(() => import('@/pages/order/detail'))
const Phone = lazy(() => import('@/pages/product/phone'))
const Gold = lazy(() => import('@/pages/product/luxury/gold'))

const menuRoutes: MenuRoute[] = [
  {
    path: '/',
    element: <Navigate replace to="/home" />
  },
  {
    path: '/',
    element: <AdminLayout />, // layout应该不需要lazyload
    children: [
      {
        name: '首页',
        path: '/home',
        icon: <DesktopOutlined />,
        element: <Home />
      },
      {
        name: '订单',
        path: '/order',
        icon: <MailOutlined />,
        children: [
          {
            name: '列表',
            path: '/order/list',
            element: <OrderList />
          },
          {
            name: '详情',
            auth: false,
            path: '/order/detail',
            hideInMenu: true,
            element: <OrderDetail />
          }
        ]
      },
      {
        name: '物品',
        path: '/product',
        icon: <AppstoreOutlined />,
        children: [
          {
            index: true,
            name: '手机',
            path: '/product/phone',
            element: <Phone />
          },
          {
            name: '奢侈品',
            path: '/product/scp',
            children: [
              {
                name: '黄金',
                path: '/product/scp/gold',
                element: <Gold />
              }
            ]
          }
        ]
      }
    ]
  },
  { path: '*', element: <NotFound /> }
]

// extract MenuItems for antd Menu
// extract breadcrumbNameMap for antd Breadcrumb
const extractMenuItems = (menuRoutes: MenuRoute[] = []) => {
  const breadcrumbNameMap: BreadcrumbMap<MenuRoute> = {}

  const recurExtractMenuItems = (menuRoutes: MenuRoute[], menuItems: MenuItem[]) => {
    if (menuRoutes?.length) {
      menuRoutes.forEach((item: MenuRoute) => {
        const { name, path, icon, hideInMenu, children } = item
        breadcrumbNameMap[path] = name as string
        if (!hideInMenu) {
          menuItems.push({
            key: path,
            icon: icon,
            label: children?.length ? name : <Link to={path}>{name}</Link>,
            ...(children?.length
              ? {
                  children: recurExtractMenuItems(children, [])
                }
              : {})
          })
        }
      })
    }
    return menuItems
  }
  const menuItems = recurExtractMenuItems(menuRoutes, [])
  return { menuItems, breadcrumbNameMap }
}

// extract routes for react-router6
const extractRoutes = (menuRoutes: MenuRoute[]) => {
  const recurExtractRoutes = (menuRoutes: MenuRoute[], routes: RoutesType[]) => {
    if (menuRoutes?.length) {
      menuRoutes.forEach((item: MenuRoute) => {
        const { path, auth, element, children } = item
        routes.push({
          // index,
          path,
          element: auth !== false ? element : <NotAuth />,
          ...(children?.length
            ? {
                children: recurExtractRoutes(children, [])
              }
            : {})
        })
      })
    }
    return routes
  }
  return recurExtractRoutes(menuRoutes, [])
}

const { menuItems, breadcrumbNameMap } = extractMenuItems(menuRoutes[1]?.children)
console.log('menuItems', menuItems, 'breadcrumbNameMap', breadcrumbNameMap)
const routes = extractRoutes(menuRoutes)
console.log('routes', routes)

export { routes, menuItems, breadcrumbNameMap }
