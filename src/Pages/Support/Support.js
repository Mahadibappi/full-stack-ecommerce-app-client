import React from 'react';

const Support = () => {
    return (
        <div className=' mt-24 '>
            <div className='text-4xl font-bold text-center mb-12'>Customers Support</div>
            <div className="hero">
                <div className="hero-content flex-col flex-1 lg:flex-row">
                    <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg" className=" rounded-lg w-96" alt='img' />
                    <div>
                        <h1 className="text-5xl font-bold">Get 24/7 Customer Support</h1>
                        <p className="py-6">Out agent is ready for your all kind of query and solving your problems .</p>
                        <button className="btn btn-primary">Let's Talk</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Support;