import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmModal from '../Shared/ConfirmModal';

const AllSeller = () => {

    const [deleteBuyer, setDeleteBuyers] = useState(null)
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json()
            return data
        }
    })

    const handleDelete = (buyer) => {
        console.log(buyer);
        fetch(`http://localhost:5000/users/${buyer._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToke')} `
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('buyer deleted successfully')
                }
            })

    }



    const closeModal = () => {
        setDeleteBuyers(null)
    }


    // if (loading) {
    //     return <Spinner></Spinner>
    // }

    return (
        <div>
            <h2 className='text-4xl text-cyan-400 mb-5'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users &&
                            users?.map((user, i) => <tr key={i} className="hover">
                                <th>{i}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>
                                    <label onClick={() => setDeleteBuyers(user)} htmlFor="confirm-modal" className="btn btn-xs btn-error">Delete</label>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deleteBuyer && <ConfirmModal
                    title={'Are you sure to delete Buyer?'}
                    message={` If you delete this buyer it cannot be recover`}
                    closeModal={closeModal}
                    handleDelete={handleDelete}
                    modalData={deleteBuyer}


                ></ConfirmModal>}
        </div>
    );
};

export default AllSeller;