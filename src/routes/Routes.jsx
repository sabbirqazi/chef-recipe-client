import { createBrowserRouter } from "react-router-dom";
import LoginLayOut from "../layouts/LoginLayOut";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
     path: "/",
     element: <Main></Main>,
     errorElement: <ErrorPage />,
     children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        }
     ]
    },
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
    },
])

export default router;