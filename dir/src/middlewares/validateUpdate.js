const validate = (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;
	const eduInfo = req.body.eduInfo || '';
	const personalInfo = req.body.personalInfo || '';

	if(!username || !password)
		return res.send({"Message": "Username and Password are required."});
	if(!eduInfo && !personalInfo)
		return res.send({"Message": "No field to be updated."});
	next();
}

module.exports= validate;