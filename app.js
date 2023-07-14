const express = require("express");
const app = express();
// const router= express.Router();
app.use(express.json());

// app.use((next)=> {
// 	express.json();
// 	next()
// }, (req, res)=> {
// 	console.log(req.body);
// })

// router.use((req, res, next)=> {
// 	console.log(req.body);
// })

const add = require('./addCreds1');
const match = require('./matchCreds');
const update = require('./updateCreds');
const deleteUser = require('./deleteCreds');

const testPassword = function (req, res, next) {

	const password = req.body.password || '';
	const newpassword = req.body.newpassword || '';
	const confirmpassword = req.body.confirmpassword || '';

	if ((req.path === "/api/addcreds" && password.length < 8) ||
		(req.path === "/api/updatecreds" && newpassword.length < 8 && confirmpassword.length < 8)) {
		return res.send({ "Message": "Password should be atleast 8 characters long." });
	}
						// else if(req.path=== "/api/updatecreds" && req.body.newpassword.length< 8)
						// 	return res.send({"Message": "Password should be atleast 8 characters long."});
	next();
}

const trimParameter = (req, res, next) => {

	// if(Object.prototype.hasOwnProperty.call(req.body, "data")){
	// 	const data= req.body["data"];
	// 	for(let i in data){
	// 		const username= data[i].username;
	// 		const password= data[i].password;
	// 		if(!username || !password)
	// 			return res.send({"Message": "Username or Password Missing."});
	// 		if (req.body && Object.prototype.hasOwnProperty.call(req.body, 'username')) {
	// 			data[i].username = (data[i].username).trim();
	// 		}
	// 	}
	// }

	// else{

		const username = req.body.username;
		const password = req.body.password;

		if (!username || !password)
			return res.send({ "Message": "Username or Password missing." });
		if (req.body && Object.prototype.hasOwnProperty.call(req.body, 'username')) {
			req.body.username = (req.body.username).trim();
		}
	// }
	next();
}



const addCredsArray= (req, res, next)=> {
	try {
		const request = req.body;
		const values = request["data"];
		for (let i in values) {
			const username = (values[i].username).trim();
			const password = values[i].password;
			if (!username || !password)
				return res.send(`{"Message": "Username or password Missing"}`);

			if (password.length < 8)
				return res.send({ "Message": "Password should be atleast 8 characters long." });

		}
		next();
	}
	catch (err) {
		throw err;
	}
	// next();
}

app.post('/api/addcreds', addCredsArray, add.addcreds);
app.use(trimParameter);
app.post('/api/matchcreds', match.matchcreds);
app.put('/api/updatecreds', testPassword, update.updatecreds);
app.delete('/api/deletecreds', deleteUser.deletecreds);

const port = 5000;
app.listen(port, (err) => {
	if (err)
		console.log(err);
	console.log("Server is Successfully Running on port " + port);
})



// const request = req.body;
	// for (let data in request) {
	// 	const value = request[data];
	// 	for (let elem in value) {  
	// 		const password = value[elem].password || '';
	// 		const newpassword = value[elem].newpassword || '';
	// 		const confirmpassword = value[elem].confirmpassword || '';

	// 		if ((req.path === "/api/addcreds" && password.length < 8) ||
	// 			(req.path === "/api/updatecreds" && newpassword.length < 8 && confirmpassword.length < 8)) {
	// 			return res.send({ "Message": "Password should be atleast 8 characters long." });
	// 		}
	// 		next();
	// 	}
	// }

	// const request = req.body;
	// for (let data in request) {
	// 	const value = request[data];
	// 	for (let elem in value) {

	// 		let username = value[elem].username;
	// 		const password = value[elem].password;
	// 		let flag = false;
	// 		if (username === '' || password === '')
	// 			flag = true;
	// 		if (!Object.prototype.hasOwnProperty.call(value[elem], 'username') ||
	// 			flag == true)
	// 			return res.send({ "Message": "Username or Password Missing." });
	// 		if (req.body && Object.prototype.hasOwnProperty.call(value[elem], 'username')) {
	// 			username = (value[elem].username).trim();
	// 		}
	// 		next();
	// 	}

	// }