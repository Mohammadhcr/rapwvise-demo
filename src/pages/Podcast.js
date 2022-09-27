import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { hamsedaDB } from '../database/hamsedaDB';

import styled from 'styled-components';
import styles from '../styles/Podcast.module.scss';

const Background = styled.div`
        width: 100%;
        min-height: 100vh;
        background: var(--bodyBack);
        transition: all 0.3s;
    `;

const Podcast = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const params = useParams();

    const {wrapper, info, album, artist, description, links, artwork, avai, statick, episodeDesc, podcastInfo, spotify, applePod, soundCloud} = styles;

    const data = hamsedaDB[params.id - 1];
    
    return (
        <Background>
            <div className={wrapper}>
                <div className={info}>
                    <div className={podcastInfo}>
                        <h2 className={album}>{data.episodeNumber}</h2>
                        <h3 className={artist}>{data.episodeName}</h3>
                        <p className={episodeDesc}>{data.episodeDescription}</p>
                    </div>
                    <div className={description}>
                        <span>
                            <span className={statick}>تاریخ انتشار:</span>
                            {data.releaseDate}
                        </span>
                    </div>
                    
                    <h2 className={avai}>شنیدن پادکست:</h2>
                    <div className={links}>
                        <a className={spotify} href={data.spotify} target="_blank" rel="noopener noreferrer"><i className='bx bxl-spotify'></i> اسپاتیفای</a>
                        <a className={applePod} href={data.apple} target="_blank" rel="noopener noreferrer"><i className='bx bxl-apple'></i> اپل پادکست</a>
                        <a className={soundCloud} href={data.soundcloud} target="_blank" rel="noopener noreferrer"><i className='bx bxl-soundcloud'></i> ساندکلاد</a>
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