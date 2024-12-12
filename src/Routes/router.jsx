import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About";
import Brands from "../Pages/Brands";
import MyProfile from "./../Pages/MyProfile";
import Home from "./../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Components/Error";
import PrivateRoute from "./PrivateRoute";
import CouponDetails from "../Pages/CouponDetails";
import UpdateProfile from "../Pages/UpdateProfile";
import BlogDetails from "../Components/BlogDetails";
import ForgetPassword from "../Components/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/couponData.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("/couponData.json"),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile/update",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brands/:id",
        element: (
          <PrivateRoute>
            <CouponDetails></CouponDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/couponData.json"),
      },
      {
        path: "/blog/:id",
        element: (
          <PrivateRoute>
            <BlogDetails></BlogDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/blogData.json"),
      },
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default router;
