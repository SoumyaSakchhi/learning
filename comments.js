// if(count== values.length)
	// 	return res.send({"Message": "Credentials Added Successfully."});
	
	// try {
	// 	const username = req.body.username;
	// 	const password = req.body.password;

	// 	if (!fs.existsSync('./credentials')) {
	// 		fs.mkdirSync('./credentials');
	// 	}

	// 	let fileData = [];

	// 	if (fs.existsSync('./credentials/creds.json')) {
	// 		fileData = fs.readFileSync('./credentials/creds.json', { encoding: 'utf8' });
	// 		fileData = JSON.parse(fileData);
	// 	}

	// 	if (fileData.length) {
	// 		const isExist = fileData.find((data) => {
	// 			return data.username === username;
	// 		})

	// 		if (isExist) {
	// 			console.log("User Already Exists");
	// 			return res.send(`{"Message": "User Already Exists."}`);
	// 		}
	// 	}

	// 	bcrypt.genSalt(saltRounds, (err, salt) => {
	// 		if (err) {
	// 			return res.send('Salt Error => ', err)
	// 		}
	// 		bcrypt.hash(password, salt, (err, hash) => {
	// 			if (err) {
	// 				console.log(err);
	// 				return res.send('hash error => ', err)
	// 			}
	// 			fileData.push({
	// 				username,
	// 				password: hash,
	// 				salt
	// 			});
	// 			const data = JSON.stringify(fileData, null, 2);
	// 			fs.writeFile('./credentials/creds.json', data, (err) => {
	// 				if (err) {
	// 					console.log(err);
	// 					return res.send("ERROR!");
	// 				}
	// 				else {
	// 					console.log("User Added Successfully.");
	// 					return res.send(`{"Message": "Credentials Added Successfully"}`);
	// 				}
	// 			})
	// 		});
	// 	})

	// } catch (e) {
	// 	res.send(e);
	// 	console.log(e);
	// }