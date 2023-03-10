// const num1=parseInt(prompt("enter the first number"))
// const num2=parseInt(prompt("enter the second number"))
// const sum=num1 + num2
// alert(sum)

// let numbers = [5,8,4,9]
// let reverseNumber = numbers.reverse()
// console.log(reverseNumber)

// const mark=prompt("enter the mark of the student");
// let grade;
// if(mark>=80)
// {
//   grade="A"
// }
// else if(mark>=70)
// {
//   grade="B"
// }
// else if(mark>=60)
// {
//   grade="C"
// }
// else if(mark==50)
// {
//   grade="pass"
// }
// else{
//   grade="fail"
// }
// console.log(grade);

// functions

// function are the codes on demand
// funcction declaration
// 1st way you can use function keyword
// function greet(num1, num2){
//   let sum = num1 + num2;
//   console.log(sum);
// }
// greet(6,4);

// function greet(){
//   let num1 = 3;
//   let num2 = 4;
//   let sum = num1 + num2;
//   console.log(sum);
// }
// greet();

// sedcond way to decalere a function
// you use again funtion keyword but you assign it ion the variable
const click = document.querySelector('button');
click.addEventListener('click', greeting);

function greeting(){
  let num1 = 2;
  let num2 = 4;
  let sum  = num1 + num2;
alert(sum)
return sum;
}



// third way of declaring function is using the arrow function.

// const greet = name =>console.log(`good morning ${name} how are you doing?`);
// greet('Moise');


