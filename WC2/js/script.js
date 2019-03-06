'use strict';
console.log('script linked!');

// DONE - We maken op onze html pagina een knop met de naam: Create Student
// DONE - We voegen een eventlistener toe. We luisteren naar het event click.
// DONE - Wanneer we klikken op de knop, vragen we alle data op met behulp van de prompts.
// DONE - Op het einde van de bevraging, maken we een nieuw studentenobject aan.
//          Ditmaal gebruiken we een constructor functie. Het object slagen we op in een lijst van studenten.
// DONE - We kunnen op de knop van Create student nogmaals klikken voor het process te herstarten.
// DONE - We voegen een knop toe aan onze html pagina met de naam: Show students.
// DONE - Wanneer we hierop klikken printen we de huidige lijst met studenten af op de html pagina.

document.getElementById('create').addEventListener('click', createStudent);
document.getElementById('show').addEventListener('click', showStudents);

let listOfStudents = [];

function Student(name, age, degree){
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.courses = [];
    this.setPersonalDetails = function(details){
        [this.name, this.age, this.degree] = details;
    };
    this.addCourse = function(...list){
        this.courses = [...this.courses, ...list];
    };
    this.showStudent = function(){
        let txt = `My name is ${this.name}. I am ${this.age} years old and follow ${this.degree} at EhB. 
        My courses are: ${this.courses.join(', ')}.`;

        return txt;
    };

}

function createStudent() {
    let data = [];
    //Using an array, we are storing all the answers as new elements of that array.
    data.push(prompt('Name?'));
    data.push(prompt('Age?'));
    data.push(prompt('Degree?'));

    let student = new Student();
    student.setPersonalDetails(data);

    while(true){
        let c = prompt('Course?');
        if(c){
           student.addCourse(c);
        }else{
            break;
        }
    }
    //add to list of students
    listOfStudents.push(student);

    console.log(listOfStudents);

}

function showStudents(){
    for(let s of listOfStudents){
        //Create paragraph
        let p = document.createElement('p');
        //Fill with content
        p.innerHTML = s.showStudent();
        //Add to Div
        document.getElementById('content').appendChild(p);
    }
}





















