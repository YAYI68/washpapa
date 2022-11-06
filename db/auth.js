import { auth, db } from "../config/firebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,signOut,sendPasswordResetEmail, updatePassword   } from "firebase/auth";
import { child, get, ref, set } from "firebase/database";
import Cookies from 'js-cookie';




export const signup = async (data)=>{
    const { email, password, phone } = data;
 
    try{  
        if(!email || !email.includes("@")){
         return{
            loading:false,
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
        loading:false,
        user : userCredential.user,
        success:"Account signUp Successfully check your email inbox or spam to verify your account and sign in",     
    }    
    }
    catch(error){
        console.log({error})
        if(error.code==="auth/weak-password"){
         return{
            loading:false,
            errorMessage: "Password should be at least 7 characters"
         }
        }
        else if(error.code === "auth/email-already-in-use"){
            return{
                loading:false,
                errorMessage: "Email already in use, SignIn into account with that email"
            }
        }
    }   
   
}



export const logIn = async({email,password})=>{

    try{
      const userCredential = await signInWithEmailAndPassword(auth,email,password)
      if(!userCredential.user.emailVerified){
          return {
            loading:false,
            emailCheck:"Check your email or spam to activate your account",    
          }
      }
      else{
        const token = await userCredential.user.getIdToken()
        Cookies.set("authToken",token,{expires:15})
        const userRef = ref(db)
        const snapshot = await get(child(userRef,`Users/${userCredential.user.uid}`))
        const user = snapshot.val();
        return {
            loading:false,
            user:user,
            success:"User signed in successfully"
        }
      }
    }
    catch(error){
        console.log({error})
        if(error.code === "auth/wrong-password"){
            return {
                loading:false,
                errorMessage:"Invalid email / wrong password"
            }
        }
        if(error.code === "auth/network-request-failed"){
            return {
                loading:false,
                errorMessage:"Poor or No Internet Access. Check your internet connection and try again"
            }
        }
        
    }
    return{  loading:true,} 
}


export const logOut = async()=>{
    await signOut (auth)
    localStorage.removeItem("userInfo")
    Cookies.remove("authToken")
}



export async function forgetPasswordReset(email){
    try{
        if(!email || !email.includes("@")){
            return{
               loading:false,
               inValidMessage: "Invalid email address / Password"
            }
           }
       await  sendPasswordResetEmail(auth, email)
       return {
        loading:false,
        success: "Password reset email sent"
       }
    }
    catch(error){
       const errorCode = error.code;
       if(errorCode === "auth/user-not-found"){
          return{
             loading:false,
             errorMessage:"User not found",
          }
 
       }
    }
 }



 export async function resetPassword(newPassword){
    try{
        if(!newPassword || !newPassword.trim().length < 7){
            return{
               loading:false,
               inValidMessage: "Password should be at least 7 characters"
            }
           }
          const user = auth.currentUser 
       await  updatePassword(user, newPassword)
       return {
        loading:false,
        success: "Password reset email set successfully"
       }
    }
    catch(error){
       const errorCode = error.code;
       console.log({errorCode})
        return {
            loading:false,
            errorMessage:errorCode,
        }
    //    if(errorCode === "auth/user-not-found"){
    //       return{
    //          loading:false,
    //          errorMessage:"User not found",
    //       }
 
    //    }
    }
 }