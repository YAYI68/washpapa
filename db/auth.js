import { auth, db } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import { ref, set } from "firebase/database";


export const signup = async (data)=>{
    const { email, password, phone } = data;
    console.log({email, phone})
    try{  
      const userCredential = await createUserWithEmailAndPassword(auth, email, password) 
      await  set(ref(db, 'Users/' + userCredential.user.uid), {
        email,
        phone,
        userName:"",
        balance:500,
        uid:userCredential.user.uid,
      });
     await sendEmailVerification(auth.currentUser)
       return userCredential.user     
    }
    catch(error){
        return error;
    }    
}



export const signIn = async(data)=>{
    const { email, password, phoneNumber } = data;
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