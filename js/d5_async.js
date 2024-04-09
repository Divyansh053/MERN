// // let arr= [2,10,21,32];
// // function printPretty(elem){
// //     console.log(': ',elem);
// // }
// //  function printArray(arr){
// //     for(let i=0; i<arr.length;i++){
// //         printPretty(arr[i]);
// //     }
// //     arr.forEach(printPretty);
// //  }
// // // arr.forEach((a) => {
// // //     console.log(a);
// // // });
// // arr.forEach((a,b,c) => {
// //     console.log(a,b,c);
// // });
// //  printArray(arr);
// let arr= [2,10,21,32];
// function printPretty(elem){
//     console.log('Hello');
// }
// //time is in ms
// setTimeout(printPretty,4000);

// console.log('GEC Start');


// function printPretty(elem){
//     console.log('prettyStart'); 
//     let ans = 2+3;
//     console.log(ans);
//     console.log('prettyEnd');
// }
// //time is in ms
// // setTimeout(printPretty,5000);
// // console.log('GEC End');


// const btn = document.getElementById('btn');
// btn.addEventListener("click", printPretty);

// console.log("start");

// const req= fetch("https://api.github.com/users/mojombo");
// console.log(req);
// req.then(()=>console.log('fetched'));
// console.log("end");
// console.log("start");
// fetch('https://dummyjson.com/products/1')
// .then(res => console.log(res))
// .then(res => res.json()) concerted by browser
// .then(json => console.log(json))
// console.log("end");
// console.log("start");
// const req= fetch('https://dummyjson.com/products/1')
// const res = req.then(res => res.json())
// res.then((data)=>console.log(data));
// console.log("end");
console.log("start");
const req= fetch('https://dummyjson.com/products/1').then(res => res.json()).then((data)=>console.log(data))
.catch((err)=>{
    console.log('Error');
})
//if error
console.log("end");