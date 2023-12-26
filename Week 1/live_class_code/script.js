// let fN = "Rohith"
// let age = 19
// let isMarried = false

const { response } = require("express");

// if(isMarried){
//     console.log(fN+" is married")
// }else{
//     console.log(fN+" is not married")
// }


// const num = 10
// let ans = 0
// for(i=0;i<100;i++){
//     ans = ans + i
// }
// console.log(ans)


// const ages  = [10,11,12,13,14,15,16,17,18,19,90]
// for(i=0;i<ages.length;i++){
//     if(ages[i]%2 == 0){
//         console.log(i)
//     }
    // else{
    //     console.log(i+" are odd even numbers")
    // }
// }

// const allUsers =[
//     {
//         firstName:"Rohith",
//         gender:"male"
//     },
//     {
//         firstName:"John",
//         gender:"female"
//     },
//     {
//         firstName:"Doe",
//         gender:"female"
//     }
// ]

// let i
// for(i=0;i<allUsers.length;i++){
//     if(allUsers[i]["gender"] == "male"){
//         console.log(allUsers[i]["firstName"])
//     }
// }

// function sum(num1,num2,fun2call){
//         let result = num1 + num2
//         fun2call(result)
// }
// function displayResult(data){
//     console.log("Result of sum is: "+ data)
// }

// sum(1,2,displayResult)

// function calculateSum(a,b,finalArithmetic){
//     const ans = finalArithmetic(a,b)
//     return ans
// }

// function sum(a,b){
//     return a+b
// }

// const variable = calculateSum(1,2,sum)
// console.log(variable)

// function square(n){
//     return n*n
// }

// function cube(n){
//     return n*n*n
// }

// function sumOfSomething(a,b,callback){
//     const val1 = callback(a)
//     const val2 = callback(b)
//     return val1 + val2
// }

// console.log(sumOfSomething(1,2,cube))

// let p = new Promise(function(resolve){
    
//     setTimeout(() => {
//         resolve("hi there")
//     }, 1000);
// });
// console.log(p)

// p.then(function(){
//     console.log(p)
// })

// function random(){
//     return "random return"
// }

// const variable = random()
// console.log(variable)


// function myAsyncFunction(){
//     let p = new Promise(function(resolve){
//         setTimeout(() => {
//             resolve("hi there")
//         }, 1000);
//     })
//     return p
// }

// async function main(){
//     let variable = await myAsyncFunction()
//     console.log(variable)
// }

// main()

// console.log("synchronous 1")

// setTimeout(_ => console.log("timeout 2"),0)

// Promise.resolve().then(_ => console.log("promise 3"))

// console.log("synchronous 4")

// function step1(value,error) {
//     return new Promise((resolve, reject) => {
//         if(!error){
//             resolve(value+10)
//         }
//         else{
//             reject("something went wrong")
//         }
//     })
// }

// function step2(value,error) {
//     return new Promise((resolve, reject) => {
//         if(!error){
//             resolve(value+10)
//         }
//         else{
//             reject("something went wrong")
//         }
//     })
// }

// function step3(value,error) {
//     return new Promise((resolve, reject) => {
//         if(!error){
//             resolve(value+10)
//         }
//         else{
//             reject("something went wrong")
//         }
//     })
// }

// step1(10,false)
//     .then((result1) => step2(result1,false))
//     .then((result2) => console.log(result2))

fetch("https://api.github.com/users")
    .then((response) => response.json)
    .then((result) => console.log(result))