import React from 'react';
import ProductCard from '../ProductsCard/ProductCard';

const LatestProduct = ({ latestProducs }) => {
    return (
        <div>
            <div className='flex items-center justify-center mt-5 text-4xl font-bold'>
                <p>Recents <span className='text-primary'>Products</span></p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 md:p-15'>
                {
                    latestProducs.map((product) => {
                        return <ProductCard
                            key={product._id}
                            product={product}>
                        </ProductCard>
                    })
                }
            </div>
        </div>
    );
};

export default LatestProduct;