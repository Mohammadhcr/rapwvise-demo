import React from 'react';

import styles from '../styles/Footer.module.scss';

const Footer = () => {

    const {copyright} = styles;

    return (
        <>
            <footer>
                <div className={copyright}>
                    <span>
                        <h3>کپی رایت 1399 - 1401 | تمامی حقوق برای وبسایت رپوایز محفوظ است</h3>
                    </span>
                    <span>
                        <h3>طراحی و توسعه: Mohammadhcr</h3>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;