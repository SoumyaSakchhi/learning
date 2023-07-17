const array = [ "10", "11", "1", "10", "0", "29", "15", "11", "0", "11", "11", "10", "15", "20", "10" ];

//const array = [ "11", "11", "11", "11", "10", "10", "10", "10", "15", "15", "29", "20", "1", "0", "0" ]

// const jsonFile= {
//   '0': { sum: 0, count: 2 },
//   '1': { sum: 1, count: 1 },
//   '10': { sum: 40, count: 4 },
//   '11': { sum: 44, count: 4 },
//   '15': { sum: 30, count: 2 },
//   '20': { sum: 20, count: 1 },
//   '29': { sum: 29, count: 1 }
// }

const jsonFile= {};
for(let i in array){
    element= Number(array[i]);
    if(Object.prototype.hasOwnProperty.call(jsonFile, element)){
        jsonFile[element]["sum"]+= element;
        jsonFile[element]["count"]+= 1;
    }
    else{
        jsonFile[element]= {"sum": element, "count": 1};
    }
}

console.log(jsonFile);

const n= array.length;
// array.splice(0, n);
// console.log(array);
const newObjectKeys = Object.keys(jsonFile);
const sumArray = []

newObjectKeys.forEach(key => {
    const object = {
        sum: jsonFile[key].sum,
        count: jsonFile[key].count,
        number: key
    }
     
    sumArray.push(object);
})

console.log(sumArray)

sumArray.sort((a, b) => {
    return ( b.sum - a.sum )
})

console.log(sumArray)

sumArray.forEach(elem => {
    while(elem.count){
        array.push(elem.number);
        elem.count--
    }
})

array.splice(0, n);
console.log(array);



// for(let values in array){
//     let val= array[values];
//     if(jsonFile.h)
// }

//console.log(Object.keys(jsonFile));     // 0 1 10 11 15 20 29
//order[obj[key]['position'] - 1] = key;

// const jsonFile2= jsonFile => {
//     const order = [], res = {};
//     Object.keys(jsonFile).forEach(key => {
//        return order[jsonFile[key]["sum"] - 1] = key;
//     });
//     order.forEach(key => {
//        res[key] = jsonFile[key];
//     });
//     return res;
// }
// console.log(jsonFile2);

// for(let elements in jsonFile){
//     let element= jsonFile[elements];
//     //console.log(element);
//     for(let values in element){
//         //let value= element["sum"];
//         if(values=== "sum"){
//             //console.log(values);            //sum
//             console.log(element["sum"]);       //0 1 40 44 30 20 29
//         }
//         // console.log(values);
//     }
// }

const fs = require("fs");

const data = JSON.stringify(array, null, 2);

fs.writeFile("task2_file.json", data, (error) => {
  if (error) {
    console.error(error);
    throw error;
  }

  console.log("task2_file.json written correctly");
});
