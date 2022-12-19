import dateFormat from "dateformat";

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

export const discountAmount = (point,price)=>{
    let discountPrice;
    let discountPoint;

    if(point > 200){
        discountPrice = price - 500
        discountPoint = point - 200
        return {discountPoint,discountPrice}
    }
    discountPoint= point;
    discountPrice= price;
    return {discountPoint,discountPrice}
}

export const  stringDate = ()=>{
    const now = new Date();
   const date = dateFormat(now, "dd-mm-yyyy");
   return date
}

