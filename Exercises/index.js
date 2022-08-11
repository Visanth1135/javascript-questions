// let name  = {
//   first:'djhjf',
//   last:'jhbs',
//   print:function(){
//     console.log(this.first + " " + this.last)
//   }
// }

// let name2={
//   first:'raju',
//   last:'nair'
// }

// name.print();// djhjf jhbs
// name.print.call(name2) //raju nair

//writing as seperate function the print method and using call method

let name  = {
  first:'djhjf',
  last:'jhbs',
}

  let print=function(){
    console.log(this.first + " " + this.last)
  }

  let print2=function(home){
    console.log(this.first + " " + this.last + home)
  }

  let print3=function(home,state,country){
    console.log(this.first + " " + this.last + home + state + country)
  }

let name2={
  first:'raju',
  last:'nair'
}

print.call(name);// djhjf jhbs
print.call(name2) //raju nair
print2.call(name2,'kerala') //raju nairkerala
print3.call(name2, 'kerala','kerala','india')//raju nairkeralakeralaindia

//difference between call and apply is we pass directly strings in call method and apply we pass arguments as list
print3.apply(name2,['kerala','kerala','india'])//raju nairkeralakeralaindia

//difference between call and bind, bind gives you a copy of function and that can be call later
let printname = print2.bind(name2,'kerala')
console.log(printname)//console function print2
printname()