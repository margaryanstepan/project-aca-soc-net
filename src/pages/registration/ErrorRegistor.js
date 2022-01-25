const ErrorRegistor = (data, dataFetch) => {
    let errors = {};

    if (!data.firstName) {
        errors.firstName="First name is required"
    }
    if (!data.lastName) {
        errors.lastName="Last name is required"
    }
    if (!data.nickname) {
        errors.nickname="nickName is required"
    }
    if (!data.email) {
        errors.email="Email  is required"

    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email="Email is invalid"
    }
    if (!data.password) {
        errors.password="password is invalid"
    } else if(data.password.length < 6) {
        errors.password = "Password must be more than six characters"
    }
    if (data.againPassword !== data.password) {
         errors.againPassword="pasword no smoot..."
    }
    if (!data.gender) {
        errors.gender="Gendeer is required"
    }
    if (!data.datatBirthday) {
        errors.datatBirthday="Birthday is required"
    }

        dataFetch.filter( item => {
        
        if ( data.nickname === item.nickname) {
            errors.nickname = "nickName asifjoisfngo"
        }
        if ( data.email === item.email) {
             errors.email = "email asdasfjasdfjjkm"
        } } ) 
        
    return errors;
}

export default ErrorRegistor;