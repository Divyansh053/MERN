//direct method
const obj = require('./d1_module')
obj.fn1(2,4);
obj.fn2(5,2);
console.log("\n tick: sum:",obj.fn1)
console.log("\n tick: mul:",obj.fn2)


//destructuring method
const {fn1,fn2} = require('./d1_module')
fn1(4,5);
fn2(42,32);

const figlet= require("figlet");
figlet("Hello World!!",(err, data)=>{
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }

    console.log(data);
  });


  //old method
//   fetch('https://api.github.com/users/deepak3440').then((res)=>{
//     return res.json();
//   }).then((data)=>{
//     console.log(data);
//   }).catch((err)=>{
//     console.log("error occured");
//   })

//async awaits


async function getAPI(){
    const pr = await fetch('https://api.github.com/users/deepak3440');
    const data= await pr.json();
    console.log(data);
}
getAPI();