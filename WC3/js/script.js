'use strict'
console.log('script linked');

//code executes when page is done loading.
//Get the buttons and add eventlisteners
document.getElementById('register').addEventListener('click', createStudent);
// document.getElementById('show').addEventListener('click', showStudents);

let listStudents = [];//List of students

//Student object constructor
function Student(name, age, degree){
    this.name = name;
    this.age = age;
    this.degree = degree;
    this.courses = [];
    this.setPersonalDetails = function(details){
        [this.name,this.age,this.degree] = details;
    };
    this.addCourses = function(...list){
        this.courses = [...this.courses, ...list];
    };
    this.addCourse = function(course){
        this.courses.push(course);
    };
    this.showStudent = function(){
        let txt = `Studentname: ${this.name}, ${this.age} years and studying ${this.degree} at EhB. 
Courses are: ${this.courses.join(', ')}.`;

        return txt;
    }

}

function createStudent(){

    //Get info
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let degree = document.querySelector('input[type=radio]:checked').value;
    let courses = document.querySelectorAll('input[type=checkbox]:checked');

    let student = new Student(name, age, degree);
    //Add courses
    for(let c of courses){
        student.addCourse(c.value);
    }
    console.log(student);


    //Object created, save it to list
    listStudents.push(student);

    //Persist list using localstorage
    //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    //TLDR: Save the variable in a sessionStorage that is shared between pages
    //Only strings are allowed -> JSON.stringify
    localStorage.setItem('list', JSON.stringify(listStudents));


    //Empty inputfields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    //Toon alert
    addAlert(true,'Student object created succesfully!' );

    // console.log(listStudents);
}

function addAlert(status, message){
    let content = '';

    if(status){ //true  = success
        content = `<div class="alert alert-success" role="alert">
 ${message}
</div>`;

    }else{ //false = error
        content = `<div class="alert alert-danger" role="alert">
 ${message}
</div>`;
    }

    //Add message to top of page
    document.getElementById('messages').innerHTML = content;
}


