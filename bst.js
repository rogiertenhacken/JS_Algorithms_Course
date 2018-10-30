//create a Binary Search True

//important! remember the principal of a Binary Search (alphabet example)

function BST(value) {
	this.value = value; //start value
	this.left = null; //at start it is null
	this.right = null; //at start it is null
}

//insert the next value to left or right of the given base value
BST.prototype.insert = function(value) {
	//code block 01
  if (value <= this.value) {
    if (!this.left)  this.left = new BST(value);
    else this.left.insert(value);
  }
	//code block 02
  else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};
// insert explained:
// a new insert is compared to the top value (50 in this case). If it is smaller it executes code block 01,
// if it is greater it executes code block 02.
// this is RECURSION!
// I.E. 100 is > 50, so execute code block 02. the next node is encounters in the tree is 70, 100 is > 70 so execite code block 02,
// no other nodes in this part of the tree. the rucrsion stops for this insert.
// now the next insert is 60. 60 is > 50 so code block 02 (to the right), 60 < 70 execute code block 01 (to the left)
// etc etc


// check if a value is present in the Binary Search Tree
BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  else if ( value < this.value) {
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if ( value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

// to be run in different orders:
// pre-orders i.e. to copy a Binary Tree
// post-order i.e. to delete nodes
// give the order-type as a param when calling the function (line 61)
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') iteratorFunc(this.value);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  if (order === 'in-order') iteratorFunc(this.value);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === 'post-order') iteratorFunc(this.value);
};

// usefull to define a hierarchy
// queue is first in line first in
//breadthFirstTraversal check the Binary Tree level by level (instead of tree by tree):
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
  let queue = [this];
  //the while-loop stops when the queue is empty
  while (queue.length) {
    let treeNode = queue.shift(); //pushes the value of treeNode into the iteratorFunc
    iteratorFunc(treeNode); //checks of there is a child Node (in treeNode)
    if (treeNode.left) queue.push(treeNode.left); // pushes the child node into the queue
    if (treeNode.right) queue.push(treeNode.right);
  }
};


// EXERCISE:

BST.prototype.getMinVal = function() {
  //return the minimum value
};

BST.prototype.getMaxVal = function() {
  //return the maximum value
};


 // end of EXERCISE


let bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

// bst.depthFirstTraversal(log, 'post-order');

// function log(value) {
//   console.log(value);
// }

//use this one on the breadthFirstTraversal method:
function log(node) {
  console.log(node.value);
}

bst.breadthFirstTraversal(log);
