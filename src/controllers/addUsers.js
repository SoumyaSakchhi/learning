const bcrypt = require("bcrypt");

const collection1 = require("../models/credentials.js");
const collection2 = require("../models/educationalInfo.js");
const collection3 = require("../models/userDetails.js");

const saltRounds = 10;

exports.addUsers = async (req, res) => {
	const username = (req.body.username).trim();
	const password = req.body.password;
	const eduInfo = req.body.eduInfo;
	const personalInfo = req.body.personalInfo;

	try {
		const isExist = await collection1.credentials.findOne({ username });
		if (isExist) {
			console.log("User Already Present.")
			return res.send({ "Message": "User Already Present." });
		}
		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password, salt);

		const user1 = new collection1.credentials({
			username,
			password: hash
		});
		await collection1.credentials.create(user1);
		const element= await collection1.credentials.findOne({username});
		const uniqueID= element._id;
		const user2 = new collection2.educationalInfo({
			uniqueID,
			eduInfo
		});
		const user3 = new collection3.userDetails({
			uniqueID,
			personalInfo
		})

		await collection2.educationalInfo.create(user2);
		await collection3.userDetails.create(user3);

		await collection1.credentials.updateMany({}, {$unset: {"__v": 0}});
		await collection2.educationalInfo.updateMany({}, {$unset: {"__v": 0}});
		await collection3.userDetails.updateMany({}, {$unset: {"__v": 0}});

		console.log("User Added Successfully");
		return res.send({ "Message": "User Added Successfully." });
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
}