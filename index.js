'use strict';
const arr = [2, 5, 1, 4, 9, 2, 8];
function bubbles(arr) {
  const lenght = arr.length;
  for (let i = 0; i < lenght; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(arr);
console.log(bubbles(arr));
