import { AppstoreOutlined, DesktopOutlined, MailOutlined } from '@ant-design/icons'
import { lazy } from 'react'
import { Link, Navigate } from 'react-router-dom'
import lazyLoad from './lazy-load'
import NotFound from './not-found'
import NotAuth from './not-auth'

const menuRoutes = [
  {
    path: '/',
    element: <Navigate replace to="/home" />
  },
  {
    path: '/',
    // 这种写法为了方便vscode识别import参数为path并快速跳转 不然可以简化为只传字符串参数？
    element: lazyLoad(lazy(() => import('@/layouts'))),
    children: [
      {
        name: '首页',
        path: '/home',
        icon: <DesktopOutlined />,
        element: lazyLoad(lazy(() => import('@/pages/home')))
      },
      {
        name: '订单',
        path: '/order',
        icon: <MailOutlined />,
        children: [
          {
            name: '列表',
            path: '/order/list',
            element: lazyLoad(lazy(() => import('@/pages/order/list')))
          },
          {
            name: '详情',
            auth: false,
            path: '/order/detail',
            hideInMenu: true,
            element: lazyLoad(lazy(() => import('@/pages/order/detail')))
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
            element: lazyLoad(lazy(() => import('@/pages/product/phone')))
          },
          {
            name: '奢侈品',
            path: '/product/scp',
            children: [
              {
                name: '黄金',
                path: '/product/scp/gold',
                element: lazyLoad(lazy(() => import('@/pages/product/luxury/gold')))
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
const extractMenuItems = (menuRoutes: any) => {
  const breadcrumbNameMap: any = []

  const recurExtractMenuItems = (menuRoutes: any, menuItems: any[]) => {
    if (menuRoutes?.length) {
      menuRoutes.forEach((item: any) => {
        const { name, path, icon, hideInMenu, children } = item
        breadcrumbNameMap[path] = name
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
const extractRoutes = (menuRoutes: any) => {
  const recurExtractRoutes = (menuRoutes: any, routes: any[]) => {
    if (menuRoutes?.length) {
      menuRoutes.forEach((item: any) => {
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

const { menuItems, breadcrumbNameMap } = extractMenuItems(menuRoutes[1].children)
console.log('menuItems', menuItems, 'breadcrumbNameMap', breadcrumbNameMap)
const routes = extractRoutes(menuRoutes)
console.log('routes', routes)

export { routes, menuItems, breadcrumbNameMap }
