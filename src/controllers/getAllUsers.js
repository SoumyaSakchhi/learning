const collection1 = require("../models/credentials.js");
const collection2 = require("../models/educationalInfo.js");
const collection3 = require("../models/userDetails.js");

exports.getAll = async (req, res) => {
	const response = [];
	try {
		const value= await collection1.credentials.aggregate([
			{
				$lookup:
				{
					from: 'educationalinfos',
					localField: "_id",
					foreignField: "uniqueID",
					as: "educationInfo"
				}
			},
			{ $unwind: '$educationInfo' },
			{
				$lookup: 
				{
					from: 'userdetails',
					localField: "_id",
					foreignField: "uniqueID",
					as: "userInfo"
				}
			},
			{
				$project: {
					_id: 0,
					username: 1,
					'educationInfo.eduInfo':1,
					'userInfo.personalInfo': 1
				}
			}
		])
		res.send(value);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
}