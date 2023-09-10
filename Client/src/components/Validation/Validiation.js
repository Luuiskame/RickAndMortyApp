
const validation = (userData)=>{
    const errors = {}
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
        errors.email = "Email not valid"
    }

    if(!userData.email){
        errors.email = "please enter your email"
    }

    if(userData.email.length > 35){
        errors.email = "Email not valid"
    }
    if(! /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userData.password)){
        errors.password = "The password needs to include at least one number"
    }

    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = "The password needs to be longer than 6 characters and less than 10"
    }
    return errors
}

export default validation