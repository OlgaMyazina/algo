'use strict';
let arr = [2, 5, 1, 4, 9, 2, 8];
//const arr = getArr();
console.log(arr);
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

function selected(arr) {
  //предположим, что массив из положительных чисел
  let minValue, minIndex;
  const newArr = [];
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    minValue = arr[0];
    minIndex = 0;
    for (let j = 0; j < arr.length; j++) {
      //находим минимальный элемент
      if (arr[j] < minValue) {
        minValue = arr[j];
        minIndex = j;
      }
    }
    newArr[i] = minValue;
    arr.splice(minIndex, 1);
    minIndex = i;
  }
  return newArr;
}
console.log(selected(arr));

/*
function getArr() {
  const arr = document.querySelector('#inputArr').split(',');
  return arr;
}
function setArr(array) {
  const outForArr = document.querySelector('#outputArr');
  outForArr.textContent = array.join(', ');
}
document.querySelector('button').addEventListener('click', () => {
  console.log('В разработке');
});

*/
