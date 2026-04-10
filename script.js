// let obj={
//     name:"Vipin",
//     age:"19",
// }
// let arr={
//     name:"yash",
//     section:"FSD",
// const button=document.getElementsByClassName("btn_click")
// button[0].addEventListener("click",Btn_click)
// function Btn_click(){
//     alert("button clicked")
// }

// const stopButton=document.getElementsByClassName("Btn_stop")
// stopButton[0].addEventListener("click",Stop_click)
// function Stop_click(){
//     button[0].removeEventListner("click",Btn_click)
//     alert("Event Listner Removed")
// // }
// const btn=document.querySelector(".btn_click")
// btn.addEventListener('keyup',(event)=>{
//     console.log(event.key)
// })

// const form=document.querySelector("form")
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log(event.srcElement[0].value)
//     console.log(event.srcElement[1].value)
//     console.log(event)
//     console.log("Button Clicked")
// })
// debugger
// console.log(a)
// // console.log(b)
// var a = 2343
// let b = 342;

// console.log(a)
// console.log(b)

// function print(){
//     console.log("inside fn")
// }
// print()

// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.log("Inside third function")
// }
// first()

// let total=345
// function calculate(){
//     console.log(total)
//     let total=565
// }

// calculate()

// console.log("THis is the code")
// setTimeout(()=>{console.log("After 5 sec")},5000)
// console.log("End of code")
// const timeout=setTimeout(()=>{
//     console.log("After 2 sec")
// },200)
// clearTimeout(timeout)
// const interval=setInterval(() => {
//     console.log("Every second")
// }, 2000);

// setTimeout(()=>{clearInterval(interval)},10000)
// const studentName = document.querySelector('#name')
// const button=document.querySelector('#btn')
// const list =document.querySelector('#list')

// console.log("Starting homework..");

// setTimeout(()=>{
//     console.log("Homeworkdone!..");
//     console.log("Starting Dinner...");

//     setTimeout(()=>{
//         console.log("Dinner Done...");
//         console.log("Getting Ready To go Out...");

//         setTimeout(()=>{
//             console.log("Going to Playground..");
//         },1000);
//     },1500);
// },2000);

// function finishHomework(callback){
//     console.log("Starting homework...");
//     setTimeout(()=>{
//         console.log("Homework done..");
//         callback();
//     },2000);
// }

// function eatDinner(callback){
//     console.log("Starting dinner..");
//     setTimeout(()=>{
//         console.log("Dinner done...");
//         callback();
//     },1500);
// }

// function goToPlayground(){
//     console.log("Going to playgroung...");
// }

//  finishHomework(()=>{
//     eatDinner(()=>{
//         goToPlayground();
//     });
// // });

// const p =new Promise((res , rej)=>{
//     console.log("Going to do the homework!!");

//     setTimeout(()=>{
//         const done=false;
//         if (done){
//             res ("Success")
//         }else{
//             rej("Failed to fetch the data..")
//         }
//     },3000)
// })
// p.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
// .finally(()=>{
//     console.log("End of promise")
// })

// function doHomework() {
//     const p = new Promise((res, rej) => {
//         setTimeout(() => {
//             let done = true;
//             if (done) {
//                 console.log("Homework completed..")
//                 res("Homewrok Done!!")
//             }
//             else {
//                 rej("Homewrok not done...")
//             }
//         }, 2000)
//     })
//     return p;
// }

// function eatDinner() {
//     const p = new Promise((res, rej) => {
//         setTimeout(() => {
//             let done = true;
//             if (done) {
//                 console.log("Dinner completed..")
//                 res("Dinner Done!!")
//             }
//             else {
//                 rej("Dinner not done...")
//             }
//         }, 2000)
//     })
//     return p;
// }
// function goToPlayground() {
//     const p = new Promise((res, rej) => {
//         setTimeout(() => {
//             let done = true;
//             if (done) {
//                 console.log("Went to PG")
//                 res("PG time")
//             }
//             else {
//                 rej("Not allowed.")
//             }
//         }, 2000)
//     })
//     return p;
// }

// doHomework().then((data) => {
//     console.log(data)
//     return eatDinner()
// }).then((data) => {
//     console.log(data)
//     return goToPlayground()
// }).then((data) => {
//     console.log(data)
// })
//     .catch((err) => {
//         console.log("err")
//     }).finally(() => {
//         console.log("Go to sleep")
//     })
// function orderFood(){
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food order placed")
//             res()
//         },2000)
//     })
// }
// function prepareFood(){
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food prepeared")
//             res()
//         },2000)
//     })
// }
// function deliverFood(){
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food delivered")
//             res()
//         },2000)
//     })
// }
// async function foodOrder(){
//     await orderFood()
//     await prepareFood()
//     await deliverFood()
//     console.log("Food order completed")
// }
// foodOrder()
// console.log ("Its a first line")
// // try{
// //     console.log(sample)
// // }
// // catch(err){
// //     console.log(err)
// // }finally{
// //     console.log("Final code")
// }
// console.log ("id")
// async function getdata() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//             method: "Post",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 title: "foo",
//                 body: "bar",
//                 userId: 1
//             })
//         })
//         if (!response.ok) {
//             throw new Error("Something went wrong")
//         }
//     const data = await response.json()
//     console.log(data)
//     }
//     catch(e){
//         console.log(e)
//     }
// // }
// let obj={
//     name:"yash",
//     age:24
// }

// localStorage.setItem("obj",JSON.stringify(obj))

// localStorage.setItem("name","yash")
// localStorage.setItem("age",24)

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))

// console.log(JSON.parse(localStorage.getItem("obj")))

// localStorage.removeItem("age")
// localStorage.clear()

// sessionStorage.setItem("name","yash")
// sessionStorage.setItem("age",24)

// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))

// sessionStorage.removeItem("age")

// document.cookie="name=yash; expire=Fri , 20 Feb 2026 23:59:59 UTC;"
// document.cookie="age=45; expire=Fri , 20 Feb 2026 23:59:59 UTC;"

// async function sample(){
//     await fetch("http://127.0.0.1:3000/index.html")
// }
// sample()
//  function* generate(){
//     yield 1
//     yield 2
//     yield 3
//  }

// const res=generate()
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())
// console.log(res.next())


// function add(a,b,c){
//     return a+b+c
// }

// function add(a){
//     return function (b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }

// const add = a => b => c => a+b+c

// console.log(add(2)(3)(4))

// async function get

// const city= document.querySelector("#city")
// const search= document.querySelector("#search")

// search.addEventListener(``)
