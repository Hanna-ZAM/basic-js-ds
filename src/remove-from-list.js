const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  
  let current = l;
  let prev = null; while (current){
 if (current.value!==k){
    prev = current; console.log('prev='+prev);
    current = current.next; console.log('current='+current);
  } else{ if(prev===null){ l=current.next} else{
    prev.next=current.next;}
    current.next=null;

  }}
  return l
}

module.exports = {
  removeKFromList
};


class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}
const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);
function removeKFromList(l, k) {
  
  let current = l;
  let prev = null; 
  while (current){
      
 if (current.value!==k){
    prev = current; 
    console.log('prev='+prev);
    current = current.next;
     console.log('current='+current);
  } 
 else{ 
     if(prev===null){
     l=current.next;
     current=l;
    
    } else{ 
      
    prev.next=current.next; 
    console.log('prev2  '+prev);  
    current= current.next; console.log('current  '+current);}
     
   


                                         

  }} console.log(l);
  
 
  return l;

}   