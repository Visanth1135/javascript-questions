// let multiply = function(x,y){
//   console.log(x * y)
// }

// multiply.bind(this,2)(4)

// let multiply = function(x){
//   return function(y){
//     console.log(x * y)
//   }
// }

// multiply(2)(4)

let add = function(a){
  return function(b){
    if(b){
      return add(a+b) 
    }
    else return a
  }
  
}

console.log(add(2)(4)(5)())