import React from 'react';

import styles from '../styles/RapWVise.module.scss';
import database from '../components/database';

const RapWVise = () => {

    const {rapWVise, rTitle, rText, hamseda, hTitle, hText, links, comments, cTitle, cText, top10, tTitle, tText, link, linkContent, linkPhoto} = styles;

    return (
        <>
            <div className={rapWVise}>
                <div className={rTitle}>
                    <h1>وبسایت رسمی رپوایز</h1>
                </div>
                <div className={rText}>
                    <p>وبسایت رسمی رپوایز وبسایت رسمی رپوایز وبسایت رسمی رپوایز</p>
                </div>
            </div>
            <div className={hamseda}>
                <div className={hTitle}>
                    <h2>پادکست همصدا</h2>
                </div>
                <div className={hText}>
                    <p>همصدا يک پادكست موضوع محوره كه از ديد مخاطب ها، مسائل مختلف در حوزه‌ى رپ فارسى رو بررسى می كنه</p>
                </div>
                <div className={links}>
                    <div className={link}>
                        <div className={linkPhoto}>
                            <img src={database[0].artwork} alt='Example' />
                        </div>
                        <div className={linkContent}>
                            <h2>جوابگوی سوالات پیوسته اهل دنیا</h2>
                            <p>جوابگوی سوالات پیوسته اهل دنیا</p>
                        </div>
                    </div>
                    <div className={link}>
                        <div className={linkPhoto}>
                            <img src={database[0].artwork} alt='Example' />
                        </div>
                        <div className={linkContent}>
                            <h2>جوابگوی سوالات پیوسته اهل دنیا</h2>
                            <p>جوابگوی سوالات پیوسته اهل دنیا</p>
                        </div>
                    </div>
                    <div className={link}>
                        <div className={linkPhoto}>
                            <img src={database[0].artwork} alt='Example' />
                        </div>
                        <div className={linkContent}>
                            <h2>جوابگوی سوالات پیوسته اهل دنیا</h2>
                            <p>جوابگوی سوالات پیوسته اهل دنیا</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={top10}>
                <div className={tTitle}>
                    <h2>تاپ 10</h2>
                </div>
                <div className={tText}>
                    <p>مقاله و لیست برترین های رپ فارسی</p>
                </div>
                <div className={links}>
                    <div className={link}>
                        <div className={linkPhoto}>
                            <img src={database[0].artwork} alt='Example' />
                        </div>
                        <div className={linkContent}>
                            <h2>جوابگوی سوالات پیوسته اهل دنیا</h2>
                            <p>جوابگوی سوالات پیوسته اهل دنیا</p>
                        </div>
                    </div>
                    <div className={link}>
                        <div className={linkPhoto}>
                            <img src={database[0].artwork} alt='Example' />
                        </div>
                        <div className={linkContent}>
                            <h2>جوابگوی سوالات پیوسته اهل دنیا
                            </h2>
                            <p>جوابگوی سوالات پیوسته اهل دنیا</p>
                        </div>
                    </div>
                    <div className={link}>
                        <div className={linkPhoto}>
                            <img src={database[0].artwork} alt='Example' />
                        </div>
                        <div className={linkContent}>
                            <h2>جوابگوی سوالات پیوسته اهل دنیا</h2>
                            <p>جوابگوی سوالات پیوسته اهل دنیا</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={comments}>
                <div className={cTitle}>
                    <h2>نظرات کاربران</h2>
                </div>
                <div className={cText}>
                    <p>در این بخش نظرات کاربران رپ وایز رو راجع به موسیقی رپ منعکس می کنیم</p>
                </div>
                <div className={links}>
                    <div className={link}>
                        <div className={linkPhoto}>
                            <img src={database[0].artwork} alt='Example' />
                        </div>
                        <div className={linkContent}>
                            <h2>جوابگوی سوالات پیوسته اهل دنیا</h2>
                            <p>جوابگوی سوالات پیوسته اهل دنیا</p>
                        </div>
                    </div>
                    <div className={link}>
                        <div className={linkPhoto}>
                            <img src={database[0].artwork} alt='Example' />
                        </div>
                        <div className={linkContent}>
                            <h2>جوابگوی سوالات پیوسته اهل دنیا</h2>
                            <p>جوابگوی سوالات پیوسته اهل دنیا</p>
                        </div>
                    </div>
                    <div className={link}>
                        <div className={linkPhoto}>
                            <img src={database[0].artwork} alt='Example' />
                        </div>
                        <div className={linkContent}>
                            <h2>جوابگوی سوالات پیوسته اهل دنیا</h2>
                            <p>جوابگوی سوالات پیوسته اهل دنیا</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RapWVise;