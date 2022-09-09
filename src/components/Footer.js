import React from 'react';

import styles from '../styles/Footer.module.scss';

const Footer = () => {

    const {copyright} = styles;

    return (
        <>
            <footer>
                <div className={copyright}>
                    <span>
                        <p>کپی رایت 1399 - 1401 | تمامی حقوق برای وبسایت رپوایز محفوظ است</p>
                    </span>
                    <span>
                        <p>ساخته شده توسط: محمد اچ سی آر</p>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;