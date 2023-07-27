import { useState, CSSProperties } from 'react'
import { useNavigate, useLoaderData, Navigate } from 'react-router-dom'
import { Divider, message, Space, Tabs } from 'antd'
import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoOutlined,
  UserOutlined,
  WeiboOutlined
} from '@ant-design/icons'
import { LoginForm, ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-components'

import { login } from '@/routes/auth'
import { type LoginInfo } from '@/apis'

type LoginType = 'phone' | 'account'

const iconCircleStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: 40,
  width: 40,
  border: '1px solid #D4D8DD',
  borderRadius: '50%'
}

const iconStyles: CSSProperties = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer'
}

const Login = () => {
  const [loginType, setLoginType] = useState<LoginType>('account')
  const userInfo = useLoaderData()
  const navigate = useNavigate()

  if (userInfo) {
    return <Navigate replace to="/home" />
  }

  const onFinish = async (values: LoginInfo) => {
    console.log(values)
    const {
      user: { username }
    } = await login(values)
    message.success(`登录成功🎉🎉🎉 欢迎${username}👏🏻👏🏻👏🏻`)
    navigate('/', { replace: true })
  }

  return (
    <div style={{ backgroundColor: '#fff', height: '100vh' }}>
      <LoginForm
        onFinish={onFinish}
        title="React-Admin"
        subTitle="基于react18等最新主流技术的管理后台模版"
        actions={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Divider plain>
              <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                其他登录方式
              </span>
            </Divider>
            <Space align="center" size={24}>
              <div style={iconCircleStyles}>
                <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
              </div>
              <div style={iconCircleStyles}>
                <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
              </div>
              <div style={iconCircleStyles}>
                <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} />
              </div>
            </Space>
          </div>
        }
      >
        <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key="account" tab="账号密码登录" />
          <Tabs.TabPane key="phone" tab="手机号登录" />
        </Tabs>
        {loginType === 'account' && (
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className="prefixIcon" />
              }}
              placeholder="用户名: admin or user"
              rules={[{ required: true, message: '请输入用户名!' }]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className="prefixIcon" />
              }}
              placeholder="密码: 123456"
              rules={[{ required: true, message: '请输入密码！' }]}
            />
          </>
        )}
        {loginType === 'phone' && (
          <>
            <ProFormText
              fieldProps={{
                size: 'large',
                prefix: <MobileOutlined className="prefixIcon" />
              }}
              name="mobile"
              placeholder="手机号"
              rules={[
                { required: true, message: '请输入手机号！' },
                { pattern: /^1\d{10}$/, message: '手机号格式错误！' }
              ]}
            />
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className="prefixIcon" />
              }}
              captchaProps={{
                size: 'large'
              }}
              placeholder="请输入验证码"
              captchaTextRender={(timing: boolean, count: number) => {
                if (timing) return `${count} ${'获取验证码'}`
                return '获取验证码'
              }}
              name="captcha"
              rules={[{ required: true, message: '请输入验证码！' }]}
              onGetCaptcha={async () => {
                message.success('获取验证码成功！验证码为：1234')
              }}
            />
          </>
        )}
        <div style={{ marginBlockEnd: 24 }}>
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a style={{ float: 'right' }}>忘记密码</a>
        </div>
      </LoginForm>
    </div>
  )
}

export default Login
