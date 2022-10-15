const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rooty = null;
  }
    root() { console.log('root'+this.rooty);
    return this.rooty;
  } 
  add(value) {
    this.rooty = addWithin(this.rooty, value);

    function addWithin(node, value) {
      if (node) { 
          if (node.value === value) {
          return node;
          }

          if (value < node.value) {
          node.left = addWithin(node.left, value);
          } else {
          node.right = addWithin(node.right, value);
          }
      return node;
      } else { 
       node=new Object; 
       node.value=value; 
       node.left=null; 
       node.right=null; 
       return node;
      }
    }
  }

  has(value) {
    return searchWithin(this.rooty, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return true;
      }

      return value < node.value ? 
        searchWithin(node.left, value) : 
        searchWithin(node.right, value);
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(value) {
    this.rooty = removeNode(this.rooty, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.value < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
      
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

       
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.value = minFromRight.value;

        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }
  }

  min() {
    if (!this.rooty) {
      return;
    }

    let node = this.rooty;
    while (node.left) {
      node = node.left;
    }

    return node.value;
  }


  max() {
    if (!this.rooty) {
      return;
    }

    let node = this.rooty;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }
}

module.exports = {
  BinarySearchTree
};