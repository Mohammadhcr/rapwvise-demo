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
                            © تمامی حقوق برای وب‌سایت رپ‌وایز محفوظ است.
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