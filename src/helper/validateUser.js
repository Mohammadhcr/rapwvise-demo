export const validateUser = (data) => {

    const errors = {};

    if (!data.name.trim()) {
        errors.name = "نام خود را وارد کنید"
    } else{
        delete errors.name
    }

    if (!data.email) {
        errors.email = "ایمیل خود را وارد کنید"
    }
    // eslint-disable-next-line
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data.email)){
        errors.email = "آدرس ایمیل نامعتبر است"
    } else{
        delete errors.email
    }

    if (!data.password) {
        errors.password = "وارد کردن رمز اجباریست"
    } else if(!/^(?!.* )(?=.*\d)(?=.*[a-zA-Z]).{10,}$/g.test(data.password)){
        errors.password = "رمز شما باید حداقل ده کاراکتر و شامل عدد و حروف باشد"
    } else{
        delete errors.password
    }

    if (!data.confirmPass) {
        errors.confirmPass = "رمز خود را تایید کنید"
    } else if(data.confirmPass !== data.password){
        errors.confirmPass = "رمز‌ها مطابقت ندارند"
    } else{
        delete errors.confirmPass
    }

    return errors;
};