import { useState, useMemo, Suspense } from 'react'
import { Breadcrumb, Layout, Row, Menu, Button, Spin, Dropdown, MenuProps } from 'antd'
import {
  Link,
  useLocation,
  useNavigate,
  Outlet,
  useMatches,
  Navigate,
  useLoaderData
} from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'

import { useEmotionCss } from '../hooks'

import { menuItems, breadcrumbNameMap } from '../routes'
import { logout } from '../routes/auth'

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
  const { user }: any = useLoaderData()
  console.log('useLoaderData - user', user)

  const location = useLocation()
  const navigate = useNavigate()
  const matches = useMatches()
  const [collapsed, setCollapsed] = useState(false)
  const selectedKeys = [location.pathname]

  if (!user) {
    return <Navigate replace to="/login" />
  }

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

  const handleLogout = async () => {
    await logout()
    navigate('/login', { replace: true })
  }

  const logoTextClassName = useEmotionCss(({ token }) => ({
    color: token.colorWhite,
    lineHeight: '48px',
    fontSize: 18
  }))

  const layoutContentClassName = useEmotionCss(({ token }) => ({
    background: token.colorBgContainer,
    marginLeft: 12,
    padding: 12,
    position: 'relative'
  }))

  const items: MenuProps['items'] = [
    {
      label: (
        <Button type="link" size="small" style={{ color: 'gray' }}>
          <UserOutlined />
          <span>个人中心</span>
        </Button>
      ),
      key: '0'
    },
    {
      label: (
        <Button type="link" size="small" style={{ color: 'gray' }}>
          <SettingOutlined />
          <span>个人设置</span>
        </Button>
      ),
      key: '1'
    },
    { type: 'divider' },
    {
      label: (
        <Button type="link" size="small" onClick={handleLogout} style={{ color: 'gray' }}>
          <LogoutOutlined />
          <span>退出登录</span>
        </Button>
      ),
      key: '3'
    }
  ]

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider width={200} collapsed={collapsed}>
        <Row justify="center" className={logoTextClassName}>
          {collapsed ? 'React' : 'React Admin'}
        </Row>
        <Menu
          theme="dark"
          mode="inline"
          style={{ height: 'calc(100vh - 48px)' }}
          items={menuItems}
          selectedKeys={selectedKeys}
          defaultOpenKeys={defaultOpenKeys}
        />
      </Sider>
      <Layout>
        <Row
          style={{
            height: 48,
            padding: '0 12px',
            display: 'flex',
            justifyContent: 'space-between'
            // background: '#fff'
          }}
        >
          <Row align="middle">
            <Button type="link" onClick={toggleCollapsed}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Breadcrumb items={breadcrumbItems} />
          </Row>
          <Row align="middle" style={{ paddingRight: 20 }}>
            <Dropdown menu={{ items }} placement="bottom">
              <Row align="middle">
                <img
                  src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                  style={{ width: 32, height: 32 }}
                />
                <span style={{ marginLeft: 8, color: 'gray' }}>{user.username}</span>
              </Row>
            </Dropdown>
          </Row>
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
