import React, { useEffect } from 'react';

import CommentCard from '../components/CommentCard';
import styles from '../styles/Items.module.scss';
import Footer from '../components/Footer';

const Comments = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const {itemContainer, itemText, itemTitle} = styles;

    return (
        <>
            <div className={itemContainer}>
                <div className={itemTitle}>
                        <h2>نظرات کاربران</h2>
                    </div>
                    <div className={itemText}>
                        <p>در این بخش نظرات کاربران رپ وایز رو راجع به موسیقی رپ منعکس می کنیم</p>
                    </div>
                <CommentCard />
            </div>
            <Footer />
        </>
    );
};

export default Comments;