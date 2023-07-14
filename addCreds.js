const fs = require("fs");
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.addcreds = function (req, res) {

	const request= req.body;
	const values= request["data"];
	let count= 0;
	for(let i in values){
		try {
			console.log(values[i]);
			console.log("Line 1");
			const username = values[i].username;
			const password = values[i].password;

			if (!fs.existsSync('./credentials')) {
				fs.mkdirSync('./credentials');
			}

			let fileData = [];

			if (fs.existsSync('./credentials/creds.json')) {
				fileData = fs.readFileSync('./credentials/creds.json', { encoding: 'utf8' });
				fileData = JSON.parse(fileData);
				console.log("Line 2");
			}

			if (fileData.length) {
				const isExist = fileData.find((data) => {
					return data.username === username;
				})

				if (isExist) {
					console.log("User Already Exists");
					return res.send(`{"Message": "User Already Exists."}`);
				}
				console.log("Line 3");
			}

			bcrypt.genSalt(saltRounds, (err, salt) => {
				if (err) {
					return res.send('Salt Error => ', err)
				}
				bcrypt.hash(password, salt, (err, hash) => {
					if (err) {
						console.log(err);
						return res.send('hash error => ', err)
					}
					fileData.push({
						username,
						password: hash,
						salt
					});
					const data = JSON.stringify(fileData, null, 2);
					fs.writeFile('./credentials/creds.json', data, (err) => {
						if (err) {
							console.log(err);
							return res.send("ERROR!");
						}
						else {
							console.log("User Added Successfully.");
							count+= 1;
							console.log("count: "+ count);
							// return res.send(`{"Message": "Credentials Added Successfully"}`);
						}
						if(count== values.length)
								return res.send({"Message": "Credentials Added Successfully."});
					})
				});
			})

		}		//end of try
		catch (e) {
			console.log(e);
			return res.send(e);
		}
	}
}

// exports.addcreds = function (req, res) {

// 	try{

// 			bcrypt.genSalt(saltRounds, (err, salt) => {
// 				if (err) {
// 					return res.send('Salt Error => ', err)
// 				}

// 				const request = req.body;
// 				const values = request["data"];
// 				let count = 0;
// 				for (let i in values) {
// 					console.log(values[i]);
// 					console.log("Line 1");
// 					const username = values[i].username;
// 					const password = values[i].password;

// 					if (!fs.existsSync('./credentials')) {
// 						fs.mkdirSync('./credentials');
// 					}

// 					let fileData = [];

// 					if (fs.existsSync('./credentials/creds.json')) {
// 						fileData = fs.readFileSync('./credentials/creds.json', { encoding: 'utf8' });
// 						fileData = JSON.parse(fileData);
// 						console.log("Line 2");
// 					}

					// if (fileData.length) {
					// 	const isExist = fileData.find((data) => {
					// 		return data.username === username;
					// 	})

					// 	if (isExist) {
					// 		console.log("User Already Exists");
					// 		return res.send(`{"Message": "User Already Exists."}`);
					// 	}
					// 	console.log("Line 3");
					// }

					// bcrypt.hashSync(password, salt, (err, hash) => {
					// 	if (err) {
					// 		console.log(err);
					// 		return res.send('hash error => ', err)
					// 	}
					// 	fileData.push({
					// 		username,
					// 		password: hash,
					// 		salt
					// 	});
					// 	const data = JSON.stringify(fileData, null, 2);
					// 	fs.writeFile('./credentials/creds.json', data, (err) => {
					// 		if (err) {
					// 			console.log(err);
					// 			return res.send("ERROR!");
					// 		}
					// 		else {
					// 			console.log("User Added Successfully.");
					// 			count += 1;
					// 			console.log("count: " + count);
					// 		}
// 							if (count == values.length)
// 								return res.send({ "Message": "Credentials Added Successfully." });
// 						})
// 					});
// 				}
// 			})
// 		}
// 		catch(e){
// 			throw e;
// 		}
// }