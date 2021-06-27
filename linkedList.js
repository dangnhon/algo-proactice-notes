// step wise, create class and constructors for lisNodes and linkedList
class listNode {
  constructor(data) {
    this.data = data 
    this.next = null 
  }
}

// make sure to initialize the head to null in case nothing is passed
// let's implement some helper methods for linkedList
class linkedList {
  constructor(head = null) {
  this.head = head
  }

// able to access the .next method because the head is of the listNode class
  size() {
    let count = 0
    let node = this.head
    while(node) {
      count++
      node = node.next
    }
    return count
  }

  display() {
    let node = this.head
    while (node) {
      console.log(node.data + ' => ' )
      node = node.next
    }
  }

  clear() {
    this.head = null 
  }

  getFirst() {
    return this.head.data
  }

  getLast() {
    if (!this.head) return null
   
    let node = this.head
    while (node) {
      if (!node.next) {
        return node.data
      }
      node = node.next
    }
  }

  insertAtBeginning(newData) {
    let newNode = new listNode(newData) 
    newNode.next = this.head 
// might be confusing, but have previous this.head value as the newNode.next
// then reset the this.head to newNode to change it, then return it
    this.head = newNode
    return this.head 
  }

  insertAtEnd(newData) {
// check if link list is empty, if so, set the newNode
    let newNode = new listNode(newData) 
    if (!this.head) {
      this.head = newNode
    return this.head 
    }

//traverse the link list till the end to find the last node as tail
// set the next value of tail as the created newNode 
    let tail = this.head
    while (tail.next !== null) {
      tail = tail.next 
    }
    tail.next = newNode 
    return this.head 
  }
  
// helper method to find index of specific node, could be used later on for delete
getIndexHelper(index) {
  let counter = 0
  let node = this.head 
  while (node) {
    if (counter === index) {
      return node
    }
    counter++ 
    node = node.next 
  }
  return null 
}

  insertAtSpecific(newData, index) {
// check if link list is empty
    let newNode = new listNode(newData) 
    if (!this.head) {
      this.head = newNode 
    }
// if for some reason, they want to insert it at the beginning
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    }
    
    let prev = this.getIndexHelper(index - 1)
// line below sets the previous nodes 'next' to be the newNode's next value
    newNode.next = prev.next
// then sets previous nodes next to the newNode created 
// gotta tie them end to end when inserting or deleting
    prev.next = newNode 
  }

}

// let's create some nodes and pointers 
let node1 = new listNode(2) 
let node2 = new listNode(3) 
let node3 = new listNode(5)
// now lets 'link them together' lol
node1.next = node2
node2.next = node3

let list1 = new linkedList(node1) 

//console.log(list1.head.data) => value of 2
//console.log(list1.head.next.data) => value of 3
//console.log(list1.head.next.next.data) => value of 5

//console.log(list1.size())
//console.log(list1.getFirst())
//console.log(list1.getLast())

//list1.insertAtBeginning(1)
//list1.insertAtEnd(6)
//list1.insertAtSpecific(4, 2)

list1.display()
