// const obj = {
//   name: "DS",
//   age: 20,
// };

// let arr = [1, 2, 3, 4, 5];
// arr[10] = [2];
// arr.push(10);
// console.log(arr);
// console.log(typeof arr);
// //function of array
// console.log(Array.isArray(obj)); //check true false if its ann array or not
// console.log(Array.isArray(arr));

// function checkIfObject(x) {
//   if (Array.isArray(x)) {
//     console.log("false");
//   } else if (typeof x == "object") {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// // console.log(typeof(1));
// checkIfObject(obj);
// checkIfObject(arr);


// const arr = ['name',2];
// const obj={
//     'name':'divyansh',
//     age:10,
//     1:'else,'
// }
// //for loop
// for(let i=0; i<2;i++){
//         console.log(i);         
// }

// for(let i=0; i<2;i++){
//         console.log(arr[i]);         
// }

// for(let i=0; i<2;i++){
//         console.log(obj.i);         
// }
// //for  of loop only works in array
// for(let i of arr){
// console.log(i);
// }
// for(let i of obj){ //wont work for objects
//     console.log(i);
// }

//for in loop

// for(let i in arr){
// console.log(arr[i]);
// }
// for(let i in obj){
// console.log(i);
// }
    
// window.console.log(window);
// console.log(innerHeight);
// console.log(innerWidth);
// console.log(window.document);
// console.log(window);

//selectors

// const res=document.getElementsByTagName('h3');
// console.log(res);

// const res1=document.getElementById('ht3');
// const res2=document.getElementById('p1');
// console.log(res1);
// console.log(res2);

// const res = document.querySelectorAll('h3');
// console.log(res);
// const res = document.querySelector('h3');
// console.log(res);


// const res= document.getElementById('ht113');
// res['innerHTML']= "hello, world!";
// res['innerText']= "hello, world!";
// console.log(res);

// const ne = document.createElement("h3");
// ne.innerText= "Dynamic Text";
// // console.log(ne);

// //dom me dalne k lie
// document.body.appendChild(ne);

// to insert it inside a particular element 
// const ne = document.createElement("h3");
// ne.innerText= "Dynamic Text";
// const fdiv= document.getElementsByTagName('div');
// fdiv[0].appendChild(ne);
// fdiv[2].remove(ne);

// const res= document.querySelector('div');
// console.log(res);
// const c= document.getElementsByTagName('p');
// const c= document.getElementsByTagName('p');
// const c= document.querySelector('p:nth-of-type(2)');

// div.innerHTML= "<p>Hello</p>"
// div[0].innerHTML= "<p>Hello</p>"
// res.remove();
// res.removeChild(c);
// res.removeChild(c[0]);


//EVENTS

// function getInfo() {
//     const d= document.querySelector("div");
//     const el= document.createElement("div")
//     el.innerText= "My Name is DS.";=
//     d.prepend(el);
// }
// function getInfo() {
    function getInfo(e) {
    console.log(e);
    // const d= document.querySelector("div");
    // d.prepend(" My name is DS.");
    e.target.class='abc';
// e.target.setAttribute('style','color:red');
// e.target.setAttribute('style','background-color:green');
e.target.style.backgroundColor= 'green';
e.target.style.color = 'red';
}