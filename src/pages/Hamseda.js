import React, { useEffect } from 'react';

import HamsedaCard from '../components/HamsedaCard';
import styles from '../styles/Items.module.scss';
import Footer from '../components/Footer';

const Hamseda = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {itemContainer, itemText, itemTitle} = styles;

    return (
        <>
            <div className={itemContainer}>
                <div className={itemTitle}>
                        <h2>پادکست همصدا</h2>
                    </div>
                    <div className={itemText}>
                        <p>همصدا يک پادكست موضوع محوره كه از ديد مخاطب‌ها، مسائل مختلف در حوزه‌ی رپ فارسى رو بررسى می‌كنه</p>
                    </div>
                <HamsedaCard />
            </div>
            <Footer />
        </>
    );
};

export default Hamseda;