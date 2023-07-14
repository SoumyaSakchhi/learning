const fs = require("fs");

exports.noparams = (req, res) => {
	const response = [];
	try {
		if (!fs.existsSync("./userParticulars")) {
			console.log("No data available.");
			return res.send({ "Message": "No data available." });
		}

		fs.readFile("./userParticulars/user_info.json", "utf-8", (err, user_info) => {
			if (err) {
				console.log(err);
				return res.send(err);
			}
			user_info = JSON.parse(user_info);
			fs.readFile("./userParticulars/user_details.json", "utf-8", (err, user_details) => {
				if (err) {
					console.log(err);
					return res.send(err);
				}
				user_details = JSON.parse(user_details);
				for (let i of user_info) {
					const obj = {};
					const id = i.id;
					for (let j of user_details) {
						if (i.id == j.id) {
							obj["username"] = i.username;
							obj["educationalInfo"] = j.educationalInfo;
							obj["personalInfo"] = j.personalInfo;
							response.push(obj);
							break;
						}
					}
				}
				console.log(response);
				return res.send(response);
			})
		})

	}
	catch (err) {
		console.log(err);
		return res.send(err);
	}
}