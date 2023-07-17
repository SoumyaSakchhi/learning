const queryCheck = (req, res, next) => {
	const username = req.query.username;
	if (!username)
		return res.send({ "Message": "Username Missing." });
	next();
}

module.exports= queryCheck;