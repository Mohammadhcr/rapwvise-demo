import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Card.module.scss'

const Card = (props) => {

    const {card, cardPhoto, cardContent, cardTitle, cardP} = styles;
    const {artwork, artist, album, id} = props;

    return (
        <Link to={`/hamseda/${id}`}>
            <div className={card}>
                <div className={cardPhoto}>
                    <img src={artwork} alt="Artwork" />
                </div>
                <div className={cardContent}>
                    <h2 className={cardTitle}>{album}</h2>
                    <h3 className={cardP}>{artist}</h3>
                </div>
            </div>
        </Link>
    );
    
};

export default Card;