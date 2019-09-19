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

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
}//end of Instructor class

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground,
        this.className = attr.className,
        this.favSubjects = attr.favSubjects
    }

    listsSubjects(){//PROBLEM////////////////////////// can't reduce a class, only an array
        return this.favSubjects.reduce((acc, currentVal) => `${acc}\n${currentVal[0].favSubjects} ${currentVal[1].favSubjects}`)
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}//end of Student class

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName,
        this.favInstructor
        = attr.favInstructor    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}//end of PM class

const CJLucido = new Student({
    name: "Carlo",
    age: "5mil",
    location: "THE CENTER OF THE EARTH",
    previousBackground: "the rgb code for New Jersey",
    className: "Full Stack Web Development",
    favSubjects: ["Chi Gong", "Divination", "Yoga"]
});

const BHemm = new Instructor({
        name: "Britt",
        age: "31",
        location: "Toronto",
        specialty: "Teaching remotely",
        favLanguage: "Kinyarwanda",
        catchPhrase: "You better pray for the internet guy too"
})

const Don = new ProjectManager({
        name: "Don",
        age: "39",
        location: "Computer room",
        gradClassName: "WEB24",
        favInstructor: "Britt",
})
console.log(CJLucido.listsSubjects());
console.log(CJLucido.sprintChallenge(subject));
console.log(CJLucido.PRAssignment(subject));
console.log(CJLucido.speak());
console.log(BHemm.demo(subject));
console.log(BHemm.grade(CJLucido, subject));
console.log(Don.standUp(channel));
console.log(Don.debugsCode(CJLucido, subject));