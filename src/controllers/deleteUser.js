const collection1 = require("../models/credentials.js");
const collection2 = require("../models/educationalInfo.js");
const collection3 = require("../models/userDetails.js");

exports.deleteUser = async (req, res) => {
	try {
		const username = req.body.username;
		const isExist = await collection1.credentials.findOne({ username });
		if (!isExist) {
			console.log("No Such User.");
			return res.send({ "Message": "No Such User." });
		}
		const uniqueID = isExist._id;
		const result1 = await collection1.credentials.deleteOne({ username });
		const result2 = await collection2.educationalInfo.deleteOne({ uniqueID });
		const result3 = await collection3.userDetails.deleteOne({ uniqueID });

		if (result1.acknowledged === true && result2.acknowledged === true && result3.acknowledged === true) {
			console.log("User Deleted Successfully.");
			return res.send({ "Message": "User Deleted Successfully." });
		}
		else{
			console.log("User Could not be deleted.");
			return res.send({"Message": "User could not be deleted."});
		}
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
}