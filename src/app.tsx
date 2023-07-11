import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { routes } from './routes'

export default function App() {
  const createdRoutes =
    import.meta.env.VITE_ROUTER_HISTORY === 'hash'
      ? createHashRouter(routes)
      : createBrowserRouter(routes)
  return <RouterProvider router={createdRoutes} />
}
