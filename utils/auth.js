import { hash, compare } from "bcryptjs";
import { equalTo, get, orderByChild, query, ref } from "firebase/database";
import { auth, db } from "../config/firebaseConfig";


export async function hashPassword(password){
    const hashedPassword = await hash(password,12)
  return hashedPassword
}

export async function verifyPassword(password,hashedPassword){
   const isValid = await compare(password,hashedPassword)
   return isValid;
}

export async function verifyEmail(newEmail){

    const dbRef = ref(db,`Users`);
   
    // const data = dataSnapshot
    // dataSnapshot.forEach((snapshot)=>{
    //   console.log(snapshot.val())
    // })

   const q = query(ref(db, 'Users'),orderByChild("email"),equalTo(`${newEmail}`));
   const user  = await get(q)
   const {...userInfo} = user.val();
   console.log(userInfo)
   console.log(user.exists())

}