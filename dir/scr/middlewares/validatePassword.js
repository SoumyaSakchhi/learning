const validatePwd= (req, res, next)=> {
    const password= req.body.password;
    if(!password)
        return res.send({"Message": "Password Missing"});
    if(password.length< 8)
        return res.send({"Message": "Password should be atleast 8 characters long."});
    next();
}

module.exports= validatePwd;