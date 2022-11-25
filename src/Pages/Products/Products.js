
import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Products = () => {
    const category = useLoaderData()

    return (
        <div className='grid md:grid-cols-2 mt-10'>
            {
                category?.map(cate => <div className="card card-compact w-1/2 mx-auto ">
                    <figure><img className='rounded' src={cate.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{cate.name}</h2>
                        <p>Location: {cate.location}</p>
                        <p>Release Date: {cate.Release_Date}</p>
                        <p>Original Price: {cate.Original_Price}Tk</p>
                        <p>Release Price: {cate.Release_Price}Tk</p>
                        <p>published_date: {cate.published_date}</p>
                        <p>Years of use: {cate.Years_of_use}</p>
                        <p>Seller name: {cate.sellers_name}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">Book Now</button>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Products;