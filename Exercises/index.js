const user = {
  name:'Visanth',
  age:26,
  'like':'notes'
}

user.name='ddd'

console.log(user.name)//Visanth
delete user.name//delete name property
console.log(user)//{age: 26, like: 'notes'}
console.log(user['like'])//notes
delete user['like']
console.log(user)//{age: 26}

const property = 'firstname';
const value = 'abcd'
const user1 = {
  [property]:value
}
user[property]=value//adding key value dynamically to existing object
console.log(user)//{age: 26, firstname: 'abcd'}
console.log(user1)//{firstname: 'abcd'}

for(key in user){
  console.log(key)//age
                  //firstname
  console.log(user[key])//print values              
}

const a={};
const b = {key:'b'}
const c = {key:'c'}
a[b]=123
a[c]=456
console.log(a)//{[object Object]: 456}
console.log(a[b])//456
const strObj = JSON.stringify(user)//converting object into string
console.log(strObj)//{"age":26,"firstname":"abcd"}
console.log(strObj.name);//undefined in string statewe cannot accress like this
console.log(JSON.parse(strObj))//{age: 26, firstname: 'abcd'}
                               //   age: 26
                               //   firstname: "abcd"
                               //   [[Prototype]]: Object
      
localStorage.setItem('test',user)
localStorage.setItem('test1',strObj)

const setting={
  user:'abcd',
  level:19,
  health:10
}

const data = JSON.stringify(setting,['level','health'])
console.log(data)