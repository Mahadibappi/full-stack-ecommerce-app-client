import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

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
        <div className='text-center mt-28'>
            <h2 className="text-3xl text-red-500 ">Something went wrong!!</h2>
            <p className="text-2xl mt-5 mb-7">{error.statusText || error.message}</p>
            <button onClick={handleLogout} className='btn btn-accent'>Please Log Out</button>
        </div>
    );
};

export default ErrorPage;