// let count = 0;
// let line = 'HAMMAA';
// void (async function () {
//    // Write your code here
//    let tokens = line;
//    deepTest(0, tokens);
//    console.log(count);
//    // console.log(judge('AHHA'))

//    function judge(str) {
//       if (str.length !== 1) {
//          let stack = [];
//          for (let i = 0; i < Math.floor(str.length / 2); i++) {
//             stack.push(str[i]);
//          }
//          // console.log(stack);
//          // console.log(str);
//          for (let j = 0; j < Math.floor(str.length / 2); j++) {
//             // console.log(stack[stack.length - j - 1], str[Math.ceil(str.length / 2) + j])
//             if (
//                stack[stack.length - 1] ===
//                str[Math.ceil(str.length / 2) + j]
//             ) {
//                stack.pop();
//             }
//          }
//          if (stack.length == 0) return true;
//       }
//       return false;
//    }

//    function deepTest(deep = 0, str, order) {

//       if (str == "") return;
//       if (str.length !== 1) {

//          const res_1 = judge(str);
//          if (res_1) count++;

//          if (order == 'asc') {
//             const res_2 = judge(line.substring(line.length - deep - 1));
//             if (res_2) count++;
//          }
//          if (order == 'dsc') {
//             const res_3 = judge(line.substring(0, deep))
//             if (res_3) count++
//          }
//       }
//       deep++;
//       deepTest(
//          deep,
//          deep == line.length ? "" : line.substring(0, line.length - deep),
//          'asc'
//       );
//       deepTest(
//          deep,
//          deep == line.length ? "" : line.substring(deep),
//          'dsc'
//       )
//    }
// })();


function partition(s) {
   const result = [];

   function backtrack(start, path) {
      if (start === s.length) {
         result.push([...path]);
         return;
      }

      for (let i = start + 1; i <= s.length; i++) {
         const substring = s.slice(start, i);
         console.log(substring)
         console.log(i)
         if (isPalindrome(substring)) {
            path.push(substring);
            backtrack(i, path); // 循环加递归
            path.pop();
         }
      }
   }

   function isPalindrome(str) {
      return str === str.split('').reverse().join('');
   }

   backtrack(0, []);
   return result;
}

console.log(partition("HAMMAA"));


