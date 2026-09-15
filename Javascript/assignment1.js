const fs = require('fs');

fs.writeFileSync('student.txt','Name: Sanskriti\nRoll Number:2503201000999\nBranch:CSE\nSemester:Third');
console.log('File created successfully');

const data = fs.readFileSync('student.txt','utf-8');
console.log(data);

fs.appendFileSync('student.txt','\nSubject: FSD Workshop 1\nMarks: 99\nAttendance:100%');
console.log('File updated successfully');

const da = fs.readFileSync('student.txt','utf-8');
console.log(data);





