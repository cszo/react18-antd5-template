import { Spin } from 'antd'

export default function Loading() {
  return (
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
}
