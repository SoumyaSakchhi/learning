const fs = require("fs");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const writeFile = (res, fileData) => {
	fs.writeFile('./credentials/creds.json', fileData, (err) => {
		if (err) {
			console.log(err);
			return res.send("ERROR!");
		}
		return res.send({"Message": "Credentials Added Successfully."});
	})
}


exports.addcreds = function (req, res) {

	try {
		//check if there's any existing user in the file.
		const data = req.body.data;
		// const values = request["data"];
		let count= 0;
		let fileData = [];
		if (!fs.existsSync('./credentials')) {
			fs.mkdirSync('./credentials');
		}
		if (fs.existsSync('./credentials/creds.json')) {
			fileData = fs.readFileSync('./credentials/creds.json', { encoding: 'utf8' });
			fileData = JSON.parse(fileData);
		}
		for (let i in data) {
			const username = data[i].username;
			// const password = data[i].password;
			if (fileData.length) {
				const isExist = fileData.find((data) => {
					return data.username === username;
				})
				if (isExist) {
					console.log("User Already Exists");
					return res.send({"Message": `User Already Exists. ${JSON.stringify(data[i])}`});
				}
			}
		}

		//adding request to the file
		for (let i in data) {
			const username = data[i].username;
			const password = data[i].password;
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
					const fileContent = JSON.stringify(fileData, null, 2);
					count++

					if(count === data.length) writeFile(res, fileContent)
					
				});
			})
		}

		// if(count== request["data"].length){
		// 	console.log("Users Added Successfully.");
		// 	return res.send({"Message": "Users Added Successfully."});
		// }
		// else{
		// 	console.log("ERROR!");
		// 	return res.send({"Message": "ERROR!"});
		// }
	}
	catch (err) {
		throw err;
	}

}

// const salt = bcrypt.genSaltSync(saltRounds);
			// const hash = bcrypt.hashSync(password, salt);
			// fileData.push({
			// 	username,
			// 	password: hash,
			// 	salt
			// });
			// const data = JSON.stringify(fileData, null, 2);
			// fs.writeFileSync("./credentials/creds.json", data, "utf8");
			// count+= 1;