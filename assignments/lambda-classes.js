// CODE here for your Lambda Classes

let subject = "Mathematics";
let channel = "WEB24";

class Person {
    constructor(attr){
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
} // end of Person class

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty,
        this.favLanguage = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase
    }

    demo(){
        return  `Today we are learning about ${subject}`;
    }

    grade(){
        return `${this.name} receives a perfect score on ${subject}`;
    }
}//end of Instructor class

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground,
        this.className = attr.className,
        this.favSubjects = attr.favSubjects
    }

    listsSubjects(){
        return Student.favSubjects.reduce((acc, currentVal) => `${acc}\n${currentVal[0]} ${currentVal[1]}`)
    }
    PRAssignment(this, subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(this, subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}//end of Student class

class ProjectManagers extends Instructors{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName,
        this.favInstructor
        = attr.favInstructor    }
    standUp(this, channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(){
        return ``
    }
}