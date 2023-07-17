const scores= [
    {
        name: "Amann",
        percentage: 71
    },
    {
        name: "Amit",
        percentage: 80
    },
    {
        name: "Dennis",
        percentage: 96
    },
    {
        name: "Prachita",
        percentage: 65
    },
    {
        name: "Shravya",
        percentage: 88
    },
    {
        name: "Amann",
        percentage: 91
    },
    {
        name: "Shruti",
        percentage: 75
    },
    {
        name: "Rohan",
        percentage: 72
    },
    {
        name: "Rita",
        percentage: 85
    },
    {
        name: "Shravya",
        percentage: 89
    }
]

scores.sort((a, b)=> {
    let al= a.name.toLowerCase();
    let bl= b.name.toLowerCase();
// console.log(al, bl)
    if(al=== bl)
        return b.percentage- a.percentage;
    else if(al< bl)
        return -1;
    else
        return 1;
    // return a.percentage - b.percentage
})

console.log(scores);

// let count= 0;
// scores.forEach((score)=>{
//     count+= 1;
// })
// console.log(count);