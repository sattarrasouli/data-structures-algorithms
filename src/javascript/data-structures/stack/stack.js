class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Push: Add an element to the top of the stack
  push(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    this.size++
  }

  // Pop: Remove and return the top element
  pop() {
    if (this.isEmpty()) {
      return null
    }
    const current = this.head
    this.head = current.next
    this.size--
    return current.data
  }

  // Peek: Return the top element without removing it
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.head.data
  }

  // Check if stack is empty
  isEmpty() {
    return this.size === 0
  }

  // Get the size of the stack
  getSize() {
    return this.size
  }

  // Clear the stack
  clear() {
    this.head = null
    this.size = 0
  }

  // Print the stack
  print() {
    const result = []
    let current = this.head
    while (current) {
      result.push(current.data)
      current = current.next
    }
    console.log(result.join(' -> '))
  }
}

// Example usage
const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print() // Output: 3 -> 2 -> 1
console.log('Top element:', stack.peek()) // Output: Top element: 3
console.log('Popped:', stack.pop()) // Output: Popped: 3
stack.print() // Output: 2 -> 1
console.log('Size:', stack.getSize()) // Output: Size: 2
console.log('Is empty:', stack.isEmpty()) // Output: Is empty: false
stack.clear()
console.log('Is empty after clear:', stack.isEmpty()) // Output: Is empty after clear: true
