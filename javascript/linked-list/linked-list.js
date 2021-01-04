class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode; 
    } else {
      this.tail.next = newNode;
    };
     this.tail = newNode;
     this.length += 1;
  }

  pop() {
    let currentNode = this.head;
    let penultimateNode = this.head;
    while(currentNode.next) {
      penultimateNode = currentNode;
      currentNode = currentNode.next; 
    }
    penultimateNode.next = null;
    this.tail = penultimateNode;
    this.length -= 1;
    return currentNode.value;
  }

  shift() {
    let value = this.head.value;
    let nextHead = this.head.next;
    this.head = nextHead;
    this.length -= 1;
    return value;
  }

  unshift(value) {
    let nextHead = this.head;
    this.head = new Node(value);
    this.head.next = nextHead;
    this.length += 1;
  }

  delete(value) {
    let evaluatedNode = this.head;
    let prevNode = null;
    let unfound = true;
    while(unfound) {
      if (evaluatedNode.value == value) { // we found the value 
        if(this.head == evaluatedNode) { // have to reset the head 
          this.shift();
        } else { // any other node besides the head
          prevNode.next = evaluatedNode.next;
          this.length -= 1;
        }
        unfound = false;
      } else { // bump all the references to the next node
        if(this.tail == evaluatedNode) { // reached the end womp womp
          return new Error("Expected value not found") 
        }
        prevNode = evaluatedNode;
        evaluatedNode = evaluatedNode.next;
        unfound = true;
      }
    }
  }

  count() {
    return this.length;
  }
}
