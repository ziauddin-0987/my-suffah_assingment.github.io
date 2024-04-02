// this arrya is user name
let user = ["zia", "khan", "irfan", "naveed", "zeshan"];
function userr() {
  // give your value in prompt
  let prom = prompt("print your name ");

  //its statment cheak the value in array

  let a = user.find((retu) => {
    return retu == prom;
  });
  // this statment is "a" value chack for valide true first statment is ren
  if (a) {
    console.log(" your name is allreade declear");
    // this statment is "a" value chack for valide fales scende statment is ren
  } else {
    console.log("validede you name ");
  }
}

function userr1() {
  user.push(prompt("print your new nwme"));
}
