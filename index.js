const subject_marks = {
    "Social_Science": {
      "Rahul": 40,
      "Mahesh": 73,
      "Pratibha": 89,
      "Soumya": 92,
      "Kailash": 80
    },
    "Science": {
      "Rahul": 57,
      "Mahesh": 67,
      "Pratibha": 78,
      "Soumya": 85,
      "Kailash": 82
    },
    "Maths": {
      "Rahul": 72,
      "Mahesh": 88,
      "Pratibha": 93,
      "Soumya": 90,
      "Kailash": 70
    },
    "Hindi": {
      "Rahul": 50,
      "Mahesh": 54,
      "Pratibha": 76,
      "Soumya": 77,
      "Kailash": 62
    }
  }
  
  const output = {};
  
  for (let subject in subject_marks) {
    let students = subject_marks[subject];
  
    for (let student in students) {
      const marks = students[student];
  
      if (Object.prototype.hasOwnProperty.call(output, student)) {
        output[student][subject] = marks;
        output[student]['total'] = output[student]['total'] + marks;
      } else {
  
        output[student] = { "total": marks };
        output[student][subject] = marks;
  
      }
      
    }
  }
  
  console.log(output);
  
  const fs = require("fs");
  
  const data = JSON.stringify(output, null, 2);
  
  fs.writeFile("task1_file.json", data, (error) => {
    if (error) {
      console.error(error);
      throw error;
    }
  
    console.log("task1_file.json written correctly");
  });
