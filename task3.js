const districts = [
	{
		name: "Mumbai",
		state: "Maharashtra",
		sports: [
			{
				name: "Cricket",
				players: ["Sachin Tendulkar", "Ajinkya Rahane"]
			},
			{
				name: "Tennis",
				players: ["Ajay Chopade", "Rahi Sarnobat"]
			}
		]
	},
	{
		name: "Bangluru",
		state: "Karnataka",
		sports: [
			{
				name: "Cricket",
				players: ["Rahul Dravid", "K L Rahul"]
			},
			{
				name: "Hockey",
				players: ["Chinnapa Paddikal", "Samitha Shetty"]
			}
		]
	},
	{
		name: "Pune",
		state: "Maharashtra",
		sports: [
			{
				name: "Cricket",
				players: ["Shardul Thankur"]
			},
			{
				name: "Tennis",
				players: ["Sandesh Bhagwat", "Riya Kadam"]
			}
		]
	},
	{
		name: "Jabalpur",
		state: "MP",
		sports: [
			{
				name: "Tennis",
				players: ["Shivam Dubey", "Pradeep Singh"]
			},
			{
				name: "Table Tennis",
				players: ["Shiv Kumar"]
			}
		]
	},
	{
		name: "Belgavi",
		state: "Karnataka",
		sports: [
			{
				name: "Cricket",
				players: ["Devdatta Paddikal"]
			},
			{
				name: "Tennis",
				players: ["Sunitha Shetty", "Raghav Kokatnoor"]
			},
			{
				name: "Hockey",
				players: ["Charith Nagarjuna"]
			}
		]
	},
	{
		name: "Indore",
		state: "MP",
		sports: [
			{
				name: "Tennis",
				players: ["Arjun Chawala", "Suraj Varma", "Sanjana Yadav"]
			},
			{
				name: "Hockey",
				players: ["Sampat Sherawat"]
			}
		]
	}
]


// const statewise_games= [];
// for(let elements in districts){
//     let element= districts[elements];
//     //console.log(element);
//     const obj= {};
//     for(let values in element){
//                 let value= element[values];
//             //     //console.log(values+ " "+ value);
//               //   const obj= {};
//             //     if(values!== "name"){
//             //         obj[values]= value;
//             //         console.log(obj);
//             // }
//             if(values!== "name"){
//                     if(statewise_games.includes(value)){
//                         continue;
//                     }
//                 if(Object.prototype.hasOwnProperty.call(obj, values)){
//                     obj[values]= value;
//                 }
//                 else{
//                     obj[values]= {};
//                     obj[values]= value;
//                 }
//             }
//             //console.log(statewise_games);
//     }
//     statewise_games.push(obj);
//     //break;
// }

// console.log(statewise_games);

const statewise_games = [];
for (let elements of districts) {
	//console.log(elements.state);
	const obj = {};

	let index = -1;		//check if state is present in statewise_games
	for (let i in statewise_games) {
		if (statewise_games[i].state === elements.state) {
			index = i;
			break;
		}
	}

	if (index !== -1) {     //state present
		for (let sport of elements.sports) {			//check if sports is present
			// let nxtidx= -1;                 
			// for(let j in statewise_games[index].sports.length){
			//     if(statewise_games[index].sports[j].name=== sport.name){
			//         nxtidx= j;
			//         break;
			//     }
			// }

			// let nxtidx = -1;

			// for (let [index, sports] of statewise_games[index].sports.entries()) {
			//   if (sports.name === sport.name) {
			//     nxtidx = index;
			//     break;
			//   }
			// }
			let nxtidx = -1;

			for (let j = 0; j < statewise_games[index].sports.length; j++) {
				if (statewise_games[index].sports[j].name === sport.name) {
					nxtidx = j;
					break;
				}
			}
			if (nxtidx !== -1) {       //sport present
				statewise_games[index].sports[nxtidx].players =
					statewise_games[index].sports[nxtidx].players.concat(sport.players);
			}
			else {
				statewise_games[index].sports.push(sport);
			}
		}
	}

	else {
		obj["state"] = elements.state;
		obj["sports"] = elements.sports;
		statewise_games.push(obj);
	}
}

console.log(statewise_games);

//displaying state and sports
// for(let elements of statewise_games){
//     //console.log(elements);
// 	console.log(elements.state);
// 	for(let element of elements.sports){
// 		console.log(element);
// 	}
// }

