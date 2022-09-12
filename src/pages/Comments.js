import React from 'react';

import CommentsCard from '../components/CommentsCard';
import styles from '../styles/Comments.module.scss';

const Comments = () => {

    const {cContainer, commentTitle, commentText} = styles;

    return (
        <div className={cContainer}>
            <div className={commentTitle}>
                    <h2>نظرات کاربران</h2>
                </div>
                <div className={commentText}>
                    <p>در این بخش نظرات کاربران رپ وایز رو راجع به موسیقی رپ منعکس می کنیم</p>
                </div>
            <CommentsCard />
        </div>
    );
};

export default Comments;