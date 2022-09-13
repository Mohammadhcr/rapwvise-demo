import React from 'react';
import { useParams } from 'react-router-dom';

import { hamsedaDB } from '../database/hamsedaDB'

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

const Podcast = () => {

    const params = useParams();

    const {wrapper, info, album, artist, description, links, artwork, avai, statick, spotify, applePod, soundCloud} = styles;

    const data = hamsedaDB[params.id - 1];
    
    return (
        <Background>
            <div className={wrapper}>
                <div className={info}>
                    <h2 className={album}>{data.episodeNumber}</h2>
                    <h3 className={artist}>{data.episodeName}</h3>
                    <div className={description}>
                            <span>
                                <span className={statick}>{data.episodeDescription}</span>
                            </span>
                            <span>
                                <span className={statick}>تاریخ انتشار:</span>
                                {data.releaseDate}
                            </span>
                    </div>
                    
                    <h2 className={avai}>شنیدن پادکست:</h2>
                    <div className={links}>
                        <a className={spotify} href={data.spotify} target="_blank"><i className='bx bxl-spotify'></i> اسپاتیفای</a>
                        <a className={applePod} href={data.apple} target="_blank"><i className='bx bxl-apple'></i> اپل پادکست</a>
                        <a className={soundCloud} href={data.soundcloud} target="_blank"><i className='bx bxl-soundcloud'></i> ساندکلاد</a>
                    </div>
                </div>
                <div className={artwork}>
                    <img src={data.artwork} alt="artwork" />
                </div>
            </div>
        </Background>
    );
};

export default Podcast;