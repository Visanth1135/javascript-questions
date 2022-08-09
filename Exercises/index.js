// //memoize

// const cs = (n1,n2)=>{
//     for(let i=1;i<1000000000;i++){}
//     return n1*n2
// }

// console.time('first call');
// console.log(cs(4,3))
// console.timeEnd('first call')

const memoizedAdd = () => {
    let cache = {};
    return (n) => {
      if (n in cache) {
        console.log('Fetching from cache'+n);
        return cache[n];
      }
      else {
        console.log('Calculating result'+n);
        let result = n + 10;
        cache[n] = result;
        console.log(cache)
        return result;
      }
    }
  }
const newAdd = memoizedAdd();
console.log(newAdd(9));
console.log(newAdd(10))
