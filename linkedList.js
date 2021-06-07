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

}

// let's create some nodes and pointers 
let node1 = new listNode(2) 
let node2 = new listNode(3) 
let node3 = new listNode(5)

node1.next = node2
node2.next = node3

// now lets 'link them together' lol
let list1 = new linkedList(node1) 
// console.log(list1.head.data) => value of 2
// console.log(list1.head.next.data) => value of 3
// console.log(list1.head.next.next.data) => value of 5

// console.log(list1.size())
// console.log(list1.getFirst())
// console.log(list1.getLast())
// list1.display()