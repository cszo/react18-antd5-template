import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

export default function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}
