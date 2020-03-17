// implementation of a generic node class
class _Node {
    // constructor - holds the data and pointer
    constructor(data, next = null) {
        this.value = value;
        this.next = next;
    }
};

// create LL class
class LinkedList {
    // head to indicate the beginning of the list
    constructor() {
      this.head = null;
    };
    
    // insert at first position (head)
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    };
  
    // insert in last position
    insertLast(item) {
      // if head is empty made item first (head)
      if (this.head === null) {
          this.insertFirst(item);
      }
      // move through the list until you reach the end of the list
      else {
          let tempNode = this.head;
          while (tempNode.next !== null) {
              tempNode = tempNode.next;
          }
          // set the end node's next pointer to the new node
          tempNode.next = new _Node(item, null);
      }
    }
  
    insertBefore(nextNode, item) {
      if (this.head === null) {
        this.insertFirst(item);
      }
      else {
        let currNode = this.head;
        let prevNode = this.head;

        while ((currNode !== null) && (currNode.value !== nextNode)) {
          prevNode = currNode;
          currNode = currNode.next;
        }

        prevNode.next = new _Node(item, currNode);

      }
    }
  
    insertAfter(afterItem, item) {
      if (this.head === null) {
        this.insertFirst(item);
        return;
      }
  
      let currNode = this.find(afterItem);
  
      if (currNode === null) {
        this.insertLast(item)
        return;
      }
  
      currNode.next = new _Node(item, currNode.next);
    }
  
    insertAt(item, index) {
      if (this.head === null) {
        this.insertFirst(item);
        return;
      }
  
      let currNode = this.head;
      let currPosition = 1;
  
      while (currPosition < index - 1) {
        currNode = currNode.next;
        currPosition++;
      };
  
      currNode.next = new _Node(item, currNode.next);
    }
  
    find(item) {
      //Start at the head
      let currNode = this.head;
  
      //If the list is empty
      if (!this.head) {
        return null;
      };
  
      // Check for the item
      while (currNode.value !== item) {
        // return null if its the end of the list & the item is not on the list
        if (currNode.next === null) {
          return null;
        }
  
        // keep looking
        currNode = currNode.next;
  
      };
  
      // Found it
      return currNode;
    }
  
    remove(item) {
      // If the list is empty
      if (!this.head) {
        return null;
      }
  
      // If the node to be removed is head, make the next node head
      if (this.head.value === item) {
        this.head = this.head.next;
        return;
      }
  
      // Start at the head
      let currNode = this.head;
  
      // Keep track of previous
      let prevNode = this.head;
  
      while ((currNode !== null) && (currNode.value !== item)) {
        // Save the previous node 
        prevNode = currNode;
        currNode = currNode.next;
      }
  
      if (currNode === null) {
        console.log('Item not found');
        return;
      }
  
      prevNode.next = currNode.next;
    }
  
    // prints the list items 
    printListDataData() {
      let current = this.head;
  
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  
  };

// Creating a singly linked list
function main() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertFirst('Boomer');
    SLL.insertFirst('Helo');
    SLL.insertFirst('Husker');
    SLL.insertFirst('Starbuck');
    SLL.printListData();

    SLL.insertFirst('Tauhida');
    SLL.printListData();

    SLL.remove('Husker');
    SLL.printListData();

    SLL.insertBefore('Boomer', 'Athena');
    SLL.printListData();

    SLL.insertAfter('Helo', 'Hotdog');
    SLL.printListData();

    SLL.insertAt('Kat', 3);
    SLL.printListData();

    SLL.remove('Tauhida');
    SLL.printListData();
}
main();

// Supplemental functions for a linked list
function display(list) {
    if (list.head) {
      console.log(list.head.value);
    } else {
      console.log('Empty List');
      return;
    }
}
  
function size(list){

  let curr = list.head
  let counter = 0

  while(curr !== null){
    curr = curr.next
    counter++
  }

  return counter
}
  
  
function isEmpty(list) {
    if (list.head) {
      console.log('false');
    } else {
      console.log('true');
    }
}
  
function findPrevious(list, key) {
    if (!list.head) {
      return;
    }
  
    let currNode = list.head;
    let prevNode = list.head;
  
    while (currNode.value !== key) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    console.log(prevNode.value);
    return prevNode.value;
}
  
function findLast(list) {
    if (!list.head) {
      return;
    }

    let currNode = list.head;
  
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
  
    console.log(currNode.value);
    return currNode.value;
}

// Mystery program
// Removes duplicates from list
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}

// Reverse a list
function reverseList(list) {
    let newList = list;
  
    let currentNode = newList.head;
    var previous = null;
  
    while (currentNode) {
      // save next
      var save = currentNode.next;
      // reverse pointer
      currentNode.next = previous;
      // increment previous to current node
      previous = currentNode;
      // increment node to next node or null at end of list
      currentNode = save;
    }
  
    newList.tail = newList.head;
    newList.head = previous;
   
    return newList;
}

// 3rd from the end
function ThirdFromEnd(list) {
    let currNode = list.head;
    let nextNode = currNode.next;
  
    while (nextNode.next.next !== null) {
      currNode = currNode.next;
      nextNode = nextNode.next;
    }
  
    if (nextNode.next.next === null) {
      return currNode.value;
    }
}

// Find the middle element
function middleOfList(list){

  let curr = list.head
  let middleElement = list.head
  let thisSize = size(list)

  if(thisSize !== 0){
    let middle = Math.floor(thisSize/2)
    
    for(let i=0; i<middle; i++){
      curr = curr.next
    }
    middleElement = curr
  }

  return middleElement
}