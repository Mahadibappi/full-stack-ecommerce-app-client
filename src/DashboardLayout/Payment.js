import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const data = useLoaderData()
    console.log('orders', data)
    return (
        <div>
            all payment will be here
        </div>
    );
};

export default Payment;