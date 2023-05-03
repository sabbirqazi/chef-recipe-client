import { createBrowserRouter } from "react-router-dom";
import LoginLayOut from "../layouts/LoginLayOut";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Main from "../layouts/Main";

import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import PrivateRoute from "./PrivateRoute";
import Recipe from "../pages/Recipe/Recipe";


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
        },
        {
           path: "/:id",
           element: 
           <PrivateRoute>
            <Recipe></Recipe>
           </PrivateRoute>
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