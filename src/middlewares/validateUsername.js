const userValidate = (req, res, next) => {
	const username = req.body.username;
	if (!username)
		return res.send({ "Message": "Username Missing." });
	next();
}

module.exports= userValidate;