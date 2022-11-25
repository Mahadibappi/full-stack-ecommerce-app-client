import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const ErrorPage = () => {
    const error = useRouteError()
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2 className="text-3xl">Something went wrong!!</h2>
            <p className="text-2xl">{error.statusText || error.message}</p>
            <p><button onClick={handleLogout} className='btn btn-primary'>Please Log Out</button></p>
        </div>
    );
};

export default ErrorPage;