

export function handler (req, res) {
    if(!req.method === "POST"){
        return
    }

    const {email,phoneNumber,password} = req.body;
    if(!email || !email.includes("@") || 
    !password || password.trim().length <  7){
        res.status(422).json({ message:"Invalid email or password"})
    }
   
    

}