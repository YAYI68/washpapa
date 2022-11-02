import { auth, db } from "../config/firebaseConfig";
import { sendSignInLinkToEmail } from "firebase/auth";
import { ref, set } from "firebase/database";


const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'http://localhost:3000/account/login',
    // This must be true.
    handleCodeInApp: false,
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },
    // dynamicLinkDomain: 'example.page.link'
  };

export const signup = async (data)=>{
    const { email, password, phone } = data;
    try{
        const user = await sendSignInLinkToEmail(auth,email,actionCodeSettings)
        localStorage.setItem('emailForSignIn', email);
        const userRef = ref(db,`Users`);
         await set(userRef,{
            email,
            phone,
            balance,
            userName:"",
            balance:500,
         })
    }
    catch(error){

    }



       

}



export const signIn = async(data)=>{
    const { email, password, phoneNumber } = data

    try{

        if(!email || !email.includes("@") || 
        !password || password.trim().length <  7){
            res.status(422).json({ message:"Invalid email or password"})
        }


    }
    catch(error){



    }
}

export const signOut = ()=>{

}