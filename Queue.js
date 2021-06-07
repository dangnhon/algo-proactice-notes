// Queue implementation in Javascript with typical class functions
// Very similar to the Stack though with some key chacteristic differences 
// Queues are FIFO or 'first in first out' implemented
// Pay attention to enqueue (adding) and dequeue (removing)

class Queue {
    constructor(maxSize) {
      if (isNaN(maxSize)) {
        maxSize = 10
      }
      this.maxSize = maxSize
      this.queueContainer = [] 
    }
  
    display() {
      console.log(this.queueContainer) 
    }
  
    isEmpty() {
      return this.queueContainer.length === 0
    }
  
    isFull() {
      return this.queueContainer.length >= this.maxSize
    }
  
    enqueue(element) {
      if (this.isFull()) {
        console.log("Queue Over Flow!!!")
      } else {
        this.queueContainer.push(element) 
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue Under Flow!!!")
      } else {
        this.queueContainer.shift()
      }
    }
  
    peekFirstInLine() {
      if (this.isEmpty()) {
        console.log("No one's in line!")
      } else {
        return this.queueContainer[0]
      }
    }
  
    peekLastInLine() {
      if (this.isEmpty()) {
        console.log("No one's in line!") 
      } else {
        return this.queueContainer[this.queueContainer.length - 1] 
      }
    }
  
    clearQueue() {
      this.queueContainer = [] 
    }
  
}
  
let q = new Queue(3) 
q.display()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q.peekFirstInLine())
console.log(q.peekLastInLine())