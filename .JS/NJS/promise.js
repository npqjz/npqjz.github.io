new Promise((resolve, reject) => {
   setTimeout(() => {
      resolve('data')
      console.log('data');

   }, 1000)
}).then((data) => {
   setTimeout(() => {
      console.log('dsa', data);
   }, 1000)
})

// console.log(1);
