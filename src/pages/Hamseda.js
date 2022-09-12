import React from 'react';

import HamsedaCard from '../components/HamsedaCard';
import styles from '../styles/Hamseda.module.scss';

const Hamseda = () => {

    const {hContainer, hamsedaTitle, hamsedaText} = styles;

    return (
        <div className={hContainer}>
            <div className={hamsedaTitle}>
                    <h2>پادکست همصدا</h2>
                </div>
                <div className={hamsedaText}>
                    <p>همصدا يک پادكست موضوع محوره كه از ديد مخاطب ها، مسائل مختلف در حوزه‌ى رپ فارسى رو بررسى می كنه</p>
                </div>
            <HamsedaCard />
        </div>
    );
};

export default Hamseda;