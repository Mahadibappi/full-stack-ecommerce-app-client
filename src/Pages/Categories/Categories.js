import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
const Categories = () => {
    const [categories, setCategories] = useState('')

    axios.get('http://localhost:5000/brands')
        .then(res => {
            setCategories(res.data)

        })

    return (
        <div className='mt-10 p-5'>
            <h2 className='text-5xl font-bold text-center' >Explore Our Categories</h2>
            <div className='flex justify-center gap-4 text-3xl mt-24'>
                {
                    categories && categories.map((category, i) => <div key={i}>
                        <Link className='border rounded-md p-5' to={`/products/${category.id}`} >{category.name}</Link>
                    </div>)
                }
            </div>

        </div>

    );
};

export default Categories;