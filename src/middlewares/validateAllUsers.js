const validateUsers= (req, res, next)=> {
    const data= req.body.data;
    for(let i of data){
        const username= i.username.trim();
        const password= i.password;
        const eduInfo= i.eduInfo;
        const personalInfo= i.personalInfo;

        console.log(i);

        if(!username || !password || !eduInfo || !personalInfo)
            return res.send({"Message": "Information Missing."});
        if(password.length< 8)
            return res.send({"Message": "Password should be atleast 8 characters long."});
    }
    next();
}

module.exports= validateUsers;