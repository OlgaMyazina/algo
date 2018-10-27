'use strict';
let arr = [2, 5, 1, 4, 9, 2, 8];
//console.log(arr);
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
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    minValue = arr[i];
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      //находим минимальный элемент
      if (arr[j] < minValue) {
        minValue = arr[j];
        minIndex = j;
      }
    }
    arr.splice(minIndex, 1);
    arr.splice(i, 0, minValue);
  }
  return arr;
}

function selectedNew(arr) {
  let minValue, minIndex;
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    minValue = arr[i];
    minIndex = i;
    for (let j = i; j < arr.length; j++) {
      //находим минимальный элемент
      if (arr[j] < minValue) {
        minValue = arr[j];
        minIndex = j;
      }
    }
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

class NodeBasket {
  constructor(data) {
    this.data = data;
  }
  setHead(node) {
    this.head = node;
  }
  getHead() {
    return this.head;
  }
  setNext(node) {
    this.next = node;
  }
  getNext() {
    return this.next;
  }
  setPrev(node) {
    this.prev = node;
  }
  getPrev() {
    return this.prev;
  }
  getData() {
    return this.data;
  }
}

//проверка скоробок
function testBasket(strBacket) {
  //на вход строка скобок - разбиваем на символы
  const basket = strBacket.split('');
  const basketOpen = ['(', '[', '{', '<'];
  const basketClose = [')', ']', '}', '>'];
  const basketCloseMap = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
  };
  let headNode;
  basket.forEach(element => {
    if (basketOpen.includes(element)) {
      const node = new NodeBasket(element);
      node.setHead(node);
      if (headNode) {
        headNode.setNext(node);
        node.setPrev(headNode);
      }
      headNode = node;
    }
    if (basketClose.includes(element)) {
      const nodeData = headNode.getData();
      if (basketCloseMap[nodeData] != element) {
        return false;
      }
      const node = headNode.getPrev();
      headNode = node;
    }
  });
  if (headNode) {
    return false;
  } else return true;
}
console.log(`test = false ${testBasket('({[слово})')}`);
console.log(`test = true ${testBasket('({[слово]})')}`);

/*
function getArr() {
  const arr = document.querySelector('#inputArr').split(',');
  return arr;
}
function setArr(array) {
  const outForArr = document.querySelector('#outputArr');
  outForArr.textContent = array.join(', ');
}
const btn = document.querySelector('#run');
console.log(btn);
btn.addEventListener('click', () => {
  console.log('В разработке');
});
*/
