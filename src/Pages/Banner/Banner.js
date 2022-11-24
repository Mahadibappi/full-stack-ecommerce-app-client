import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-[500px] rounded-lg" style={{ backgroundImage: `url("https://img.freepik.com/premium-photo/omni-channel-technology-online-retail-business_31965-3010.jpg?w=2000")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-white font-bold">Welcome To Laptop Hub</h1>
                    <p className="mb-5 text-white">Best second hand laptop seller in this country get the best product ins short time and low price.</p>
                    <button className="btn btn-info">Let's Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;