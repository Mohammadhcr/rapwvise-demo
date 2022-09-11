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
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
            <div className={hamseda}>
                <div className={hTitle}>
                    <h2>پادکست همصدا</h2>
                </div>
                <div className={hText}>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
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
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
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
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
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