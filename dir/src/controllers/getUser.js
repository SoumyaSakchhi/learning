const collection1 = require("../models/credentials.js");
const collection2 = require("../models/educationalInfo.js");
const collection3 = require("../models/userDetails.js");

exports.getUser = async (req, res) => {
	const username = req.query.username;
	const response = {};
	try {
		const isExist = await collection1.credentials.findOne({ username }).lean();
		if (!isExist) {
			console.log("No Such User.");
			return res.send({ "Message": "No Such User." });
		}
		const uniqueID = isExist._id;

		const [educationResp, userDetailsResp] = await Promise.all([
			collection2.educationalInfo.findOne({ uniqueID }).lean(),
			collection3.userDetails.findOne({ uniqueID }).lean()
		])

		console.log(educationResp, userDetailsResp);
		response["username"] = username;
		response["eduInfo"] = educationResp;
		response["personalInfo"] = userDetailsResp;

		console.log(response);
		return res.send(response);

	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
}

// const promise1= new Promise(async (resolve, reject)=> {
		// 	const result1= await collection1.credentials.find({username});
		// 	if(result1)
		// 		resolve(result1._id);
		// })

// collection2.educationalInfo.findOne({ uniqueID }).lean()
		// 	.then((result) => {
		// 		response["username"] = username;
		// 		response["eduInfo"] = result.eduInfo;
		// 		// console.log(response);
		// 		return collection3.userDetails.findOne({ uniqueID }).lean()
		// 	})
		// 	.then((result) => {
		// 		response["personalInfo"] = result.personalInfo;
		// 		// console.log(result);
		// 		return res.send(response);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 		return res.send(err);
		// 	})

		// const schema2= await collection2.educationalInfo.findOne({uniqueID}).lean();
		// const eduInfo= schema2.eduInfo;
		// const schema3= await collection3.userDetails.findOne({uniqueID}).lean();
		// const personalInfo= schema3.personalInfo;

		// response["username"]= username;
		// response["eduInfo"]= eduInfo;
		// response["personalInfo"]= personalInfo;

		// return res.send(response);