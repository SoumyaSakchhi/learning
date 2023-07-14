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