import React from 'react';

import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import styles from '../styles/Articles.module.scss';

const Top10s = () => {

    const {tContainer, top10Title, top10Text} = styles;

    return (
        <>
            <div className={tContainer}>
                <div className={top10Title}>
                        <h2>مقالات و بررسی ها</h2>
                    </div>
                    <div className={top10Text}>
                        <p>بررسی آثار، مقالات و لیست برترین های رپ فارسی</p>
                    </div>
                <ArticleCard />
            </div>
            <Footer />
        </>
    );
};

export default Top10s;