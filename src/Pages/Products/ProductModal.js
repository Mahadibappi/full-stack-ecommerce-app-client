import toast from 'react-hot-toast';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';


const ProductModal = ({ info }) => {
    const { user } = useContext(AuthContext)
    const { name, Release_Price, } = info

    const handleOption = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value
    }
    return (
        <div>
            <input type="checkbox" id="option-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="option-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Product: {name}</h3>
                    <h3 className="text-sm font-bold">Price: {Release_Price}Tk</h3>
                    <form onSubmit={handleOption} className='grid grid-cols-1 gap-3 mt-5'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full " />
                        <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="Your Location" className="input input-bordered w-full " />

                        <input onClick={() => toast.success('Booking successful')} type="submit" className="btn btn-primary  " />


                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;