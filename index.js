console.log("hello world")
// declare variables in js

// var 
var i=0;
var i;

console.log("i",i)
//operators  Arthemetic, logical,conditional
// + - / * **

var a=12;
var b=20;
// console.log("a*b",a*b)
// console.log("a-b",a-b)
// console.log("a+b",a/b)
// console.log("a**b",a**b)
x=12
y=13
z=12
// console.log("x>y",x>y)
// console.log("x<y",x<y)
// console.log("x===y",x===y)
// console.log("x==y",x==y)
// conditional operator
// < > <= >= == === != !==
// undifined null
// var a1
// console.log("a==",typeof(a1))

// if (x>y){

//     console.log("x is greater")
// }
// else if(y>z){
//     console.log("y is greater")
// }
// else{
//     console.log("z is greater")

// }

// 1

// age
age=23
ticketPrice=20000;
if(age<5){
    console.log("age is less then 5")
    // calculate
}
else if(age>5 && age<55){

    console.log("age is less then 55") 
    // calculate
}
else if(age>55){

// calculate
}

students=[]
function login()
{
       
    const myElement = document.getElementById("userName");
    myElement.style.color = "red";
    var userName = document.getElementById("name").value;
    console.log("userName==",userName)
    var password = document.getElementById("pass").value;
    console.log("Password==",password)
    students.push({name:userName,password:password})
    console.log("students",students)
    //if user name == nikita and password ==123456 logged in
    // failure
}