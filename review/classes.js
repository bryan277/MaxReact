class Human {
  constructor() {
    this.gender = null;
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor(){
    super();
    this.name = 'Max';
    this.age = 23;
    this.gender = 'female';
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
//Max
//female
