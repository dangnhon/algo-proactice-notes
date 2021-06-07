class BST {
    constructor(data) {
      this.data = data 
      this.left = null 
      this.right = null 
    }
  // insert happens recursively
  // checks if the newData is less than current node this.data
  // Binary search Tree is set up where smaller values on the left, larger on right
  // travels downward until the else if statement is true 'no more left node' or 'right node' 
    insert(newData) {
      if (newData < this.data && this.left) {
        this.left.insert(newData)
      } else if (newData < this.data) {
        this.left = new BST(newData)
      }
  
      if (newData > this.data && this.right) {
        this.right.insert(newData)
      } else if (newData > this.data) {
        this.right = new BST(newData)
      }
    }
  
  // contains method is used to check if value exists in binary search tree 
  // also will be searching recursively similar to the insert class method
  // it will recursively search either the left or right to find target
  // if no target is available, then ir returns null 
    contains(target) {
      if (target === this.data) {
        return this 
      }
      if (target < this.data && this.left) {
        return this.left.contains(target) 
      } else if (target > this.data && this.right) {
        return this.right.contains(target) 
      } else {
        return null 
      }
    }
  
  // preOrder, inOrder, postOrder DFS traversals 
    preOrder() {
      console.log(this.data) 
      this.left && preOrder(this.left) 
      this.right && preOrder(this.right)
    }
  
    inOrder() {
      this.left && inOrder(this.left) 
      console.log(this.data) 
      this.right && inOrder(this.right) 
    }
  
    postOrder() {
      this.left && postOrder(this.left) 
      this.right && postOrder(this.right)
      console.log(this.data) 
    }
  
  }
  
  // nonClass traversal functions, class traversals are listed above
  function preOrder(root) {
    console.log(root.data) 
    root.left && preOrder(root.left) 
    root.right && preOrder(root.right) 
  }
  
  function inOrder(root) {
    root.left && inOrder(root.left) 
    console.log(root.data) 
    root.right && inOrder(root.right)
  }
  
  function postOrder(root) {
    root.left && postOrder(root.left)
    root.right && postOrder(root.right)
    console.log(root.data)
}
  
let tree = new BST(7)
tree.insert(4) 
tree.insert(2)
tree.insert(9) 
tree.insert(12)
tree.insert(11) 
tree.insert(3) 

tree.preOrder()
tree.inOrder()
tree.postOrder() 
onsole.log(tree.contains(2))
console.log(tree) 
//preOrder(tree) 
//inOrder(tree) 
//postOrder(tree) 