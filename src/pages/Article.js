import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { articleDB } from '../database/articleDB'
// import styled from 'styled-components';
import styles from '../styles/Article.module.scss';

// const Background = styled.div`
//         width: 100%;
//         min-height: 100vh;
//         background: var(--bodyBack);
//         letter-spacing: 0.5px;
//         transition: all 0.3s;
//     `;

const Article = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const params = useParams();

    const {wrapper, info, album, description, artwork, statick, post, postParagraph} = styles;

    const data = articleDB[params.id - 1];
    
    return (
        // <Background>
            <div className={wrapper}>
                <div className={info}>
                    <h2 className={album}>{data.articleSubject}</h2>
                    <div className={description}>
                        <span>
                            <span className={statick}>دسته بندی:</span>
                            {data.articleCategory} 
                        </span>
                        <span>
                            <span className={statick}>تاریخ انتشار:</span>
                            {data.releaseDate}
                        </span>
                        <span>
                            <span className={statick}>نویسنده:</span>
                            {data.articleAuthor}
                        </span>
                    </div>
                    <div className={artwork}>
                        <img src={data.artwork} alt="artwork" />
                    </div>
                    <div className={post}>
                        <p className={postParagraph}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                </div>
            </div>
        // </Background>
    );
};

export default Article;