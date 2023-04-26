// for loop;
// var a  = [2,3,4,5,"HTML"];
// for(let i = 0;i<a.length;i++){
//     console.log(a[i]);
// }
// for of loop;
// var a  = [2,3,4,5,"HTML"];
// for (let print of a){
//     console.log(print);
// }
// for in loop
// var a  = [2,3,4,5,"HTML"];
// var a = {
//     html : 1,
//     CSS : 2,
//     Js : 3
// }
// for (let print in a){
//     console.log(print);
// }
// reverse for loop
// var arrName  = [2,3,4,5,"HTML"];
// for (var i=arrName.length-1;i>0;i--1){
//     console.log(`$(i).${arrName[i]}`);
// }
// Object.entries
// let obj ={
//     name:"sarun",
//     age : 20
// };
// let mydata = Object.entries(obj);
// // console.log(mydata);
// for (let[key,value] of mydata){
//     console.log(`${key}:${value}`);
// }
// break statement and continue
// for (var i=0;i<=20;i++){
//     if(i<=5){
//     continue;
//     }
//     console.log(i);
// }
// nested for
// for (var outer=1;outer<5;outer++){
//     for(var inner=1;inner<4;inner++){
//         console.log(`${inner}`);
//     }
//     console.log(`${outer}`);
// }
// array in add or remove
// splice remove and elemet
// var arrName = [263,753,755,7253]
// arrName.splice(2,2);
// console.log(arrName);
// add method
// var arrName = [263,753,755,7253]
// arrName.splice(2,0,"HTML","JS");
// console.log(arrName);
// // Array.variable.splice.(startingindex,)
// // array to convert string
// var arrName = [263,753,755,7253]
// arrName.toString();
// console.log(arrName);
// console.log(typeof(arrName));
// slice function
// const fruits = ['apple', 'banana', 'orange', 'pear', 'peach'];
// const citrusFruits = fruits.slice(2,3);
// console.log(citrusFruits); 
// console.log(fruits); 
// substring funtion
// function send_value(){
//     var user = document.getElementById().value;
//     var dob = document.getElementById().value;
//     var user_sl = user.slice.(0,4);
//     var sub = sob.substring(0,5);
//     var co = user_sl.concat(sub);
//     document.getElementById("").value
// }
// two or more merging arrays
// var a = [1,2,3,4,5]
// var b = [6,7,8,9,10]
// var c = [11,12,13,14,15]
// var d =a.concat(b,c);
// console.log(d);

// sorting method
// var a = [20,19,18,17,16,15,14,13]
// a.sort();
// console.log(a)

// reverse function

// var a = [20,19,18,17,16,15,14,13]
// a.reverse();
// console.log(a);

// map function
// var num = [1,2,3,4,5,]
// var num2 = num.map(sample);
// function sample(value){
//     return value * 2;
// }
// console.log(num2);

// filter function
// var num = [1,2,3,4,5]
// var num2 = num.filter(sample);
// function sample(value){
//     return value > 2;
// }
// console.log(num2);

// reduce function
// var num = [1,2,3,4,5,100]
// var num2 = num.reduce(sample);
// function sample(total,value){
//     return value + total;
// }
// console.log(num2);


// create element

// function sample(){
//     let div = document.getElementById("divid");
//     let input = document.createElement("input");
//     input.type="checkbox";
//     div.appendChild(input);
// }


var receipeObj = {
    title : "tomato Pasta"
}
var h1 = document.getElementById("head");
h1.textContent=receipeObj.title;
h1.style 


