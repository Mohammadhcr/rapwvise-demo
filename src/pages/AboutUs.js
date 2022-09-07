import React from 'react';

import styles from '../styles/AboutUs.module.scss'

const AboutUs = () => {

    const {myMain, myName, myLinks, mySkillsContact, myLinksLink, email, phone, telegram, instagram, github, website} = styles;
    
    return (
            <div className={myMain}>
                <div className={myName}>
                    <h1>رپوایز</h1>
                    <h3></h3>
                </div>
                <div className={mySkillsContact}>
                    <div className={myLinks}>
                        <div><h2>ارتباط با ما</h2></div>
                        <div className={myLinksLink}>
                            <a className={email} href="mailto:rapwvise@icloud.com" target="_blank"><i className='bx bx-envelope'></i> E-Mail</a>
                            <a className={telegram} href="https://t.me/rapwviser" target="_blank"><i className='bx bxl-telegram'></i> Telegram</a>
                            <a className={instagram} href="https://instagram.com/rapwvise" target="_blank"><i className='bx bxl-instagram'></i> Instagram</a>
                            <a className={instagram} href="https://twitter.com/rapwvise" target="_blank"><i className='bx bxl-instagram'></i> twitter</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AboutUs;