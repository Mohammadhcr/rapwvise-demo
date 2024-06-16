import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Card.module.scss'
import { hamsedaDB } from '../database/hamsedaDB';

const HamsedaCard = (props) => {

    const {card, cardPhoto, cardContent, cardTitle, cardSubtitle, cards, cardP} = styles;

    return (
        <>
            <div className={cards}>
                {hamsedaDB.map(podcast =>
                    <Link to={`/hamseda/${podcast.id}`} key={podcast.id}>
                        <div className={card} style={{backgroundImage: `url(${podcast.artwork})`}}>
                            {/* <div className={cardPhoto}> */}
                                {/* <img src={comment.artwork} alt="Artwork" /> */}
                            {/* </div> */}
                            <div className={cardContent}>
                                <h2 className={cardTitle}>{podcast.episodeNumber}: {podcast.episodeName}</h2>
                                <p className={cardP}>مطالعه مطلب <i class='bx bxs-plane-alt'></i></p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </>
    );
};

export default HamsedaCard;
