// console.log("User Added Successfully.");
		// return res.send({"Message": "User Added Successfully."});

		// user1.save().then(() => {
		// 	const user2 = new collection2.userDetails({
		// 		id,
		// 		educationalInfo: eduInfo,
		// 		personalInfo
		// 	})
		// 	user2.save().then(() => {
		// 		console.log("User Added Successfully.");
		// 		return res.send({ "Message": "User Added Successfully." });
		// 	}).catch(e => {
		// 		console.log(e);
		// 		return res.send({ Message: JSON.stringify(e) });
		// 	})
		// }).catch(e => {
		// 	console.log(e);
		// 	return res.send({ Message: JSON.stringify(e) });
		// })

// const user2= new collection2.userDetails({
		// 	id,
		// 	educationalInfo: eduInfo,
		// 	personalInfo
		// })
		// user2.save().then(()=> {
		// 	console.log("User Added Successfully.");
		// 	return res.send({"Message": "User Added Successfully."});
		// }).catch(e=> {
		// 		console.log(e);
		// 		return res.send({ Message: JSON.stringify(e)});
		// })

// schema1.forEach(async (key)=> {
		// 	const obj= {};
		// 	const uniqueID= key._id;
		// 	const element2=  await collection2.educationalInfo.findOne({uniqueID});
		// 	const eduInfo= element2.eduInfo;
		// 	const element3=  await collection3.userDetails.findOne({uniqueID});
		// 	const personalInfo= element3.personalInfo;
		// 	console.log(element2);
		// 	console.log(element2.eduInfo);

		// 	obj["username"]= key.username;
		// 	obj["eduInfo"]= eduInfo;
		// 	obj["personalInfo"]= personalInfo;

		// 	response.push(obj);
		// })

		// / schema1.forEach((key1)=> {
			// 			const obj= {};
			// 			const uid= key1._id;
			// 			obj["username"]= key1.username;
			// 			schema2.forEach((key2)=> {
			// 				if(key2.uniqueID=== uid){
			// 					obj["eduInfo"]= key2.eduInfo;
			// 					return;
			// 				}
			// 			})
			// 			schema3.forEach((key3)=> {
			// 				if(key3.uniqueID=== uid){
			// 					obj["personalInfo"]= key3.personalInfo;
			// 					return;
			// 				}
			// 			})
			// 			response.push(obj);
			// 		})

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

		