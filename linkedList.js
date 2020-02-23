// Create a linked list class
class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
};

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    };
  
    insertFirst(item) {
      this.head = new _Node(item, this.head);
    };
  
    insertLast(item) {
      if (this.head === null) {
        this.insertFirst(item);
        return;
      }
  
      let tempNode = this.head;
  
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      };
  
      tempNode.next = new _Node(item, null);
    };
  
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
        //   if (currNode === null) {
        //     console.log('Item not found on list');
        //     return;
        //   }
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
    printList() {
      var curr = this.head;
      var str = "";
  
      while (curr) {
        str = str + curr.value + " ";
        curr = curr.next;
      }
      console.log(str);
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
    SLL.printList();

    SLL.insertFirst('Tauhida');
    SLL.printList();

    SLL.remove('Husker');
    SLL.printList();

    SLL.insertBefore('Boomer', 'Athena');
    SLL.printList();

    SLL.insertAfter('Helo', 'Hotdog');
    SLL.printList();

    SLL.insertAt('Kat', 3);
    SLL.printList();

    SLL.remove('Tauhida');
    SLL.printList();
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
  
function size(list) {
    let currNode = list.head;
    let i = 0;
  
    while (currNode.next !== null) {
      currNode = currNode.next;
      i++;
    }
    console.log(i);
    return i;
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

// Middle of a list
function middleList(list) {

    let mid = size(list) / 2;
    mid = Math.round(mid);
  
    let currNode = list.head;
    let prevNode = list.head;
    let i = 0;
  
    while (i !== mid) {
      if (!currNode.next) {
        return;
      }
      prevNode = currNode;
      currNode = currNode.next;
      i++;
    }
    if (currNode === null) {
      return;
    }
  
    let middle = prevNode;
    return console.log(list.find(middle.value));
}