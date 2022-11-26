import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllSeller from '../DashboardLayout/AllSeller';
import Buyers from '../DashboardLayout/Buyers';
import Dashboard from '../DashboardLayout/Dashboard';
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import ManageUser from '../DashboardLayout/ManageUser';
import MyOrders from '../DashboardLayout/MyOrders';
import NewProduct from '../DashboardLayout/NewProduct';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products/:id',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },


        ]


    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/sellers',
                element: <AllSeller />
            },
            {
                path: '/dashboard/buyers',
                element: <Buyers />
            },
            {
                path: '/dashboard/newproduct',
                element: <NewProduct />
            },
            {
                path: '/dashboard/manageuser',
                element: <ManageUser />
            },



        ]
    }


])

export default router;