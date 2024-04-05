// var message = ('Hello');
// console.log(message);
// var age=18;
// console.log(age);
// age="Done";
// console.log(age);

// function env(){
// var message = ('Hello');
// console.log(message);
// var age=18;
// console.log(age);
// age="Done";
// console.log(age);
// }
// env();
// function env(){
//     for(var i=0; i<5; i++)
//     {
//         console.log("--",i);
//     }
//     console.log(i);
// }
//     env();

// let variable
// let message = "Heeeeeeeeeeeeeellllllllllllllllllllllllllloooo";
// console.log(message);

// const variable constant
// // const message= "hellp";
// message = 'else';
// console.log(message);883333333333333333333333
// let arr= ['a','b','c','d'];
// arr[0]='abcd';
// console.log(arr);
// let str="12";
// let age=20;
// let ans= age+str;
// console.log(ans);

//template literal
// const str = 'Khan';
// const usrName = 'My name is: ';
// const ans = `${usrName} ${str}`;
// console.log(ans);

// function print(str='nothing is here'){
// console.log(str);
// }
// print();

// print();
// a(); b(); error

//fxn declaration
// function print(){
//     console.log('--');
// }


//fxn assignment (named)
// const a = function print(){
// console.log('--');
// }
//fxn assignment (unnamed)
// const b = function (){
//     console.log('--');
// }
//arrow fxn assignment
// let c = () =>{
//     console.log('--');
// }

// a();
// c();
// b();
// print();


//switch

// let a=2;
// switch(a){
//     case 1:{
//         console.log('one');
//         break;
//     }
//     case 2:{
//         console.log('two');
//         break
//     }
//     case 3:{
//         console.log('three');
//         break;
//     }
//     default:{
//         console.log('not 1,2,3');
//     }
// }

// const obj= new Object();
// obj[12]='twelve';
// console.log(obj);

// const obj ={}
// obj[1]= 'one';
// obj[2]= 'two';
// obj[12]= 'twelve';
// console.log(obj);


const obj = {
    1: 'one',
    'fname': 'divyansh',
    'lname': 'sharma',
    12: 'twelve',
    age: "12",
};

console.log(obj);
const fullname= obj.fname + ' ' + obj.lname;
console.log(fullname);


const x= prompt('please tell a proper address');
console.log(obj[x]);