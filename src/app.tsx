import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { routes } from './routes'

import { ConfigProvider } from 'antd'
import { useAppSelector } from './store'
import { themeColor } from '@/features/theme/themeSlice'

export default function App() {
  const createdRoutes =
    import.meta.env.VITE_ROUTER_HISTORY === 'hash'
      ? createHashRouter(routes)
      : createBrowserRouter(routes)

  const primaryColor = useAppSelector(themeColor)

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor
        }
      }}
    >
      <RouterProvider router={createdRoutes} />
    </ConfigProvider>
  )
}
