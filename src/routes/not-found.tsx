import type { ResultStatusType } from 'antd/lib/result'
import { Result } from 'antd'
import { Link } from 'react-router-dom'

export type NotFoundPropsType = {
  status?: ResultStatusType
  title?: string
  subTitle?: string
  extra?: React.ReactNode
}

function NotFound({
  status = '404',
  title = '404',
  subTitle = '您访问的页面不存在',
  extra = <Link to="/">返回首页</Link>
}: NotFoundPropsType) {
  return <Result status={status} title={title} subTitle={subTitle} extra={extra} />
}

export default NotFound
