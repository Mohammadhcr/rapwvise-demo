import React from 'react';
import { useParams } from 'react-router-dom';

import { commentDB } from '../database/commentDB'

import styled from 'styled-components';
import styles from '../styles/Comment.module.scss';

const Background = styled.div`
        width: 100%;
        min-height: 100vh;
        background: var(--bodyBack);
        letter-spacing: 0.5px;
        transition: all 0.3s;

        @media screen and (min-width: 120px) and (max-width: 780px){
            height: auto;
        }
    `;

const Comment = () => {

    const params = useParams();

    const {wrapper, info, album, artist, description, artwork, statick, comment, commentParagraph} = styles;

    const data = commentDB[params.id - 1];
    
    return (
        <Background>
            <div className={wrapper}>
                <div className={info}>
                    <h2 className={album}>{data.commentNumber}</h2>
                    <h3 className={artist}>{data.commentSubject} از {data.commentSubtitle}</h3>
                    <div className={description}>
                            <span>
                                <span className={statick}>تاریخ انتشار:</span>
                                {data.releaseDate}
                            </span>
                    </div>
                    <div className={comment}>
                        <p className={commentParagraph}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>
                        <i class='bx bxs-moon'></i>
                    </div>
                    <div className={comment}>
                        <p className={commentParagraph}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>
                        <i class='bx bxs-moon'></i>
                    </div>
                    <div className={comment}>
                        <p className={commentParagraph}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد
                        </p>
                        <i class='bx bxs-moon'></i>
                    </div>
                </div>
                <div className={artwork}>
                    <img src={data.artwork} alt="artwork" />
                </div>
            </div>
        </Background>
    );
};

export default Comment;