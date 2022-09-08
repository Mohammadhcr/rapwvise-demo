import React from 'react';
import Footer from '../components/Footer';

import styles from '../styles/RapWVise.module.scss';

const RapWVise = () => {

    const {rapWVise, rTitle, hamseda, hTitle, hLinks, comments, cTitle, cLinks, notes, nTitle, nLinks} = styles;

    return (
        <>
            <div className={rapWVise}>
                <div className={rTitle}>
                    <h1>وبسایت رسمی رپوایز</h1>
                </div>
            </div>
            <div className={hamseda}>
                <div className={hTitle}>
                    <h2>پادکست همصدا</h2>
                </div>
                <div className={hLinks}></div>
            </div>
            <div className={comments}>
                <div className={cTitle}>
                    <h2>نظرات</h2>
                </div>
                <div className={cLinks}></div>
            </div>
            <div className={notes}>
                <div className={nTitle}>
                    <h2>یادداشت ها</h2>
                </div>
                <div className={nLinks}></div>
            </div>
            <Footer />
        </>
    );
};

export default RapWVise;