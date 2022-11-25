import React from 'react';

const ProductCard = ({ product, setInfo }) => {
    const { name, img, location, Release_Date, Release_Price, Original_Price, published_date, Years_of_use, sellers_name } = product
    return (
        <div className="card card-compact w-1/2 mx-auto ">
            <figure><img className='rounded' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Location: {location}</p>
                <p>Release Date: {Release_Date}</p>
                <p>Original Price: {Original_Price}Tk</p>
                <p>Resale Price: {Release_Price}Tk</p>
                <p>published_date: {published_date}</p>
                <p>Years of use: {Years_of_use}</p>
                <p>Seller name: {sellers_name}</p>
                <div className="card-actions justify-center">
                    <label
                        onClick={() => setInfo(product)}
                        htmlFor="option-modal"
                        className="btn btn-primary">
                        Book Now
                    </label>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;