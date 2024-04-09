// setTimeout(() => {console.log("timeout 1");}, 5000);
// console.log("start");
// setTimeout(() => {console.log("timeout 2");}, 2000);
// console.log("main");
// console.log("end");


// function createOrder(x, fn){
//     console.log(x);
//     setTimeout(()=>{fn('123123')},5000);
//     setTimeout(()=>{fn('123123')},5000);
// }   
// function makePayment(orderID){
//     console.log(orderID);
// }

// createOrder('soap',makePayment);



// promise

// const pr= new Promise((resolve , reject) => { 
//     if(true){
//         // setTimeout(()=> {resolve()}, (Math.random()%10)*1000);
//         setTimeout(()=> {resolve();}, 60);
//     }
//     else{
//         reject();
//     }
// });

// console.log(pr);
// const prom= new Promise((resolve , reject) => {setTimeout(()=> {resolve("done-123");}, 6000);});
// prom.then((res)=>{
//     console.log(res);
// })

// setTimeout(()=> {
//     console.log('first timeout...')
// },0);
// // const prom= new Promise((resolve , reject) => {setTimeout(()=> {reject("Error-Rejected");}, 6000);});
// const prom= new Promise((resolve , reject) => {setTimeout(()=> {reject("Error-Rejected");}, 0);});
// prom.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

setTimeout(function acb(){
    console.log('I am one');
}, 0);
const pr = new Promise((res, rej)=>{
    setTimeout(()=>{res('done')},0);
})
pr.then(function b(res){
    console.log("promise completed: ", res);
})
setTimeout(function acb(){
    console.log('I am one');
}, 0);