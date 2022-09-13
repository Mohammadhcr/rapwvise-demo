import React from 'react';

import Top10Card from '../components/Top10Card';
import Footer from '../components/Footer';
import styles from '../styles/Top10.module.scss';

const Top10s = () => {

    const {tContainer, top10Title, top10Text} = styles;

    return (
        <>
            <div className={tContainer}>
                <div className={top10Title}>
                        <h2>تاپ 10</h2>
                    </div>
                    <div className={top10Text}>
                        <p>مقاله و لیست برترین های رپ فارسی</p>
                    </div>
                <Top10Card />
            </div>
            <Footer />
        </>
    );
};

export default Top10s;