import React from 'react';

import styles from '../styles/AboutUs.module.scss';

const AboutUs = () => {

    const {myMain, myName, myLinks, mySkillsContact, myLinksLink, email, telegram, instagram} = styles;
    
    return (
            <div className={myMain}>
                <div className={myName}>
                    <h1>رپوایز</h1>
                    <h3>وبسایت نقد و بررسی آثار رپ فارسی</h3>
                </div>
                <div className={mySkillsContact}>
                    <div className={myLinks}>
                        <div><h2>ارتباط با ما</h2></div>
                        <div className={myLinksLink}>
                            <a className={email} href="mailto:rapwvise@icloud.com" target="_blank"><i className='bx bx-envelope'></i> ایمیل</a>
                            <a className={telegram} href="https://t.me/rapwvise" target="_blank"><i className='bx bxl-telegram'></i> تلگرام</a>
                            <a className={instagram} href="https://instagram.com/rapwvise" target="_blank"><i className='bx bxl-instagram'></i> اینستاگرام</a>
                            <a className={instagram} href="https://twitter.com/rapwvise" target="_blank"><i className='bx bxl-instagram'></i> توئیتر</a>
                        </div>
                    </div>
                    <div className={myLinks}>
                        <div><h2>راه های شنیدن پادکست همصدا</h2></div>
                        <div className={myLinksLink}>
                            <a className={email} href="mailto:rapwvise@icloud.com" target="_blank"><i className='bx bx-envelope'></i> اسپاتیفای</a>
                            <a className={telegram} href="https://t.me/rapwvise" target="_blank"><i className='bx bxl-telegram'></i> اپل پادکست</a>
                            <a className={instagram} href="https://instagram.com/rapwvise" target="_blank"><i className='bx bxl-instagram'></i> ساندکلاد</a>
                            <a className={instagram} href="https://twitter.com/rapwvise" target="_blank"><i className='bx bxl-instagram'></i> کست باکس</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AboutUs;