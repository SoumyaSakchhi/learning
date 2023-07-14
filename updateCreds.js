const fs = require("fs");
const bcrypt = require('bcrypt');

exports.updatecreds= function(req, res) {
	const username = req.body.username;
	const oldpassword = req.body.oldpassword;
	const newpassword = req.body.newpassword;
	const cnfpwd = req.body.confirmpassword;

	if (newpassword === oldpassword) {
		console.log("Old and new password are the same. Couldn't update.");
		return res.send(`{"Message": "Old and new password are the same. Couldn't update."}`);
	}
	else {

		try {
			const data = fs.readFileSync('./credentials/creds.json', 'utf-8');
			const fileData = JSON.parse(data);

			const updatedPassword = fileData.find((cred) => {
				if (cred.username === username) {
					const salt = cred.salt;
					const deHashedPassword = bcrypt.hashSync(oldpassword, salt);
					if (cred.password === deHashedPassword) {
						//encrypt the new password
						if (newpassword === cnfpwd) {

							const hashedPassword = bcrypt.hashSync(newpassword, salt);
							cred.password = hashedPassword;


							fs.writeFileSync('./credentials/creds.json', JSON.stringify(fileData, null, 2), 'utf8');
							console.log('Password Updated.');
							console.log("Password updated. => ", hashedPassword);
							res.send(`{"Message": "Password Updated."}`);
							return cred;

						}
						else {
							console.log("New Password mismatch.");
							return res.send(`{"Message": "New Password Mismatch."}`);
						}
					}
					else {
						console.log("Incorrect Old Password.");
						return res.send(`{"Message": "Incorrect Old Password."}`);
					}

				}
			})

			if (!updatedPassword) {
				console.log("No Such User.");
				return res.send(`{"Message": "No Such User."}`);
			}
		}
		catch (error) {
			console.log("error: " + error);
			return res.send(`{"Message": "ERROR!!"}`);
		}
	}
	// return res.send("ERROR!");

}