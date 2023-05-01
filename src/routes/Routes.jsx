import { createBrowserRouter } from "react-router-dom";
import LoginLayOut from "../layout/LoginLayOut";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayOut></LoginLayOut>,
        children: [
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "register",
            element: <Register></Register>,
          },
        ],
    }
])

export default router;