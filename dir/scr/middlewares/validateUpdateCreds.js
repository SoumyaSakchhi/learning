const paramValidate= (req, res, next)=> {
    
    const oldPassword= req.body.oldPassword;
    const newPassword= req.body.newPassword;
    const cnfPassword= req.body.confirmNewPassword;

    if(!oldPassword || !newPassword || !cnfPassword)
        return res.send({"Message": "Information Missing."});
    if(oldPassword=== newPassword)
        return res.send({"Message": "Old and New Password are same. Couldn't Update."});
    if(newPassword!= cnfPassword)
        return res.send({"Message": "New Password Mismatch."});
    next();
}

module.exports= paramValidate;