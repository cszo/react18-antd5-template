import { Result } from 'antd'
import { Link } from 'react-router-dom'

const App: React.FC = () => (
  <Result
    status="403"
    title="403"
    subTitle="你没有权限访问此页面"
    extra={<Link to="/">返回首页</Link>}
  />
)

export default App
