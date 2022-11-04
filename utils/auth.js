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
   
   //  const data = dataSnapshot
   //  dataSnapshot.forEach((snapshot)=>{
   //    console.log(snapshot.val())
   //  })

   const q = query(ref(db, 'Users'),orderByChild("email"),equalTo(`${newEmail}`));
   const users  = await get(q)
   const userList = []
   users.forEach((user)=>{   
      userList.push(user.val())
   })
   const user = userList[0]
   console.log(user)
   return {
      isValid:users.exists(),
      user:user,
   }
   // console.log(users.exists())

}