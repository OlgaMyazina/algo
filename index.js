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

function newTestBasket(strBacket) {
  const basketStek = [];
  const basket = strBacket.split('');
  const basketOpenMap = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>'
  };
  const basketClose = {
    ')': '1',
    ']': '1',
    '}': '1',
    '>': '1'
  };
  basket.forEach(element => {
    if (basketOpenMap[element]) basketStek.push(element);
    if (basketClose[element]) {
      if (element != basketStek.pop(element)) return false;
    }
  });
  return !basketStek.length;
}

class NodeTree {
  constructor(value) {
    this.value = value;
  }
  setLeft(node) {
    this.left = node;
  }
  getLeft() {
    return this.left;
  }
  setRigth(node) {
    this.right = node;
  }
  getRigth() {
    return this.right;
  }
  getValue() {
    return this.value;
  }
}

//Реализуем дерево:

const tree = new NodeTree('F');
tree.setLeft(new NodeTree('B'));
tree.getLeft().setLeft(new NodeTree('A'));
tree.getLeft().setRigth(new NodeTree('D'));
tree
  .getLeft()
  .getRigth()
  .setLeft(new NodeTree('C'));
tree
  .getLeft()
  .getRigth()
  .setRigth(new NodeTree('E'));
tree.setRigth(new NodeTree('G'));
tree.getRigth().setRigth(new NodeTree('I'));
tree
  .getRigth()
  .getRigth()
  .setLeft(new NodeTree('H'));

//Pre-order - Обходим с вершины дерева слева до конца и далее
function preOrder(tree) {
  //выводим узлы дерева в консоль
  console.log(tree.getValue());
  let treeForLeftOrder = tree.getLeft();
  if (treeForLeftOrder) preOrder(treeForLeftOrder);
  let treeForRigthOrder = tree.getRigth();
  if (treeForRigthOrder) preOrder(treeForRigthOrder);
}
console.log('preOrder');
preOrder(tree);

function inOrder(tree) {
  let treeForLeftOrder = tree.getLeft();
  if (treeForLeftOrder) inOrder(treeForLeftOrder);
  //выводим узлы дерева в консоль
  console.log(tree.getValue());
  let treeForRigthOrder = tree.getRigth();
  if (treeForRigthOrder) inOrder(treeForRigthOrder);
}
console.log('inOrder');
inOrder(tree);

function postOrder(tree) {
  let treeForLeftOrder = tree.getLeft();
  if (treeForLeftOrder) postOrder(treeForLeftOrder);

  let treeForRigthOrder = tree.getRigth();
  if (treeForRigthOrder) postOrder(treeForRigthOrder);
  //выводим узлы дерева в консоль
  console.log(tree.getValue());
}
console.log('postOrder');
postOrder(tree);
