const bcrypt = require("bcrypt");
const schema = require("../models/users.js");
const saltRounds = 10;

exports.updateCreds = async (req, res) => {
	const username = req.body.username;
	const oldPassword = req.body.oldPassword;
	const newPassword = req.body.newPassword;

	try {
		const isExist = await schema.creds.findOne({ username });
		if (!isExist) {
			console.log("No Such User.");
			return res.send({ "Message": "No Such User." });
		}
		const hash = isExist.password;
		const verify = bcrypt.compareSync(oldPassword, hash);
		if (verify === true) {
			const salt = bcrypt.genSaltSync(saltRounds);
			const newHash = bcrypt.hashSync(newPassword, salt);
			await schema.creds.updateOne({username},{$set: {password: `${newHash}`}});
			await schema.creds.updateOne({username}, {$set: {salt}});
			console.log("Password Updated");
			return res.send({"Message": "Password Updated."});
		}
		console.log("Incorrect Old Password.");
		return res.send({"Message": "Incorrect Old Password."});
	}
	catch (err) {
		console.log(err);
		return res.send(err);
	}
}