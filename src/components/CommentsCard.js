import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Card.module.scss'
import { commentsDB } from '../database/commentsDB';

const CommentsCard = (props) => {

    const {card, cardPhoto, cardContent, cardTitle, cardSubtitle, cardP, cards} = styles;

    return (
        <>
            <div className={cards}>
                {commentsDB.map(comment =>
                    <Link to={`/comments/${comment.id}`}>
                        <div className={card}>
                            <div className={cardPhoto}>
                                <img src={comment.artwork} alt="Artwork" />
                            </div>
                            <div className={cardContent}>
                                <h2 className={cardTitle}>{comment.episodeNumber}</h2>
                                <p className={cardSubtitle}>{comment.episodeName}</p>
                                <p className={cardP}>{comment.episodeDescription}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
    
};

export default CommentsCard;