// console.log('hello');

// const arr= [10,22,34];

// // arr.forEach((a)=>{
// //     console.log(a);
// // })
//  const ans= arr.map((a)=>{
//     console.log(a);
//     return a*2;
//  })
// //  const ans2 = arr.map(a=>a**2);
//  const ans2 = arr.map(a=> Math.pow(a,2));
 
//  const arr2= [10.121,222.32,32.76];
//  const ans3= arr2.map(a=>parseInt(a));
//  console.log(ans);
//  console.log(ans2);
//  console.log(ans3);

// const arr=[12,322,43];
// const ans= arr.push(99);
// const arr2 =arr.map((a)=>a*2);
// console.log(arr);
// console.log(ans);
// console.log(arr2);


// const arr=[10,22,34];
// console.log(arr);
// const ans=arr.filter((a)=>{
//     if(a>20){
//         return true;
//     }
//     else return false;
// })
// console.log(ans);


//filter on string

// const arr = [
//     'Delhi',
//     'Mumbai',
//     'Chennai',
//     'Kolkata',
//     'Pune',
//     'India',
//     'Iraq',
//     'Russia',
//     'USA',
// ];
// const ans=arr.filter((s)=>{
//  if(s.includes('i')||s.includes('I')){
//     return true;
//  }
//  else return false;
// })
// console.log(ans);







// //to select multiple case sensitives
// const arr2=[
//     'Delhi, India',
//     'Mumbai, india',
//     'Washington, USA',
//     'New York, USA',
//     'Beijing, China',
//     'Wuhan, China',
// ];

// const ans2=arr2.filter((s)=>s.toLowerCase().includes('india'));
//     // const ns = s.toLowerCase();
//     // // if(ns.includes('india')){
// //     if(s.toLowerCase().includes('india')){
// //        return true;
// //     }
// //     else return false;
// //    })
//    console.log(ans2);
//    const ans3= ans2.map((a)=>a.toUpperCase());
//    console.log(ans3);

//    const arr3= [10,22,32,50];
//    const ans4=  arr3.reduce((a,b,c,d)=>{
// console.log(a,b,c,d);
// return a+b;
//    });
//    console.log(ans4);



   const arr= ['ab','cd','ef','gh'];
   const ans=  arr.reduce((total,curr)=>{
console.log(total,curr);
   });
   console.log(ans);