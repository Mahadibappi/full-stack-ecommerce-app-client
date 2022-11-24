import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/header',
            //     element: <AppontHeader></AppontHeader>
            // },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp></SignUp>
            // },
            // {
            //     path: '/about',
            //     element: <About></About>
            // },
            // {
            //     path: '/footer',
            //     element: <Footer></Footer>
            // },
        ]


    },

    // {
    //     path: '/dashboard',
    //     element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    //     errorElement: <ErrorPage></ErrorPage>,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <AppointmentTable />
    //         },
    //         {
    //             path: '/dashboard/users',
    //             element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/adddoctor',
    //             element: <AdminRoute> <AddAdoctor></AddAdoctor> </AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/managedoctors',
    //             element: <AdminRoute> <ManageDoctors></ManageDoctors> </AdminRoute>
    //         },
    //         {
    //             path: '/dashboard/payment/:id',
    //             element: <Payment></Payment>,
    //             loader: ({ params }) => fetch(`https://doctors-portal-server-eta-nine.vercel.app/booking/${params.id}`)
    //         }
    //     ]
    // }

])

export default router;