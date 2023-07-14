const fs = require("fs");

exports.deletecreds = function (req, res) {
	const username = req.body.username;
	try {
		const data = fs.readFileSync('./credentials/creds.json', 'utf-8');
		const fileData = JSON.parse(data);

		if (fileData.length) {
			const newFileData = fileData.filter((data) => {
				return data.username !== username
			})

			if (newFileData.length === fileData.length) {
				console.log("No Such User.");
				return res.send(`{"Message": "No Such User."}`);
			} else {
				fs.writeFile('./credentials/creds.json', JSON.stringify(newFileData, null, 2), 'utf8', (err) => {
					if (err) {
						console.log(err);
						return res.send(err);
					}
					console.log("write file executed");
					console.log("User Deleted Successfully.");
					return res.send(`{"Message": "User Deleted Successfully."}`);
				});
			}

		} else {
			console.log("No Data Available");
			return res.send(`{"Message": "No Data Available."}`);
		}

	}
	catch (error) {
		throw error;
	}

}
