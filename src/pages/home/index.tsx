import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/order/list">订单列表页</Link>
      <br />
      <Link to="/order/detail">订单详情（无权限）</Link>
      <br />
      <Link to="/order/no-page">未知页面（404）</Link>
      <br />
      <Link to="/product/phone">手机（二级菜单）</Link>
      <br />
      <Link to="/product/scp/gold">黄金（三级菜单）</Link>
    </div>
  )
}
