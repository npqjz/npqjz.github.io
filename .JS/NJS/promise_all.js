const myAll = (promises) => {
   return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
         return reject(new TypeError('Argument must be an array'));
      }
      let results = [];
      let count = 0; // 表明有多少个promise完成了
      for (let i = 0; i < promises.length; i++) {
         Promise.resolve(promises[i]).then(res => {
            results[i] = res;
            count++;
            if (count === promises.length) {
               resolve(results);
            }
         }).catch(err => {
            reject(err);
         })
      }
   })
}

Promise.myAll = myAll;

const p1 = Promise.resolve(1);
const p2 = new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve(2);
   }, 1000)
});
Promise.myAll([p1, p2]).then(res => {
   console.log(res);
}).catch(err => {
   console.log(err);
})