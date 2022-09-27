import React, { useEffect } from 'react';

import styles from '../styles/AboutUs.module.scss';

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {mainContainer, aboutUsTitle, contactLinks, contactSection, cLink} = styles;
    
    return (
            <div className={mainContainer}>
                <div className={aboutUsTitle}>
                    <h1>رپوایز</h1>
                    <h3>وبسایت نقد و بررسی آثار رپ فارسی</h3>
                </div>
                <div className={contactSection}>
                    <div className={contactLinks}>
                        <div><h2>ارتباط با ما</h2></div>
                        <div className={cLink}>
                            <a href="mailto:rapwvise@icloud.com" target="_blank" rel="noopener noreferrer"><i className='bx bx-envelope'></i> ایمیل</a>
                            <a href="https://t.me/rapwviseadmin" target="_blank" rel="noopener noreferrer"><i className='bx bxl-telegram'></i> تلگرام</a>
                        </div>
                    </div>
                    <div className={contactLinks}>
                        <div><h2>شبکه های اجتماعی ما</h2></div>
                        <div className={cLink}>
                            <a href="https://twitter.com/rapwvise" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i> توئیتر</a>
                            <a href="https://instagram.com/rapwvise" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i> اینستاگرام</a>
                            <a href="https://t.me/rapwvise" target="_blank" rel="noopener noreferrer"><i className='bx bxl-telegram'></i> کانال تلگرام</a>
                        </div>
                    </div>
                    <div className={contactLinks}>
                        <div><h2>پلتفرم های استریم پادکست همصدا</h2></div>
                        <div className={cLink}>
                            <a href="https://open.spotify.com/show/03Ruo9daBN4hEwmUqyRlHk?si=p7KO9ERaRe2rTZUgFUub2w&nd=1" target="_blank" rel="noopener noreferrer"><i className='bx bxl-spotify'></i> اسپاتیفای</a>
                            <a href="https://podcasts.apple.com/us/podcast/hamseda/id1522223127" target="_blank" rel="noopener noreferrer"><i className='bx bx-podcast'></i> اپل پادکست</a>
                            <a href="https://soundcloud.com/rapwvise" target="_blank" rel="noopener noreferrer"><i className='bx bxl-soundcloud' ></i> ساندکلاد</a>
                            <a href="https://castbox.fm/channel/id3075928" target="_blank" rel="noopener noreferrer"><i className='bx bx-cast'></i> کست باکس</a>
                            <a href="https://podcasts.google.com/feed/aHR0cDovL3Jzcy5jYXN0Ym94LmZtL2V2ZXJlc3QvMjI1YzRkN2RhOGYwNDgxMTljMTk3MmRkOWMwZmFlYTUueG1s?sa=X&ved=0CAIQ4aUDahcKEwjAyaStjvrqAhUAAAAAHQAAAAAQCg" target="_blank" rel="noopener noreferrer"><i className='bx bxl-google'></i> گوگل پادکست</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AboutUs;