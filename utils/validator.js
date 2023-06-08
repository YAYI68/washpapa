

export const authvalidator = (result, toast)=>{
    if(result.inValidMessage) {
        toast.error(result.inValidMessage)     
      }
      if(result.emailCheck){
         toast.success(result.emailCheck)
     }    
      if(result.success){
        toast.success(result.success)
      }  
     if(result.errorMessage){  
        toast.error(result.errorMessage)
     }
}




