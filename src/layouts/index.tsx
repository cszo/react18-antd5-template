import { useState, useMemo, Suspense } from 'react'
import { Breadcrumb, Layout, Row, Menu, Button, Spin } from 'antd'
import { Link, useLocation, Outlet, useMatches } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { useEmotionCss } from '../hooks'

import { menuItems, breadcrumbNameMap } from '../routes'

const { Content, Sider } = Layout

const Loading = () => (
  <Spin
    size="large"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)'
    }}
  />
)

export default function AdminLayout() {
  const location = useLocation()
  const matches = useMatches()
  const [collapsed, setCollapsed] = useState(false)
  const selectedKeys = [location.pathname]

  const defaultOpenKeys = useMemo(() => {
    return matches.slice(1, -1).map((item) => item.pathname)
  }, [matches])

  const toggleCollapsed = () => setCollapsed(!collapsed)

  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
    }
  })

  const logoTextClassName = useEmotionCss(({ token }) => ({
    color: token.colorWhite,
    lineHeight: '40px'
  }))

  const layoutContentClassName = useEmotionCss(({ token }) => ({
    background: token.colorBgContainer,
    marginLeft: 12,
    padding: 12,
    position: 'relative'
  }))

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider width={200} collapsed={collapsed}>
        <Row justify="center" className={logoTextClassName}>
          XX管理系统
        </Row>
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
        <Row align="middle" style={{ height: 40 }}>
          <Button type="link" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <Breadcrumb items={breadcrumbItems} />
        </Row>
        <Content className={layoutContentClassName}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}
