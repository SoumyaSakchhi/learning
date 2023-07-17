const bcrypt = require("bcrypt");
const saltRounds = 10;

const schema = require("../models/users.js");

exports.addCreds = async (req, res) => {
	const username = req.body.username;
	let password = req.body.password;
	try {
		const isExist = await schema.creds.findOne({ username });
		if (isExist) {
			console.log("User Already Exists.");
			return res.send({ "Message": "User Already Exists." });
		}

		const salt= bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password, salt);

		const user= new schema.creds({
			username,
			password: hash,
			salt
		})

		user.save().then(()=> {
			console.log("User Added Successfully.");
			return res.send({"Message": "User Added Successfully."});
		}).catch(e=> {
				console.log(e);
				return res.send({ Message: JSON.stringify(e)});
		})
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
}