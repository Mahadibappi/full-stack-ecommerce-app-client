
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const Products = () => {
    const category = useLoaderData()
    const [info, setInfo] = useState(null)


    return (
        <section>
            <div className='grid md:grid-cols-2 mt-10'>
                {
                    category?.map(product => <ProductCard key={product._id} product={product}
                        setInfo={setInfo}


                    >
                    </ProductCard>)
                }

            </div>
            {info &&
                <ProductModal info={info}></ProductModal>
            }
        </section>
    );
};

export default Products;