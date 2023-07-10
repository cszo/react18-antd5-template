import { useState } from 'react'
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { menuItems, breadcrumbNameMap } from '../routes'

const { Content, Sider } = Layout

export default function AdminLayout() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  // openKeys不能只根据location计算 还要判断层级 否则无法在刷新的时候确定展开菜单
  const [openKeys, setOpenKeys] = useState<string[]>([])
  // selectedKeys可根据location计算出来(location.pathname即menu key)
  const selectedKeys = [location.pathname]

  // 点击菜单 收起另外菜单
  const onOpenChange = (openKeys: string[]) => {
    const customOpenKeys = openKeys.reduceRight(
      (acc: string[], item: string) => [
        ...(acc[acc.length - 1]?.startsWith(item) || !acc.length ? [item] : []),
        ...acc
      ],
      []
    )
    setOpenKeys(customOpenKeys)
  }

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

  console.log('breadcrumbItems', breadcrumbItems)

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
          openKeys={openKeys}
          onOpenChange={(openKeys) => onOpenChange(openKeys)}
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
