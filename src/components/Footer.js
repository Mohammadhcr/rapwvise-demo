import React from 'react';

import styles from '../styles/Footer.module.scss';

const Footer = () => {

    const {copyright} = styles;

    return (
        <>
            <footer>
                <div className={copyright}>
                    <span>
                        <p>
                            <i className='bx bx-copyright'></i> کپی رایت - تمامی حقوق برای وبسایت رپ‌وایز محفوظ است.
                        </p>
                    </span>
                    <span>
                        <p>ساخته شده توسط: <a href='https://mohammadhcr.online' target='_blank' rel="noopener noreferrer">Mohammad hcr</a></p>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;