const bcrypt = require("bcrypt");

const collection1= require("../models/credentials.js");
const collection2= require("../models/educationalInfo.js");
const collection3= require("../models/userDetails.js");

exports.updateUser = async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const eduInfo = req.body.eduInfo || '';
	const personalInfo = req.body.personalInfo || '';

	try{
		const isExist= await collection1.credentials.findOne({username});
		if(!isExist){
			console.log("No Such User.");
			return res.send({"Message": "No Such User."});
		}
		
		const verifyPwd= bcrypt.compareSync(password, isExist.password);
		if(verifyPwd=== false){
			console.log("Incorrect Password.");
			return res.send({"Message": "Incorrect Password."});
		}
		const uniqueID= isExist._id;

		if(eduInfo)
			await collection2.educationalInfo.updateOne({uniqueID}, {$set: {eduInfo}});
		
		if(personalInfo)
			await collection3.userDetails.updateOne({uniqueID}, {$set: {personalInfo}});

		console.log("Details have been updated.");
		res.send({"Message": "Details have been updated."});


	}
	catch(err){
		console.log(err);
		res.send(err);
	}
}