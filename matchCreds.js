const fs = require("fs");
const bcrypt = require('bcrypt');

exports.matchcreds = function (req, res) {
	const username = req.body.username;
	const password = req.body.password;

	try {
		fs.readFile('./credentials/creds.json', 'utf-8', (err, data) => {
			if (err) {
				console.log(err);
				return res.send(err);
			}
			const fileData = JSON.parse(data);
			const matchCreds = fileData.find((cred) => {
				// console.log(cred);
				if (username === cred.username) {
					const salt = cred.salt;
					bcrypt.hash(password, salt, (err, hash) => {
						if (err) {
							console.log(err);
							return res.send(err);
						}
						if (hash === cred.password) {
							console.log("Credentials Matched.");
							return res.send(`{"Message": "Credentials Matched"}`);
						}
						else {
							console.log("Incorrect credentials.");
							return res.send(`{"Message": "Incorrect Credentials"}`);
						}
					})
					return cred;
				}

			})

			if (!matchCreds) {
				console.log("No Such User.");
				return res.send(`{"Message": "No Such User"}`);
			}
		});
	}
	catch (err) {
		console.log(err);
		return res.send(err);
	}

}