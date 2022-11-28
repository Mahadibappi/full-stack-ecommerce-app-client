import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Spinner from '../Shared/Spinner'
import { AuthContext } from '../Context/AuthProvider';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext)
    const url = (`https://product-server-ashen.vercel.app/seller`)

    const { data: seller = [] } = useQuery({
        queryKey: ['seller', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <h2 className='text-4xl text-yellow-300 mb-5'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Advertise</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            seller &&
                            seller?.map((order, i) => <tr key={i}>
                                <th>{1 + i}</th>
                                <td> <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={order.image} alt='images' />
                                    </div>
                                </div></td>
                                <td>{order.name}</td>
                                <td>{order.price}</td>
                                <td>
                                    <button className='btn btn-primary btn-sm'>Unsold</button>
                                </td>
                                <td><button className='btn text-green-600 btn-sm'>Advertise</button></td>
                                <td><button className='btn btn-warning btn-sm'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;