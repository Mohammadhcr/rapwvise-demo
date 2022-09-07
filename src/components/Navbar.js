import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Navbar.module.scss'

const Navbar = (props) => {

    const [menu, setMenu] = useState(false);

    const {leftSide, logoTitle, rightSide, toggle, hamburgerMenu, menuList, menuListActive, hamburgerMenuActive, toggleActive, bxMoon, bxSun, menuItems, menuUser} = styles;

    const clickHandler = () =>{
        setMenu(!menu);
    }
    
    return (
        <>
            <div className={`${menuList} ${menu ? `${menuListActive}` : ""}`}>
                <ul className={menuItems}>
                    <Link to="/hamseda" onClick={clickHandler}><li><i className='bx bx-podcast'></i> پادکست همصدا</li></Link>
                    <Link to="/comments" onClick={clickHandler}><li><i className='bx bx-message-dots'></i> نظرات</li></Link>
                    <Link to="/notes" onClick={clickHandler}><li><i className='bx bx-notepad'></i> یادداشت ها</li></Link>
                    <Link to="/aboutus" onClick={clickHandler}><li><i className='bx bx-info-circle'></i> درباره ما</li></Link>
                </ul>
                <ul className={menuUser}>
                    <Link to="/login" onClick={clickHandler}><li><i className='bx bx-user'></i> ورود</li></Link>
                    <Link to="/signup" onClick={clickHandler}><li><i className='bx bx-user-plus'></i> ثبت نام</li></Link>
                </ul>
            </div>
            <header>
                <div className={leftSide}>
                    <div className={`${hamburgerMenu} ${menu ? `${hamburgerMenuActive}` : ""}`} onClick={clickHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={logoTitle}>
                        <Link to="/">
                            <h1>رپ وایز</h1>
                        </Link>
                    </div>
                </div>
                <div className={rightSide}>
                    <nav>
                        <ul>
                            <li><Link to="/hamseda"><i className='bx bx-podcast'></i> پادکست همصدا</Link></li>
                            <li><Link to="/comments"><i className='bx bx-message-dots'></i> نظرات</Link></li>
                            <li><Link to="/notes"><i className='bx bx-notepad'></i> یادداشت ها</Link></li>
                            <li><Link to="/aboutus"><i className='bx bx-info-circle'></i> درباره ما</Link></li>
                            <li><Link to="/login"><i className='bx bx-user'></i> ورود</Link></li>
                            <li><Link to="/signup"><i className='bx bx-user-plus'></i> ثبت نام</Link></li>
                        </ul>
                    </nav>
                    <div className={`${toggle} ${props.theme ? `${toggleActive}` : ""}`}>
                        <span onClick={props.toggle}>
                            <i className={`bx bx-moon ${bxMoon}`}></i>
                            <i className={`bx bx-sun ${bxSun}`}></i>
                        </span>
                    </div>
                </div>
            </header>
        </>
    );

};

export default Navbar;