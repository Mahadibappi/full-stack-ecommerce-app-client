import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_stripe)

const Payment = () => {
    const orders = useLoaderData()
    const { price, product } = orders
    // console.log('orders', data)
    return (
        <div>
            <h2 className='text-2xl text-green-400'>Pleas pay <strong>{price}</strong>Tk for {product}</h2>
            <div className='mt-12 w-1/3'>
                <Elements stripe={stripePromise}>

                    <CheckoutForm
                        orders={orders}
                    ></CheckoutForm>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;