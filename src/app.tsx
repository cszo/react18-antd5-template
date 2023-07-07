import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { routes } from "./routes/config"

export default function App() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}
