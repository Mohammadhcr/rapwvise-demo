import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Card.module.scss';
import { articleDB } from '../database/articleDB';

const ArticleCard = (props) => {

    const {card, cardPhoto, cardContent, cardTitle, cards} = styles;

    return (
        <>
            <div className={cards}>
                {articleDB.map(article =>
                    <Link to={`/articles/${article.id}`} key={article.id}>
                        <div className={card}>
                            {/* <div className={cardPhoto}>
                                <img src={article.artwork} alt="Artwork" />
                            </div> */}
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

export default ArticleCard;