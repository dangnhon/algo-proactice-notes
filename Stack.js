// Stack implementation in Javascript with typical class functions
// LIFO or 'last in first out' implemented
// Pay attention to why helper class methods like isFull and isEmpty important 
// contructor to initialize maxSize, check is valid number, set maxSize 
// Init a container
class Stack {
    constructor(maxSize) {
      if (isNaN(maxSize)) {
        maxSize = 10
      }
      this.maxSize = maxSize
      this.container = [] 
    }
  
    display() {
      console.log(this.container)
    }
  
    isFull() {
      return this.container.length >= this.maxSize
    }
  
    isEmpty() {
      return this.container.length === 0 
    }
  
    push(element) {
      if(this.isFull()) {
        console.log('Stack Overflow!!')
      } else {
        this.container.push(element)
      }
    }
  
    pop() {
      if (this.isEmpty()) {
        console.log("Stack Underflow!!!")
      } else {
        this.container.pop()
      }
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log("Stack Underflow!!!")
      } else {
        return this.container[this.container.length - 1]
      }
    }
  
    clear() {
      this.container = []
    }
  
}
   
let s = new Stack(3)
  
s.display();
s.push(1)
s.push(2)
s.push(3)
// s.push(4)
// s.pop()
console.log(s.peek())