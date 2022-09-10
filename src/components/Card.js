import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Card.module.scss'
import database from './database';

const Card = (props) => {

    const {card, cardPhoto, cardContent, cardTitle, cardSubtitle, cardP, cards} = styles;

    return (
        <>
            <div className={cards}>
                {database.map(podcast =>
                    <Link to={`/hamseda/${podcast.id}`}>
                        <div className={card}>
                            <div className={cardPhoto}>
                                <img src={podcast.artwork} alt="Artwork" />
                            </div>
                            <div className={cardContent}>
                                <h2 className={cardTitle}>{podcast.episodeNumber}</h2>
                                <p className={cardSubtitle}>{podcast.episodeName}</p>
                                <p className={cardP}>{podcast.episodeDescription}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
    
};

export default Card;