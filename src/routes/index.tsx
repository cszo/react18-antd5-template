import { lazy } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { AppstoreOutlined, DesktopOutlined, MailOutlined, TableOutlined } from '@ant-design/icons'

import LoginPage from '@/pages/login'
import AdminLayout from '@/layouts'

import { NotFound, NotAuth } from './exception'
import { checkAuth } from './auth'

import { MenuRoute, RoutesType, MenuItem, BreadcrumbMap } from './interface'

// https://legacy.reactjs.org/docs/code-splitting.html#route-based-code-splitting
const Home = lazy(() => import('@/pages/home'))
const OrderList = lazy(() => import('@/pages/order/list'))
const OrderDetail = lazy(() => import('@/pages/order/detail'))
const Phone = lazy(() => import('@/pages/product/phone'))
const Gold = lazy(() => import('@/pages/product/luxury/gold'))

// table
const TablePro = lazy(() => import('@/pages/table/table-pro'))
const TableAntd = lazy(() => import('@/pages/table/table-antd'))
const TableAhook = lazy(() => import('@/pages/table/table-ahook'))

const menuRoutes: MenuRoute[] = [
  {
    path: '/',
    element: <Navigate replace to="/home" />
  },
  {
    path: '/',
    loader: checkAuth,
    element: <AdminLayout />, // layout应该不需要lazyload 后续考虑SSR?
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
      },
      {
        name: '表格',
        path: '/table',
        icon: <TableOutlined />,
        children: [
          {
            name: 'table-pro',
            path: '/table/table-pro',
            element: <TablePro />
          },
          {
            name: 'table-antd',
            path: '/table/table-antd',
            element: <TableAntd />
          },
          {
            name: 'table-ahook',
            path: '/table/table-ahook',
            element: <TableAhook />
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    loader: checkAuth,
    element: <LoginPage />
  },
  {
    path: '*',
    element: <NotFound />
  }
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

// extract routes for react-router-dom6
const extractRoutes = (menuRoutes: MenuRoute[]) => {
  const recurExtractRoutes = (menuRoutes: MenuRoute[], routes: RoutesType[]) => {
    if (menuRoutes?.length) {
      menuRoutes.forEach((item: MenuRoute) => {
        const { path, auth, element, loader, children } = item
        routes.push({
          // index,
          loader,
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
