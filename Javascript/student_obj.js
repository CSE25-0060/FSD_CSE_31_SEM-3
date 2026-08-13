//Syntax to use the object.

// let student = {
//     name:"Sanskriti",
//     roll_no:2503201000999,
//     cgpa:9.1,
//     isPass:true,
// };
// console.log(student);
// console.log(student.name);
// student.name="Swabhiman";
// console.log(student.name);
// console.log(student);

//Syntax to use the array.
// let marks=[34,56,78,89,90,100];
// console.log(marks[0]);

let student = [
    {name:"Amit",city:"Delhi",cgpa:7.5},
    {name:"Rahul",city:"Ghaziabad",cgpa:9.8},
    {name:"Prateek",city:"Mumbai",cgpa:8.8}
]
// table.log(student);
//console.table(student);

for (let i=0;i<student.length;i++)
{
    if (student[i].cgpa>8  && student[i].city=="Mumbai")
    {
        console.log(student[i].name);
    }
}