function delay(ms) { // 延时设置计时器
   return new Promise((resolve) => {
      setTimeout(() => {
         resolve();
      }, ms)
   })
}

function* generator() {
   console.log("start");
   yield delay(1000);
   console.log("after 1 second");
   yield delay(1000);
   console.log("after 2 seconds");
}

function async(generatorFunc) {

   const iterator = generatorFunc(); // 迭代器

   function handle(iterationResult) {
      if (iterationResult.done) { // 迭代完成
         return Promise.resolve(iterationResult.value);
      }

      // 迭代中
      return Promise.resolve(iterationResult.value).then((value) => {
         return handle(iterator.next(value));
      }, err => {
         return handle(iterator.throw(err));
      });

   }


   // 迭代开始
   return handle(iterator.next());
}

async(function () {
   return generator();
}).then(() => console.log("all done"));