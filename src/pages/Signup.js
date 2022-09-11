import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Signup.module.scss'

const Signup = () => {

    const {sForm, signup, title, inputs, submit, options, socialLoginButtons, socialLoginButton, google, facebook, apple, bxl, input, placeholder, leftSide, rightSide} = styles;

    const [user, setUser] = useState({
        key: "",
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPass: "",
    });

    if(user.password.length < 8){
        console.log("pass is weak")
    }

    if (user.confirmPass !== user.password){
        console.log("pass not match")
    }

    const createAccount = e => {
        e.preventDefault()

        console.log(user)

        fetch('#', {
          method: "POST",
          body: JSON.stringify(user)
        })
        
        .then(setUser({
            name: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPass: "",
        }))

        .then(res=>console.log(res))
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
                                <input maxLength="20" value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} type="text" name="username" placeholder="" />
                            </div>
                            {user.name.length < 3 || user.name.length > 20 ? "لطفا نام معتبر وارد کنید" : ""}
                        </div>
                        <div className={input}>
                            <span className={placeholder}>ایمیل:</span>
                            <div>
                                <i className='bx bx-envelope'></i>
                                <input value={user.email} onChange={e => setUser({ ...user, email: e.target.value })} type="email" name="email" placeholder="" />
                            </div>
                            {!user.email.includes("@") || !user.email.includes(".") || user.email.length < 7 ? "لطفا ایمیل معتبر وارد کنید" : ""}
                        </div>
                        <div className={input}>
                            <span className={placeholder}>شماره موبایل:</span>
                            <div>
                                <i className='bx bx-phone'></i>
                                <input maxLength="11" value={user.phoneNumber} onChange={e => setUser({ ...user, phoneNumber: e.target.value })} type="text" name="phoneNumber" placeholder="" />
                            </div>
                            <span>
                                {user.phoneNumber.length < 11 || (typeof (user.phoneNumber)) !== "string" ? "لطفا شماره تلفن معتبر وارد کنید" : ""}
                            </span>
                        </div>
                        <div className={input}>
                            <span className={placeholder}>رمز عبور:</span>
                            <div>
                                <i className='bx bx-lock-alt' ></i>
                                <input value={user.password} onChange={e => setUser({ ...user, password: e.target.value })} type="password" name="password" placeholder="" />
                            </div>
                            <span>
                                {user.password.length < 8 ? "پسورد شما ضعیف است" : ""}
                            </span>
                        </div>
                        <div className={input}>
                            <span className={placeholder}>تایید رمز عبور:</span>
                            <div>
                                <i className='bx bxs-lock-alt'></i>
                                <input value={user.confirmPass} onChange={e => setUser({ ...user, confirmPass: e.target.value })} type="password" name="confirmPassword" placeholder="" />
                            </div>
                            <span>
                                {user.password !== user.confirmPass ? "رمز ها یکسان نیستند" : ""}
                            </span>
                        </div>
                    </div>
                    <div className={submit}>
                        <button type="submit" onClick={createAccount}><i className='bx bx-plus'></i> ساخت حساب کاربری</button>
                    </div>
                </div>
                <div className={rightSide}>
                    <div className={socialLoginButtons}>
                        <button className={`${socialLoginButton} ${google}`}><i className={`bx bxl-google ${bxl}`}></i> ثبت نام با گوگل</button>
                        <button className={`${socialLoginButton} ${apple}`}><i className={`bx bxl-apple ${bxl}`}></i> ثبت نام با اپل</button>
                        <button className={`${socialLoginButton} ${facebook}`}><i className={`bx bxl-facebook ${bxl}`}></i> ثبت نام با فیس بوک</button>
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