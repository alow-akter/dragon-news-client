import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Sheard/NewsSummaryCart/NewsSummaryCart';
;

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h5>Dragon News Home: {allNews.length}</h5>
            {
                allNews.map(news => <NewsSummaryCart
                    key={news._id} news={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;