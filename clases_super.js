//parent class

class Person {
    constructor(name){
        this.name=name;
    }

    greet() {
        console.log(`Hello ${this.name}`)
    }


}

//inheriting parent class

class Student extends Person {
    constructor(name){
        console.log("Creating student class");
        // call the super constructor and pass in the name parameter
        super(name)
    }
}

let jheyson=new Student ('Jheyson');
jheyson.greet()