import { auth, db } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,signOut   } from "firebase/auth";
import { ref, set } from "firebase/database";


export const signup = async (data)=>{
    const { email, password, phone } = data;
    try{  
        if(!email || !email.includes("@")){
         return{
            inValidMessage: "Invalid email address"
         }
        }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password) 
      await  set(ref(db, 'Users/' + userCredential.user.uid), {
        email,
        phone,
        userName:"",
        balance:500,
        uid:userCredential.user.uid,
      });
     await sendEmailVerification(auth.currentUser)
       return {
        user : userCredential.user,
        success:"Account signUp Successfully check your email to verify your account",     
    }    
    }
    catch(error){
        console.log({error})
        if(error.code==="auth/weak-password"){
         return{
            errorMessage: "Password should be at least 6 characters"
         }
        }
        else if(error.code === "auth/email-already-in-use"){
            return{
                errorMessage: "Email already in use, SignIn into account with that email"
            }
        }
    }    
}

export const signIn = async({email,password})=>{
    try{
        if(!email || !email.includes("@") || 
        !password || password.trim().length <  7){
         return{
            inValidMessage: "Invalid email address / Password"
         }
        }
      const userCredential = await signInWithEmailAndPassword(auth,email,password)
      return {
        user: userCredential.user,
        success:"User signed in successfully"
      }
    }
    catch(error){
        return {
            error:error.message,
        }
    }
}

export const logOut = async()=>{
    await signOut (auth)
}