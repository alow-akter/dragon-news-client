import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../Sheard/NewsSummaryCart/NewsSummaryCart';

const Cetagory = () => {
    const categoryNews = useLoaderData();

    return (
        <div>
            <h2>this is cetagory :{categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewsSummaryCart
                    key={news._id} news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Cetagory;