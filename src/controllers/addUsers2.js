//add array of users

const bcrypt = require("bcrypt");
const saltRounds = 10;

const collection1 = require("../models/credentials.js");
const collection2 = require("../models/educationalInfo.js");
const collection3 = require("../models/userDetails.js");

exports.addUsersArray = async (req, res) => {
	const data = req.body["data"];
	try {
		for (let i of data) {
			const username = i.username;
			const isExist = await collection1.credentials.findOne({ username });
			if (isExist) {
				console.log(isExist.username + " Already Exists.");
				return res.send({ "Message": `${isExist.username} Already Exists.` });
			}
		}

		for (let i of data) {
			const username = i.username;
			const password = i.password;
			const eduInfo = i.eduInfo;
			const personalInfo = i.personalInfo;

			const salt = bcrypt.genSaltSync(saltRounds);
			const hash = bcrypt.hashSync(password, salt);

			const data1 = new collection1.credentials({
				username,
				password: hash
			});

			await collection1.credentials.create(data1);
			const element = await collection1.credentials.findOne({ username });
			const uniqueID = element._id;

			const data2 = new collection2.educationalInfo({
				uniqueID,
				eduInfo
			});
			await collection2.educationalInfo.create(data2);

			const data3 = new collection3.userDetails({
				uniqueID,
				personalInfo
			});
			await collection3.userDetails.create(data3);

			await collection1.credentials.updateMany({}, { $unset: { "__v": 0 } });
			await collection2.educationalInfo.updateMany({}, { $unset: { "__v": 0 } });
			await collection3.userDetails.updateMany({}, { $unset: { "__v": 0 } });
		}
		console.log("Users Added Successfully.");
		return res.send({ "Message": "Users Added Successfully." });
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
}