import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Card.module.scss'
import { commentDB } from '../database/commentDB';

const CommentCard = (props) => {

    const {card, cardPhoto, cardContent, cardTitle, cardSubtitle, cards} = styles;

    return (
        <>
            <div className={cards}>
                {commentDB.map(comment =>
                    <Link to={`/comments/${comment.id}`} key={comment.id}>
                        <div className={card}>
                            <div className={cardPhoto}>
                                <img src={comment.artwork} alt="Artwork" />
                            </div>
                            <div className={cardContent}>
                                <h2 className={cardTitle}>{comment.commentNumber}</h2>
                                <p className={cardSubtitle}>{comment.commentSubject} از {comment.commentSubtitle}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
};

export default CommentCard;