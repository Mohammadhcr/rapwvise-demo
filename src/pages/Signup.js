import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Signup.module.scss';
import { validateUser } from '../helper/validateUser';

const Signup = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const {sForm, signup, title, inputs, submit, options, socialLoginButtons, errMsg, socialLoginButton, google, apple, bxl, input, placeholder, leftSide, rightSide} = styles;

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPass: "",
        isLoggedIn: false
    });

    const [error, setError] = useState({});

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const signupAuthentication = (e) => {

        e.preventDefault()
        setError(validateUser(user))

        if(!Object.keys(error).length){
            setUser({...user, isLoggedIn: true});
        }
    }

    return (
        <form className={sForm}>
            <div className={signup}>
                <div className={leftSide}>
                    <div className={title}>
                        <h1>ثبت نام در رپوایز</h1>
                    </div>
                    <div className={inputs}>
                        <div className={input}>
                            <span className={placeholder}>نام:</span>
                            <div>
                                <i className='bx bx-user'></i>
                                <input maxLength="20" value={user.name} onChange={changeHandler} type="text" name="name" placeholder="" />
                            </div>
                            <span className={errMsg}>
                                {error.name && error.name}
                            </span>
                        </div>
                        <div className={input}>
                            <span className={placeholder}>ایمیل:</span>
                            <div>
                                <i className='bx bx-envelope'></i>
                                <input value={user.email} onChange={changeHandler} type="email" name="email" placeholder="" />
                            </div>
                            <span className={errMsg}>
                            {error.email && error.email}
                            </span>
                        </div>
                        <div className={input}>
                            <span className={placeholder}>رمز عبور:</span>
                            <div>
                                <i className='bx bx-lock-alt' ></i>
                                <input value={user.password} onChange={changeHandler} type="password" name="password" placeholder="" />
                            </div>
                            <span className={errMsg}>
                            {error.password && error.password}
                            </span>
                        </div>
                        <div className={input}>
                            <span className={placeholder}>تایید رمز عبور:</span>
                            <div>
                                <i className='bx bxs-lock-alt'></i>
                                <input value={user.confirmPass} onChange={changeHandler} type="password" name="confirmPass" placeholder="" />
                            </div>
                            <span className={errMsg}>
                            {error.confirmPass && error.confirmPass}
                            </span>
                        </div>
                    </div>
                    <div className={submit}>
                        <button type="submit" onClick={signupAuthentication}>ساخت حساب کاربری</button>
                    </div>
                </div>
                <div className={rightSide}>
                    <div className={socialLoginButtons}>
                        <button className={`${socialLoginButton} ${google}`}><i className={`bx bxl-google ${bxl}`}></i> ثبت نام با گوگل</button>
                        <button className={`${socialLoginButton} ${apple}`}><i className={`bx bxl-apple ${bxl}`}></i> ثبت نام با اپل</button>
                    </div>
                    <div className={options}>
                        <p>قبلا ثبت نام کردید؟ <Link to="/login">ورود</Link></p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Signup;