import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Card.module.scss'
import { top10DB } from '../database/top10DB';

const Top10Card = (props) => {

    const {card, cardPhoto, cardContent, cardTitle, cardSubtitle, cardP, cards} = styles;

    return (
        <>
            <div className={cards}>
                {top10DB.map(article =>
                    <Link to={`/top10s/${article.id}`}>
                        <div className={card}>
                            <div className={cardPhoto}>
                                <img src={article.artwork} alt="Artwork" />
                            </div>
                            <div className={cardContent}>
                                <h2 className={cardTitle}>{article.articleSubject}</h2>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
    
};

export default Top10Card;