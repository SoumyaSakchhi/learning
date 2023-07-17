const bcrypt = require("bcrypt");

const schema = require("../models/users.js");

exports.matchCreds = async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	try {
		const isExist = await schema.creds.findOne({username});
		if(!isExist){
			console.log("No Such User.");
			return res.send({"Message": "No Such User."});
		}
		const hash= isExist.password;
		const result= bcrypt.compareSync(password, hash);
		if(result=== true){
			console.log("Credentials Matched");
			return res.send({"Message": "Credentials Matched."});
		}
		else{
			console.log("Invalid Credentials.");
			return res.send({"Message": "Invalid Credentials."});
		}
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
}