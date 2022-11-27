import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Shared/Spinner'
import { AuthContext } from '../Context/AuthProvider';

const MyOrders = () => {
    const { user, loading } = useContext(AuthContext)
    const url = (`http://localhost:5000/orders?email=${user?.email}`)

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
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
            <h2 className='text-4xl text-violet-600 mb-5'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders &&
                            orders?.map((order, i) => <tr key={order._id} className="hover">
                                <th>{1 + i}</th>
                                <td> <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80" alt='images' />
                                    </div>
                                </div></td>
                                <td>{order.product}</td>
                                <td>{order.price}</td>
                                <td>
                                    {
                                        order.price && !order.paid && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-primary btn-sm'>Pay </button></Link>
                                    }

                                    {
                                        order.price && order.paid && <button className='btn text-green-600 btn-sm'>Paid</button>
                                    }



                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;