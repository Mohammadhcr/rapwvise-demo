import React, { useEffect } from 'react';

import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Footer';
import styles from '../styles/Items.module.scss';

const Top10s = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {itemContainer, itemText, itemTitle} = styles;

    return (
        <>
            <div className={itemContainer}>
                <div className={itemTitle}>
                        <h2>مقالات و بررسی‌ها</h2>
                    </div>
                    <div className={itemText}>
                        <p>بررسی آثار، مقالات و لیست برترین‌های رپ فارسی</p>
                    </div>
                <ArticleCard />
            </div>
            <Footer />
        </>
    );
};

export default Top10s;