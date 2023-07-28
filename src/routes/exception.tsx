import { Result } from 'antd'
import { Link } from 'react-router-dom'

const enum ResultType {
  Forbidden = 403,
  NotFound = 404
}

const ResultInfo = {
  403: '你没有权限访问此页面',
  404: '您访问的页面不存在'
}

type ResultCodes = keyof typeof ResultInfo

function ResultPage(props: { resultCode: ResultCodes }) {
  const { resultCode } = props
  const resultInfo = ResultInfo[resultCode]
  return <Result title={resultCode} subTitle={resultInfo} extra={<Link to="/">返回首页</Link>} />
}

export const NotFound = () => <ResultPage resultCode={ResultType.NotFound} />
export const NotAuth = () => <ResultPage resultCode={ResultType.Forbidden} />
