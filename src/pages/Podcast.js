import React from 'react';
import { useParams } from 'react-router-dom';

import database from '../components/database'

import styled from 'styled-components';
import styles from '../styles/Podcast.module.scss';

const Background = styled.div`
        width: 100%;
        height: 100vh;
        background: var(--bodyBack);
        letter-spacing: 0.5px;
        transition: all 0.3s;

        @media screen and (min-width: 120px) and (max-width: 780px){
            height: auto;
        }
    `;

const Album = () => {

    const params = useParams();

    const {wrapper, info, album, artist, description, links, artwork, avai, statick, buySection, purchase, priceone, pricetwo, purchased} = styles;

    const data = database[params.id - 1]
    
    return (
        <Background>
            <div className={wrapper}>
                <div className={info}>
                    <h1 className={album}>{data.album}</h1>
                    <h2 className={artist}>{data.artist}</h2>
                    <div className={description}>
                        <div>
                            <span>
                                <span className={statick}>تاریخ انتشار:</span>
                                {data.year}
                            </span>
                        </div>
                    </div>
                    
                    <h2 className={avai}>شنیدن پادکست:</h2>
                    <div className={links}>
                        <a href={data.spotify} target="_blank"><i className='bx bxl-spotify'></i> اسپاتیفای</a>
                        <a href={data.apple} target="_blank"><i className='bx bxl-apple'></i> اپل پادکست</a>
                        <a href={data.soundcloud} target="_blank"><i className='bx bxl-soundcloud'></i> ساندکلاد</a>
                    </div>
                </div>
                <div className={artwork}>
                    <img src={data.artwork} alt="artwork" />
                </div>
            </div>
        </Background>
    );
};

export default Album;