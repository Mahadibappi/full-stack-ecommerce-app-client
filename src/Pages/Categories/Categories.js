import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })

    }, [])


    return (
        <div className='mt-10 p-5'>
            <h2 className='text-7xl font-bold text-center' >Explore Our Categories</h2>
            <div className='flex justify-center gap-6 text-6xl mt-24'>
                {
                    categories && categories.map(category => <div key={category.id}>
                        <Link className='border rounded-md p-5' to={`/products/${category.id}`} >{category.name}</Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Categories;