function quickSort(array, left, right) {
   // console.log(Object.prototype.toString.call(array).slice(8, -1));

   if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
      if (left < right) {
         var x = array[right], pivot = left - 1, temp;

         for (var j = left; j < right; j++) {
            if (array[j] <= x) {
               pivot++;
               temp = array[pivot];
               array[pivot] = array[j];
               array[j] = temp;
            }
         }

         quickSort(array, left, pivot - 1)
         quickSort(array, pivot + 1, right)
      }

      return array
   }
   else {
      return false
   }
}

const result = quickSort([3, 1, 2, 6, 5, 4, 7, 10, 9, 8], 1, 10)

console.log(result);

