const collection1 = require("../models/credentials.js");
const collection2 = require("../models/educationalInfo.js");
const collection3 = require("../models/userDetails.js");

exports.getAll = async (req, res) => {
	const response = [];
	try {
		// collection1.credentials.aggregate([
		// 	{
		// 		$lookup: {
		// 			"from": "collection2.educationalInfo",
		// 			"let": {"eID": "$_id"},
		// 			"pipeline": [
		// 				"$match": {"$expr": {"$eq": ["$uniqueID", "$$eID"]}},
		// 				$lookup: {

		// 				}
		// 			]
		// 		}
		// 	}
		// ])
		// const obj= {};
		// collection1.credentials.aggregate([
		// 	from: collection2.educationalInfo,
		// 	localField: "_id",
		// 	foreignField: "uniqueID",
		// 	as: 
		// ])

		// const schema2= await collection2.educationalInfo.find();

		const value= await collection1.credentials.aggregate([
			{
				$lookup:
				{
					from: "collection2.educationalinfos",
					localField: "_id.str",
					foreignField: "uniqueID.str",
					as: "educationInfo"
				}
			}
			// {
			// 	$unwind: "$educationInfo"
			// },
			// {
			// 	$project: {
			// 		eduInfo: "$educationInfo.eduInfo",
			// 		username: 1
			// 	}
			// }
		])
		console.log(value);
		res.send(value);
		// console.log(value);
	}
	catch (err) {
		console.log(err);
		res.send(err);
	}
}

// const schema1= await collection1.credentials.find().lean();
		// const schema2= await collection2.educationalInfo.find().lean();
		// const schema3= await collection3.userDetails.find().lean();


	// schema1.forEach((key1)=> {
		// 	const obj= {};
		// 	const uniqueID= key1._id;
		// 	obj["username"]= key1.username;
		// 	schema2.forEach((key2)=> {
		// 		if((key2.uniqueID).toString() === uniqueID.toString()){
		// 			obj["eduInfo"]= key2.eduInfo;
		// 			// return;
		// 		}
		// 	})
		// 	schema3.forEach((key3)=> {
		// 		if((key3.uniqueID).toString() === uniqueID.toString()){
		// 			obj["personalInfo"]= key3.personalInfo;
		// 			// return;
		// 		}
		// 	})
		// 	// console.log('obj => ', obj)
		// 	response.push(obj);
		// })

		// res.send(response);

		// const promise1 = new Promise(async (resolve, reject) => {
		// 	const schema1 = await collection1.credentials.find().lean();
		// 	if (schema1)
		// 		resolve(schema1);
		// });
	
		// const promise2 = new Promise(async (resolve, reject)=> {
		// 	const schema2= await collection2.educationalInfo.find().lean();
		// 	if(schema2){
		// 		resolve(schema2);
		// 	}
		// });
	
		// const promise3= new Promise(async (resolve, reject)=> {
		// 	const schema3= await collection3.userDetails.find().lean();
		// 	if(schema3)
		// 		resolve(schema3)
		// });
	
		// Promise.all([promise1, promise2, promise3])
		// .then((results)=> {
		// 	console.log(results);
		// 	console.log("next iter");
		// })

		// const schema1= await collection1.credentials.find();
		// console.log(schema1);
		// schema1.forEach(async (element)=> {
		// 	const obj= {};
		// 	const uniqueID= element._id;
		// 	obj["username"]= element.username;
		// 	const schema2= await collection2.educationalInfo.find({uniqueID}).populate();
		// 	console.log(schema2);
		// })

		// ,
		// {
		// 	$lookup:
		// 	{
		// 		from: "collection3.userDetails",
		// 		let: {eID: "$uniqueID"},
		// 		pipeline: [
		// 			{$match: {$expr: {$eq: ["$$eID", "$collection1.credentials._id"]}},},
		// 			{$project: {_id: 0, personalInfo: 1}} 
		// 		],
		// 		as: "personalInfo"
		// 	}
		// }

		