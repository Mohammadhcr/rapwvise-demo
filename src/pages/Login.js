import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Login.module.scss'

const Login = () => {

    const {lForm, login, title, inputs, submit, options, socialLoginButtons, socialLoginButton, google, facebook, apple, bxl, bxlLog, placeholder, input} = styles;

    return (
        <form className={lForm}>
            <div className={login}>
                <div className={title}>
                    <h1>ورود به رپوایز</h1>
                </div>
                <div className={inputs}>
                    <div className={input}>
                        <span className={placeholder}>نام کاربری:</span>
                        <div>
                            <i className='bx bx-user'></i>
                            <input type="text" name="username" placeholder="" />
                        </div>
                    </div>
                    <div className={input}>
                        <span className={placeholder}>رمز عبور:</span>
                        <div>
                            <i className='bx bx-lock-alt'></i>
                            <input type="password" name="password" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className={submit}>
                    <button type="submit"><i className={`bx bx-log-in-circle ${bxlLog}`}></i> ورود به حساب</button>
                </div>
                <div className={options}>
                    <p>حساب کاربری ندارید؟ <Link to="/signup">ثبت نام</Link></p>
                </div>
                <div className={socialLoginButtons}>
                    <button className={`${socialLoginButton} ${google}`}><i className={`bx bxl-google ${bxl}`}></i> ورود با گوگل</button>
                    <button className={`${socialLoginButton} ${apple}`}><i className={`bx bxl-apple ${bxl}`}></i> ورود با اپل</button>
                    <button className={`${socialLoginButton} ${facebook}`}><i className={`bx bxl-facebook ${bxl}`}></i> ورود با فیس بوک</button>
                </div>
            </div>
        </form>
    );
};

export default Login;