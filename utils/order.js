function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const currentDate = ()=>{
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1 }-${date.getDate()}`
}

export const  generateId = (userEmail)=>{
    let email = userEmail.substring(0,3)
    const dateString = currentDate()
    const randomChar = makeid(10)
    return `WP-${email}-${dateString}-${randomChar}`
}

