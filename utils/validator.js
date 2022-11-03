import { StateContext } from "../context/ContextProvider"

export const authvalidator = (result, setMessage,)=>{
    if(result.inValidMessage) {
        setMessage({error:result.inValidMessage})
        setTimeout(()=>{
            setMessage("")
        },10000)
      }
      if(result.emailCheck){
        setMessage({success:result.emailCheck})
        setTimeout(()=>{
            setMessage({error:""})
        },10000)
     }
     
      if(result.user){
        setMessage({success:result.success})
        setTimeout(()=>{
            setMessage({success:""})
        },10000)
      }  
     if(result.errorMessage){  
        setMessage({error:result.errorMessage})
        setTimeout(()=>{
            setMessage("")
        },10000)
     }


}