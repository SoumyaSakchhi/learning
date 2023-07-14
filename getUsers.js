const fs= require("fs");

exports.getuser= (req, res)=> {
    const username= req.query.username;
    const response= {};
		let id;
		let flag1= false, flag2= false;
    try{
        if(!fs.existsSync("./userParticulars")){
            console.log("No data available.");
            return res.send({"Message": "No data available."})
        }

        fs.readFile("./userParticulars/user_info.json", 'utf-8', (err, data1)=> {
            if(err){
                console.log(err);
                return res.send(err);
            }
            const fileData1= JSON.parse(data1);
						for(let i in fileData1){
							if(fileData1[i].username=== username){
								id= fileData1[i].id;
								flag1= true;
								break;
							}
						}
						if(flag1== false){
							console.log("No Such User.");
							return res.send({"Message": "No Such User."});
						}

						fs.readFile("./userParticulars/user_details.json", "utf-8", (err, data2)=> {
							if(err){
								console.log(err);
								return res.send(err);
							}
							const fileData2= JSON.parse(data2);
							for(let i in fileData2){
								if(fileData2[i].id== id){
									response["username"]= username;
									response["educationalInfo"]= fileData2[i].educationalInfo;
									response["personalInfo"]= fileData2[i].personalInfo;
									flag2= true;
									console.log("line 1"+ flag2);
									break;
								}
								console.log("line 2"+ flag2);
							}
							// console.log(response);
							if(flag2== true){
								console.log("User details have been fetched.")
								return res.send(response);
							}
							else{
								console.log("User details could not be fetched.")
								return res.send(response);
							}
						})
        })
    }
    catch(err){
        console.log(err);
        return res.send(err);
    }
}