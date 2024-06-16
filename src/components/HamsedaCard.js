import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Card.module.scss'
import { hamsedaDB } from '../database/hamsedaDB';

const HamsedaCard = (props) => {

    const {card, cardPhoto, cardContent, cardTitle, cardP, cards} = styles;

    return (
        <>
            <div className={cards}>
                {hamsedaDB.map(podcast =>
                    <Link to={`/hamseda/${podcast.id}`} key={podcast.id}>
                        <div className={card}>
                            <div className={cardPhoto}>
                                <img src={podcast.artwork} alt="Artwork" />
                            </div>
                            <div className={cardContent}>
                                <h2 className={cardTitle}>{podcast.episodeNumber}: {podcast.episodeName}</h2>
                                <p className={cardP}>{podcast.episodeDescription}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
};

export default HamsedaCard;
