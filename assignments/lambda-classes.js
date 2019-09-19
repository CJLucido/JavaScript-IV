// CODE here for your Lambda Classes

let subject = "Mathematics";

class Person {
    constructor(attr){
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

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
        return `${student.name} receives a perfect score on ${subject}`;
    }
}