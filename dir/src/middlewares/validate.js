const validateParameters= (req, res, next)=> {
    const username= (req.body.username).trim();
    const password= req.body.password;
    const eduInfo= req.body.eduInfo;
    const personalInfo= req.body.personalInfo;

    if(!username || !password || !eduInfo || !personalInfo){
        console.log("Information Missing.");
        return res.send({"Message": "Information Missing."});
    }
    if(password.length< 8){
        console.log("Password should be atleast 8 characters long.");
        return res.send({"Message": "Password should be atleast 8 characters long."});
    }
		
    next();
}

module.exports= validateParameters;