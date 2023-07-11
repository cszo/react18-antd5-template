import { useState, useMemo } from 'react'
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd'
import { Link, useLocation, Outlet, useMatches } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { menuItems, breadcrumbNameMap } from '../routes'

const { Content, Sider } = Layout

export default function AdminLayout() {
  const location = useLocation()
  const matches = useMatches()
  const [collapsed, setCollapsed] = useState(false)
  // selectedKeys可根据location计算出来(location.pathname即menu key)
  const selectedKeys = [location.pathname]

  const defaultOpenKeys = useMemo(() => {
    return matches.slice(1, -1).map((item) => item.pathname)
  }, [matches])

  const toggleCollapsed = () => setCollapsed(!collapsed)

  const {
    token: { colorBgContainer }
  } = theme.useToken()

  // 面包屑处理
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
    }
  })

  // console.log('breadcrumbItems', breadcrumbItems)

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider width={200} collapsed={collapsed}>
        <div style={{ textAlign: 'center', lineHeight: '40px', color: '#ffffff' }}>XX管理系统</div>
        <Menu
          theme="dark"
          mode="inline"
          style={{ height: 'calc(100vh - 40px)' }}
          items={menuItems}
          selectedKeys={selectedKeys}
          defaultOpenKeys={defaultOpenKeys}
        />
      </Sider>
      <Layout>
        <div style={{ display: 'flex', alignItems: 'center', height: 40 }}>
          <Button type="link" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Breadcrumb items={breadcrumbItems} />
        </div>
        <Content
          style={{
            marginLeft: 12,
            padding: 12,
            background: colorBgContainer
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
