import React from 'react';
import { useParams } from 'react-router-dom';

import { commentsDB } from '../database/commentsDB'

import styled from 'styled-components';
import styles from '../styles/Podcast.module.scss';

const Background = styled.div`
        width: 100%;
        height: 100vh;
        background: var(--bodyBack);
        letter-spacing: 0.5px;
        transition: all 0.3s;

        @media screen and (min-width: 120px) and (max-width: 780px){
            height: auto;
        }
    `;

const Comment = () => {

    const params = useParams();

    const {wrapper, info, album, artist, description, artwork, statick} = styles;

    const data = commentsDB[params.id - 1];
    
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
                </div>
                <div className={artwork}>
                    <img src={data.artwork} alt="artwork" />
                </div>
            </div>
        </Background>
    );
};

export default Comment;