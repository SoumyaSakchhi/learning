const validate= (req, res, next)=> {
    const username= req.body.username;
    if(!username)
        return res.send({"Message": "Username is required."});
    next();
}

module.exports= validate;