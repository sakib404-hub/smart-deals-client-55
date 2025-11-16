import React from 'react';
import SmartDealsBanner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import LatestProduct from '../../Components/LatestProduct/LatestProduct';

const Home = () => {
    const latestProducs = useLoaderData();
    console.log(latestProducs);
    return (
        <div>
            <SmartDealsBanner></SmartDealsBanner>
            <LatestProduct
                key={latestProducs._id}
                latestProducs={latestProducs}>
            </LatestProduct>
        </div>
    );
};

export default Home;