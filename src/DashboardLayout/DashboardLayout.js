import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header';


const DashboardLayout = () => {
    // const { user } = useContext(AuthContext)
    // const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Header></Header>

            <div className="drawer drawer-mobile">
                <input id="drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>


                        {/* <li><Link to='/dashboard/manageuser'>Mange Users</Link></li> */}
                        <li><Link to='/dashboard/buyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/sellers'>All Seller</Link></li>
                        <li><Link to='/dashboard/newproduct'>Add New Product</Link></li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;