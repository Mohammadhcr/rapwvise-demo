import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Login.module.scss'

const Login = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const {lForm, login, title, inputs, submit, options, socialLoginButtons, socialLoginButton, google, apple, bxl, placeholder, input} = styles;

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <form className={lForm}>
            <div className={login}>
                <div className={title}>
                    <h1>ورود به رپوایز</h1>
                </div>
                <div className={inputs}>
                    <div className={input}>
                        <span className={placeholder}>ایمیل:</span>
                        <div>
                            <i className='bx bx-user'></i>
                            <input type="email" name="email" value={user.email} onChange={changeHandler} />
                        </div>
                    </div>
                    <div className={input}>
                        <span className={placeholder}>رمز عبور:</span>
                        <div>
                            <i className='bx bx-lock-alt'></i>
                            <input type="password" name="password" value={user.password} onChange={changeHandler} />
                        </div>
                    </div>
                </div>
                <div className={submit}>
                    <button type="submit">ورود به حساب</button>
                </div>
                <div className={options}>
                    <p>حساب کاربری ندارید؟ <Link to="/signup">ثبت نام</Link></p>
                </div>
                <div className={socialLoginButtons}>
                    <button className={`${socialLoginButton} ${google}`}><i className={`bx bxl-google ${bxl}`}></i> ورود با گوگل</button>
                    <button className={`${socialLoginButton} ${apple}`}><i className={`bx bxl-apple ${bxl}`}></i> ورود با اپل</button>
                </div>
            </div>
        </form>
    );
};

export default Login;