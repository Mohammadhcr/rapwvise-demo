export const validateUser = (data) => {

    const errors = {};

    if (!data.name.trim()) {
        errors.name = "لطفا نام خود را وارد کنید"
    } else{
        delete errors.name
    }

    if (!data.email.trim()) {
        errors.email = "لطفا ایمیل خود را وارد کنید"
    } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data.email)){
        errors.email = "آدرس ایمیل نا معتبر است"
    } else{
        delete errors.email
    }

    if (!data.password.trim()) {
        errors.password = "وارد کردن رمز اجباریست"
    } else if(!/^(?!.* )(?=.*\d)(?=.*[a-zA-Z]).{10,}$/g.test(data.password)){
        errors.password = "رمز شما باید بیشتر از ده کاراکتر و شامل عدد و حروف باشد"
    } else{
        delete errors.password
    }

    if (!data.confirmPass.trim()) {
        errors.confirmPass = "لطفا رمز خود را تایید کنید"
    } else if(data.confirmPass !== data.password){
        errors.confirmPass = "رمز ها مطابقت ندارند"
    } else{
        delete errors.confirmPass
    }

    return errors;
};