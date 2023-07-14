const fs = require("fs");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

const saltRounds = 10;

exports.addUser = function (req, res) {
	try {
		const username = (req.body.username);
		const password = req.body.password;
		const eduInfo = req.body.educationalInfo;
		const personalInfo = req.body.personalInfo;

		let flag1 = false, flag2 = false;

		if (!fs.existsSync('./userParticulars')) {
			fs.mkdirSync('./userParticulars');
		}

		let userInfo = [];
		let userDetails = [];

		if (fs.existsSync('./userParticulars/user_info.json')) {
			userInfo = fs.readFileSync('./userParticulars/user_info.json', { encoding: 'utf8' });
			userInfo = JSON.parse(userInfo);
		}

		if (fs.existsSync('./userParticulars/user_details.json')) {
			userDetails = fs.readFileSync('./userParticulars/user_details.json', { encoding: 'utf8' });
			userDetails = JSON.parse(userDetails);
		}

		if (userInfo.length) {
			const isExist = userInfo.find((data) => {
				return data.username === username;
			})
			if (isExist) {
				console.log("User Already Exists");
				return res.send({ "Message": "User Already Exists." });
			}
		}

		bcrypt.genSalt(saltRounds, (err, salt) => {
			if (err) {
				console.log('Salt Error => ', err);
				return res.send('Salt Error => ', err);
			}
			bcrypt.hash(password, salt, (err, hash) => {
				if (err) {
					console.log(err);
					return res.send('hash error => ', err)
				}
				const id = shortid.generate();
				userInfo.push({
					username,
					password: hash,
					id,
					salt
				});
				const data1 = JSON.stringify(userInfo, null, 2);
				fs.writeFile('./userParticulars/user_info.json', data1, (err) => {
					if (err) {
						console.log(err);
						return res.send("ERROR!");
					}
					flag1 = true;
					console.log(flag1);

					userDetails.push({
						id,
						educationalInfo: eduInfo,
						personalInfo
					});
					const data2 = JSON.stringify(userDetails, null, 2);
					
					fs.writeFile('./userParticulars/user_details.json', data2, (err) => {
						if (err) {
							console.log(err);
							return res.send("ERROR!");
						}
						flag2 = true;
						console.log(flag2);
	
						if (flag1 === true && flag2 === true) {
							console.log("User Added Successfully.");
							return res.send({ "Message": "User Added Successfully." })
						}
						else {
							console.log("User could not be added.");
							return res.send({ "Message": "User could not be added." });
						}
					})
				})

			});
		})

	}
	catch (err) {
		throw err;
	}
}