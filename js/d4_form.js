const firstNameChange = (e) => {
  // const firstnamechange = () =>{
  // console.log('firstName');
  // console.log(e);
  // console.log(e.target.value);
  const val = e.target.value;
  //length of an array
  if (val.length > 3) {
    console.log("correct");
  }
};

function submitForm(e){
  e.preventDefault(); //prevent function
  // console.log(e);
  const t = e.target;
  const res = {
    hobbies: [],
  };
  // console.dir(e.target.value);
  // for(let i=0; i<2;i++)
  // {
  //     console.dir(t[i].value);
  //     }
  for (let i = 0; i < t.length; i++) {
    const ty = t[i].type;
    
    if (ty != 'submit') {
      const vl = t[i].value;
      const nm = t[i].name;
    
    if (ty == 'checkbox' && t[i].checked) {
      res.hobbies.push(vl);
    }
    if (ty != 'checkbox') {
        res[nm] = vl;
  }
}
}
console.log(res);
}

