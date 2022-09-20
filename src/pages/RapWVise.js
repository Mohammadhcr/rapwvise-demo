import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

import styles from '../styles/RapWVise.module.scss';

const RapWVise = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const {rapWVise, rTitle, rText, hamseda, hTitle, scrollIcon, hText, linkIcon, absoIcon, comments, cTitle, cText, top10, tTitle, tText, link, linkContent} = styles;

    return (
        <>
            <div className={rapWVise}>
                <div className={rTitle}>
                    <h1>رپوایز</h1>
                </div>
                <div className={rText}>
                    <p>وبسایت نقد و بررسی آثار رپ فارسی</p>
                </div>
                <div className={scrollIcon}>
                    <i className='bx bx-chevron-down'></i>
                </div>
            </div>
            <div className={hamseda}>
                <div className={hTitle}>
                    <h2>پادکست همصدا</h2>
                </div>
                <div className={hText}>
                    <p>همصدا يک پادكست موضوع محوره كه از ديد مخاطب ها، مسائل مختلف در حوزه‌ى رپ فارسى رو بررسى می كنه</p>
                </div>
                <Link to='/hamseda'>
                    <div className={link}>
                        <div className={linkIcon}>
                            <i className={`bx bx-link-external bx-flip-horizontal ${absoIcon}`}></i>
                            <i className='bx bx-podcast'></i>
                        </div>
                        <div className={linkContent}>
                            <h2>شنیدن پادکست</h2>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={top10}>
                <div className={tTitle}>
                    <h2>مقالات و بررسی ها</h2>
                </div>
                <div className={tText}>
                    <p>بررسی آثار، مقالات و لیست برترین های رپ فارسی</p>
                </div>
                <Link to='/articles'>
                    <div className={link}>
                        <div className={linkIcon}>
                            <i className={`bx bx-link-external bx-flip-horizontal ${absoIcon}`}></i>
                            <i className='bx bx-notepad'></i>
                        </div>
                        <div className={linkContent}>
                            <h2>مشاهده مطالب</h2>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={comments}>
                <div className={cTitle}>
                    <h2>نظرات کاربران</h2>
                </div>
                <div className={cText}>
                    <p>در این بخش نظرات کاربران رپ وایز رو راجع به موسیقی رپ منعکس می کنیم</p>
                </div>
                <Link to='/comments/#'>
                    <div className={link}>
                        <div className={linkIcon}>
                            <i className={`bx bx-link-external bx-flip-horizontal ${absoIcon}`}></i>
                            <i className='bx bx-message-dots'></i>
                        </div>
                        <div className={linkContent}>
                            <h2>از نظرات بقیه کاربران مطلع شوید</h2>
                        </div>
                    </div>
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default RapWVise;