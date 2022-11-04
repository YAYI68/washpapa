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
   try{
      const q = query(ref(db, 'Users'),orderByChild("email"),equalTo(`${newEmail}`));
      const users  = await get(q)
      const userList = []
      if(users.exists()){
         users.forEach((user)=>{   
            userList.push(user.val())
         })
      }
      const user = userList[0]
      return {
         isValid:users.exists(),
         user:user,
      }
   }
   catch(error){
      return {
         error:error
      }
   }

}






