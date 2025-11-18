import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../ProductsCard/ProductCard';

const AllProducts = () => {
    const products = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 lg:p-10 gap-5'>
            {
                products.map((product) => {
                    return <ProductCard
                        product={product}
                        key={product._id}></ProductCard>
                })
            }
        </div>
    );
};

export default AllProducts;