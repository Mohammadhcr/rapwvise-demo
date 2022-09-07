import React from 'react';

import Card from './Card';
import styles from '../styles/Cards.module.scss'
import database from './database';

const Cards = () => {
    return (
        <>
        <section>
            <div className={styles.sectionTitle}>
                <h2>پادکست ها</h2>
            </div>
            <div className={styles.cards}>
                {database.map(card => <Card key={card.id} id={card.id} album={card.album} artist={card.artist} artwork={card.artwork} />)}
            </div>
        </section>
        </>
    );
    
};

export default Cards;