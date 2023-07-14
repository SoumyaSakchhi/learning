const express= require('express');
const app= express();
app.use(express.json());

const addInfo= require("./addUsers");
const getInfo= require("./getUsers");
const getAllUsers= require("./getUsers2");

const validateParameters= (req, res, next)=> {
    const username= (req.body.username).trim();
    const password= req.body.password;
    const eduInfo= req.body.educationalInfo;
    const personalInfo= req.body.personalInfo;

    if(!username || !password || !eduInfo || !personalInfo){
        console.log("Information Missing.");
        return res.send({"Message": "Information Missing."});
    }
    if(password.length< 8){
        console.log("Password should be atleast 8 characters long.");
        return res.send({"Message": "Password should be atleast 8 characters long."});
    }
		
    next();
}

app.post("/api/adduser", validateParameters, addInfo.addUser);
app.get("/api/getuser", getInfo.getuser);
app.get("/api/getallusers", getAllUsers.noparams);

const port = 7000;
app.listen(port, (err) => {
	if (err)
		console.log(err);
	console.log("Server is Successfully Running on port " + port);
})