console.log("Hello world", 5 + 10, "another log");
console.warn("warning");
console.error("error");
 alert("alert me")



//javascript variable
container to store data type...

var number1 = 40;
var number2 = 30;
console.log(number1 + number2);

var number1 = 40;
var number2 = 30;
console.log(number1 - number2);

var number1 = 40;
var number2 = 30;
console.log(number1 * number2);

var number1 = 40;
var number2 = 30;
console.log(number1 / number2);

var number1 = 40;
var number2 = 10.100;
console.log(number1 + number2);

//var strings

var str1 = "this is a string";
var str2 = "this is also a string";
var str3 = "this is thierd a string";
console.log(str1)

//objects

var marks = {
    shwi: 34,
    wjdj: 29,
}
console.log(marks)

//boolean
var a = true;
var b = false;
console.log(a, b)

//undefined 
var und = undefined;
//console.log(und);

//null
var n = null;
console.log(n);

//arrays
//collection of elements are called arrays   
var arr = [1, 2, 3, 4, 5]
console.log(arr)



//premitive data type= null,undefined,string,boolean,symbol,number                
//refernce data type = object,arrays


//operators in javascript
//arithmetic operator
var a = 30;
var b = 20;

.console.log("the value of a+b is", a + b);
console.log("the value of a-b is", a - b);
console.log("the value of a*b is", a * b);

//comparative operator
var k = 40;
var l = 30;
console.log(k == l);
console.log(k >= l);
console.log(k <= l);console.log("the value of k+l is" )


//assignment operator
var o = a;
var p = b;
console.log(o, p)


//logical operator (and when both the elements are true then only it will show true,otherwise false) 
console.log(true && true)
console.log(true && false)
console.log(false && false)

//it needs one of the element to be true it is or

console.log(true || true)
console.log(true || false)
console.log(false || false)//


//if true it will show false ...if false it willl show true   it is not

console.log(!true)
console.log(!false)

//function in js

function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2)

//conditionals in js


if else statemt
var age = 19;
if (age > 18) {
    console.log('you can drink');
}
else {
    console.log('you can not drink')
}

var arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach(function (element) {
    console.log(element);
})

function clicked(){
   console.log('the button was clicked')
}



