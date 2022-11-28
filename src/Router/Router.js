import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdvertiseItem from '../DashboardLayout/AdvertiseItem';
import AllSeller from '../DashboardLayout/AllSeller';
import Buyers from '../DashboardLayout/Buyers';
import Dashboard from '../DashboardLayout/Dashboard';
import DashboardLayout from '../DashboardLayout/DashboardLayout'
import ManageUser from '../DashboardLayout/ManageUser';
import MyOrders from '../DashboardLayout/MyOrders';
import MyProducts from '../DashboardLayout/MyProducts';
import NewProduct from '../DashboardLayout/NewProduct';
import Payment from '../DashboardLayout/Payment';
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Products from '../Pages/Products/Products';
import SignUp from '../Pages/SignUp/SignUp';
import AdminRoute from './AdminRoute';
import PrivateRoute from './PrivateRoute';
import SellerRoute from './SellerRoute';

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
                element: <PrivateRoute><Products></Products></PrivateRoute>,
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
                path: '/advertise',
                element: <AdvertiseItem></AdvertiseItem>
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
                element: <SellerRoute> <NewProduct /> </SellerRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <Buyers />
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeller /></AdminRoute>
            },

            {
                path: '/dashboard/myproducts',
                element: <MyProducts />
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`http://localhost:5000/orders/${params.id}`)
            },



        ]
    }


])

export default router;