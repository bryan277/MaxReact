let myName = 'Max';
console.log(myName);

myName = 'Manu';
console.log(myName);


let myfunc = (prime) => prime * 2
console.log(myfunc(7));
//14

let myfunc = prime => prime * 2
console.log(myfunc(7));
//14

let myfunc = () => console.log('max');
myfunc();
//max

const myfunc4 = (name, age) => console.log(name, age);
myfunc4('Max', 20);
// Max 20

function printMyName(name) {
  console.log(name);
}

printMyName('Max');
//Max

const myfunc2 = (num, num1) => num + num1

console.log(myfunc2(2,2));
//4
