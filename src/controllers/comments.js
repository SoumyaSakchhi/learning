// const salt = bcrypt.genSaltSync(8)
// return bcrypt.hash(admin.password, salt).then(hash => {
// 	admin.password = hash
// 	admin.salt = salt
// })

// bcrypt.genSalt(saltRounds, (err, salt) => {
// 	if (err) {
// 		return res.send(err);
// 	}
// 	bcrypt.hash(password, salt, (err, hash) => {
// 		if (err)
// 			return res.send(err);
// 		password = hash;
// 		const user = new schema.creds({
// 			username,
// 			password,
// 			salt
// 		});
// 		user.save().then(() => {
// 			console.log("User Added Successfully.");
// 			return res.send({ Message: "User Added Successfully." })
// 		}).catch(e => {
// 			console.log(e);
// 			return res.send({ Message: JSON.stringify(e) })
// 		});
// 	})
// })

// const paramValidate = (req, res, next) => {
// 	if (req.path === "/api/deletecreds") {
// 		const username = req.body.username;
// 		if (!username)
// 			return res.send({ "Message": "Username Missing." });
// 	}

// 	else if (req.path != "/api/updatecreds") {
// 		const username = req.body.username;
// 		const password = req.body.password;

// 		if (!username || !password)
// 			return res.send({ "Message": "Username or Password missing." });
// 		if (password.length < 8)
// 			return res.send({ "Message": "Password should be atleast 8 characters long." });
// 		if (req.body && Object.prototype.hasOwnProperty.call(req.body, 'username')) {
// 			req.body.username = (req.body.username).trim();
// 		}
// 	}

// 	else {
// 		const username = req.body.username;
// 		const oldPassword = req.body.oldPassword;
// 		const newPassword = req.body.newPassword;
// 		const cnfPassword = req.body.confirmNewPassword;

// 		if (!username || !oldPassword || !newPassword || !cnfPassword)
// 			return res.send({ "Message": "Information Missing." });
// 		if (oldPassword === newPassword)
// 			return res.send({ "Message": "Old and New Password are same. Couldn't Update." });
// 		if (newPassword.length < 8)
// 			return res.send({ "Message": "Password should be atleast 8 characters long." });
// 		if (newPassword != cnfPassword)
// 			return res.send({ "Message": "New Password Mismatch." });
// 	}

// 	next();
// }

// module.exports = paramValidate;