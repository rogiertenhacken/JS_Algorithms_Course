function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// adding a new node to the list. give it a value, the new head will be this.head
//(or the current head of the list while the new head is created and the next node
//will be null, since it is not yet created bij the addToHead function:
LinkedList.prototype.addToHead = function(value) {
  //the this. revers to the LinkedList here because it is in a method of the linkedlist.
  //a method created with .prototype.addToHead
  let newNode = new Node(value, this.head, null);
};
//if there is a head set it equal to the newNode:
  if (this.head) this.head.prev = newNode;
  // if not set it equal to the tail node, because it is the only one in the list, it is both the head and tail node:
  else this.tail = newNode;
  //whether the previous list was empty or not, it will be the head of the LinkedList:
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  let val = this.head.value;
  this.head = this.head.next;
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  while(currentNode) {
      if (currentNode.value === searchValue) return currentNode.value;
      currentNode = currentNode.next;
  }
  return null;
};

//gives the position of the value in the array:
LinkedList.prototype.indexOf = function(value) {
  let indexes = []; //to store the numbers that are looked for in
  let currentIndex = 0; // start point of counting
  let currentNode = this.head; //to have a start point in the array
  // use a while loop to go over the numbers starting at the head of the array (currentNode):
  while(currentNode) {
    if (currentNode.value === value) {
      indexes.push(currentIndex); //when the value that is looked for is found, it's pushed into the indexes array
    }
    currentNode = currentNode.next; //this way we go the next position in the array
    currentIndex++; // to track of the position in the array
  }
  return indexes;
};

let myLL = new LinkedList();


myLL.addToTail(1);
myLL.addToTail(5);
myLL.addToTail(3);
myLL.addToTail(5);
myLL.addToTail(8);
myLL.addToTail(7);
myLL.addToTail(5);

console.log(myLL.indexOf(5));
// # outputs [1,3,6]
