import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Spinner from '../Shared/Spinner';

const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isSeller, sellerLoading] = useSeller(user?.email)
    const [isAdmin, adminLoading] = useAdmin(user?.email)
    const location = useLocation()

    if ((loading || sellerLoading) || (loading || adminLoading)) {
        return <Spinner></Spinner>
    }

    if ((user && isSeller) || (user && isAdmin)) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} ></Navigate>
};

export default SellerRoute;