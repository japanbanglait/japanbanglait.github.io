alert("hello")

//here is m(y personal details
document.write(" </br>Muslima Esha<br/>");
document.write(" institution: East delta university</br>");
document.write("sub: CSE </br>");

//variable
var x=10;
    x=20;
console.log(x);

/*var name;
var id;
name="nawer";
id= 23;
document.write(name);
document.write(id); */

var name,id;
name="farsa  </br>";
id=10;
document.write(name); 

//data type

var name="farsa";
console.log(typeof(name));
var id=20;
console.log(typeof(id));

var num=2.4567;

console.log(num.toFixed(3));
console.log(typeof(Number("30")));
console.log(Number(true));
console.log(Number(false));

//string concatenation

document.write( "muslima" + "esha </br>");

var firstName= "muslima";
var lastName= "Esha";

var fullname = firstName + lastName ;
document.write( "my name is " + fullname );
document.write(fullname.length);

var text = prompt(" enter your name :");

document.write("<br> number of character " + text.length);
var name ="muslima"
document.write(name.charAt(3));

var text= " </br>Bangladesh";
text = text.toUpperCase();
document.write(text);

var text1 = " </br>my country";
var text2 = " is beautiful";
var text3 = text1.concat(text2);
document.write(text3);

                         //operator

// arithmetic operator : +,-,*,/,% ,**(exponent)

var x = 5;
var y = 6;
x= x+y;

console.log(x);
var x,y;
x=2;
y= 4;
x1=y-x;
console.log(x1);
var x= 4;
var y= 5;
x= x*y;
console.log(x);

var x= 4;
var y= 5;
x= x/y;
console.log(x);

var x= 14;
var y= 5;
x= x%y;
console.log(x);

var x= 2;
var y= 3;
x= x**y;
console.log(x);

// assignment operator : =, +=, -=, /=, %=, **=
var x= 3;
x +=5;
console.log(x);

var x= 8;
x -=5;
console.log(x);

var x= 3;
x *=5;
console.log(x);

var x= 15;
x /=5;
console.log(x);

var x= 15;
x %=5;
console.log(x);

var x= 3;
x **=5;
console.log(x);

//addition,subtraction, mul, div,rem
var num1= prompt("Enter first number : ");
var num2= prompt("Enter second number : ");
num1 = parseInt(num1,10);
num2 = parseInt(num2,10);
var sum,sub,mul,div,rem;

sum= num1+num2;
document.write(num1 + "+"  + num2 + "=" + sum + "</br>");

sub= num1 - num2;
document.write(num1 + "-"  + num2 + "=" + sub + "</br>");

mul = num1*num2;
document.write(num1 + "*"  + num2 + "=" + mul + "</br>");

div = num1/num2;
document.write(num1 + "/"  + num2 + "=" + div + "</br>");

rem = num1%num2;
document.write(num1 + "%"  + num2 + "=" + rem + "</br>");

 
// if,  else if, else statement

var  num = prompt("Enter a number:");
if(num>0)
 console.log("Positive");

 else if (num<0)
  console.log("Negative");

  else 
      console.log ("Zero");

// letter grade

var marks =prompt("Enter a marks : ");

if (marks>= 80)
       console.log("A+");

 else if (marks>= 70)
       console.log("A");

 else if (marks>= 60)
       console.log("A-");

 else if (marks>= 50)
       console.log("B");

 else if (marks>= 40)
       console.log("C");

 else if (marks>= 33)
       console.log("D");

else

    console.log("Fail");


//ternary operator

var number = Number(prompt("Enter a number : "));
var result = number>0 ? "positive": number<0 ? "negetive" : "zero";
 console.log (result);

//function.
 //addition


function addition(x,y) {
    var result= x+y;
    document.write("sum = " + result + "</br>");
}
 //subtraction
 function subtraction(x,y) {
    var result= x-y;
    document.write("sub = " + result + "</br>");
 }
 addition(5,8);
 subtraction(8,6);

//IIFEs
(function display() {
    console.log("hello");
}) ();
// function expression
const display2 = function display(msg) {
    console.log(msg);
};
display2("hello world");

//object
let student1= {

    name:"Maisha",
    age: 27,
    cgpa: 3.21,
    lang:["bangla", "english"]

}
 console.log(student1.name);

 function Student(name,age,cgpa,lang){
     this.name = name;
     this.age = age;
     this.cgpa = cgpa;
     this.lang = lang;
     this.display2 = function(){
         console.log(this.name);
         console.log(this.age);
         console.log(this.cgpa);
         console.log(this.lang);

     }
 }

let student2 = new Student("maisha",27,3.21, ["bangla","english"]);
const student3 = new Student("maria",26,3.00, ["bangla","english"]);

 student2.display2();
 student3.display2();