const gamewise_players = {};
for (let states of statewise_games) {
	//console.log(states.sports);
	//console.log(states.sports);
	// const obj= {
	// 	// "tennis": "fun",
	// 	// "cricket": "game"
	// };

	for (let sport in states.sports) {
		//console.log(sport);						//0 1
		let gameName = states.sports[sport].name;
		let gamePlayers = states.sports[sport].players;
		//console.log(gamePlayers);
		//console.log(states.sports[sport].name);		// cricket tennis hockey

		if (Object.prototype.hasOwnProperty.call(gamewise_players, gameName)) {
			// let i = 0;
			// while (i < gamePlayers.length) {
			// 	gamewise_players[gameName].push(gamePlayers[i]);
			// 	i++;
			// }
			gamewise_players[gameName].push(...gamePlayers);

			// gamewise_players[gameName].push(gamePlayers);
			// console.log("If executed");
		}
		else {
			const obj = {};
			//obj[gameName]= gamePlayers;
			//obj[gameName]= [];
			obj[gameName] = (gamePlayers);
			//console.log(obj[gameName]);
			Object.assign(gamewise_players, obj);
			//console.log(obj);
			//console.log(gamewise_players);
		}

		//obj[gameName]= gamePlayers;
		//obj[gameName].push= gamePlayers;
		//console.log(obj);
	}
	// Object.assign(gamewise_players, obj);

	// let index= -1;		//check if sports is present in gamewise_players
	// for(let sport in gamewise_players){
	// 	if(sport=== states.sports.name)
	// 	//console.log(sport);
	// 	//if(gamewise_players[i].)
	// }

	// for(let values in obj){
	// 	//console.log(values)			//tennis cricket (keys)
	// 	//console.log(obj[values]);		//fun game	(values)
	// }

	// for(let games in gamewise_players){
	// 	obj[games]= 
	// }

	// obj[gameName]= gameName;
	// obj[gameName].push= gamePlayers;

}
console.log(gamewise_players);

// let nxtidx = -1;

// for (let [index, sports] of statewise_games[index].sports.entries()) {
//   if (sports.name === sport.name) {
//     nxtidx = index;
//     break;
//   }
// }

const fs = require("fs");
const resultArray= [statewise_games, gamewise_players];
const files= ["first.json", "second.json"];
// console.log(files);
// console.log("resultArray \n");
// console.log(resultArray);
let i= 0;
let flag= true;
for(let i in resultArray){
	//console.log(resultArray[i]);
	const data= JSON.stringify(resultArray[i], null, 2);
	//console.log(data);
	// fs.writeFile(files[i++], data, (error)=> {
	// 	if(error){
	// 		console.log(error);
	// 		flag= false;
	// 		throw error;
	// 	}
	// 	console.log("File "+ i+ " written successfully");
	// })
	try{
		fs.writeFileSync(files[i++], data);
		console.log("File "+ i+ " written successfully");
	}
	catch(error){
		console.log(error);
		throw error;
	}
}

if(flag)
	console.log("Files written successfully");

// const data = JSON.stringify(gamewise_players, null, 2);
// fs.writeFile("task3_file.json", data, (error) => {
//   if (error) {
//     console.error(error);
//     throw error;
//   }

//   console.log("task3_file.json written correctly");
// });

// const data2= JSON.stringify(statewise_games, null, 2);
// fs.writeFile("task2_file2", data2, (error)=> {
// 	if(error){
// 		console.log(error);
// 		throw error;
// 	}
// 	console.log("task3_file2.json written correctly");
// });


// const output= [];
// for(let elements in districts){
//     const element= districts[elements];
//     //console.log(element);
//     for(let values in element){
//         if(values=== "state"){
//              let value= element["state"];
//              //console.log(value);
//             // output["state"]= value;
//             output[value]= output[value] || {};
//             output["state"]= value;
//             console.log(output["state"]);
//             // output[value]= element["sports"];
//         }
//         // if(values=== "sports"){
//         //     for(let sport in values){
//         //         let value= element["sports"];
//         //         //console.log(element["sports"]);
//         //         //let value= element.sports;
//         //         output["state"]["sports"]= value;
//         //     }
//         // }
//     }
// }

// //console.log(output);

//displaying state and sports
// for(let elements of statewise_games){
//     //console.log(elements);
// 	console.log(elements.state);
// 	for(let element of elements.sports){
// 		console.log(element);
// 	}
// }