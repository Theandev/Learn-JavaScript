var students = [
    { name: "Sokha", grade: 85 },
    { name: "Puthean", grade: 92 },
    { name: "Visal", grade: 78 },
    { name: "David", grade: 90 },
    { name: "Piseth", grade: 88 },
    { name: "Nali", grade: 95 },
];

var remainingStudents = [...students];

function getRandomStudent(list) {
    var randomIndex = Math.floor(Math.random() * list.length);
    return randomIndex;
}

var interval = setInterval(function () {

    if (remainingStudents.length === 0) {
        console.log("End of students");
        clearInterval(interval); 
        return;
    }

    var index = getRandomStudent(remainingStudents);
    var student = remainingStudents[index];

    console.log(`Randomly selected student: ${student.name} with grade ${student.grade}.`);

    remainingStudents.splice(index, 1);

}, 5000);