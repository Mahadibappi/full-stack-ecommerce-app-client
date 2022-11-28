import toast from 'react-hot-toast';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';



const ProductModal = ({ info, setInfo }) => {
    const { user } = useContext(AuthContext)
    const { name, Release_Price, } = info

    const handleOption = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const product = form.product.value;
        const price = form.price.value;
        const email = form.email.value;
        const phone = form.phone.value
        const location = form.location.value
        // console.log(name, product, price, location, email, phone);

        const orders = {
            name,
            product,
            price,
            email,
            phone,
            location
        }
        fetch('https://product-server-ashen.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('order confirmed')
                setInfo(null)

            })
    }

    return (
        <div>
            <input type="checkbox" id="option-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="option-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleOption} className='grid grid-cols-1 gap-3 mt-5'>
                        <input name='product' type="text" defaultValue={name} disabled className="input input-bordered w-full " />

                        <input name='price' type="text" defaultValue={Release_Price} disabled className="input input-bordered w-full " />

                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full " />

                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full " />

                        <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full " />

                        <input name='location' type="text" placeholder="Your Location" className="input input-bordered w-full " />

                        <input type="submit" className="btn btn-primary  " />


                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;