import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootRoute from "./app"
import NotFoundRoute from "./pages/NotFound"

const router = createBrowserRouter([RootRoute, NotFoundRoute])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
