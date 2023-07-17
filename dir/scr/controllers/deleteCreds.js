const schema = require("../models/users.js");

exports.deleteCreds = async (req, res) => {
	const username = req.body.username;
	try {
		const isExist = await schema.creds.findOne({ username });
		console.log(isExist);
		if (!isExist) {
			console.log("No Such User.");
			return res.send({ "Message": "No Such User." });
		}
		// if(!Object.prototype.hasOwnProperty.call('username'))
		// {
		// 	console.log("No Such User.");
		// 	return res.send({ "Message": "No Such User." });
		// }
		await schema.creds.deleteOne({username});
		console.log("User Deleted Successfully.");
		return res.send({"Message": "User Deleted Successfully."});
	}
	catch(err){
		console.log(err);
		return res.send(err);
	}
}