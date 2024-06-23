import React, { useEffect } from 'react';
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
    `;

const Comment = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const params = useParams();

    const {wrapper, info, album, artist, description, artwork, statick, comment, commentContainer, commentParagraph} = styles;

    const data = commentDB[params.id - 1];
    
    return (
        <Background>
            <div className={wrapper}>
                <div className={info}>
                    <h2 className={album}>{data.commentSubject}</h2>
                    <h3 className={artist}>{data.commentSubtitle}</h3>
                    <div className={description}>
                            <span>
                                <span className={statick}>تاریخ انتشار:</span>
                                {data.releaseDate}
                            </span>
                    </div>
                    {data.commentBody.map(commentPost =>
                        <div className={commentContainer} key={commentPost.user}>
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg' alt='User Avatar' />
                            <div className={comment}>
                                <h2>{commentPost.user}</h2>
                                <p className={commentParagraph}>
                                    {commentPost.body}
                                </p>
                                <i className='bx bxs-moon'></i>
                            </div>
                        </div>
                    )}
                </div>
                <div className={artwork}>
                    <img src={data.artwork} alt="artwork" />
                </div>
            </div>
        </Background>
    );
};

export default Comment;
