class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // Enqueue: Add an element to the end of the queue
  enqueue(data) {
    const newNode = new Node(data)

    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  // Dequeue: Remove and return the front element
  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const current = this.head
    this.head = current.next
    this.size--
    if (this.isEmpty()) {
      this.tail = null
    }
    return current.data
  }

  // Peek: Return the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.head.data
  }

  // Check if queue is empty
  isEmpty() {
    return this.size === 0
  }

  // Get the size of the queue
  getSize() {
    return this.size
  }

  // Clear the queue
  clear() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // Print the queue
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
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.print() // Output: 1 -> 2 -> 3
console.log('Front element:', queue.peek()) // Output: Front element: 1
console.log('Dequeued:', queue.dequeue()) // Output: Dequeued: 1
queue.print() // Output: 2 -> 3
console.log('Size:', queue.getSize()) // Output: Size: 2
console.log('Is empty:', queue.isEmpty()) // Output: Is empty: false
queue.clear()
console.log('Is empty after clear:', queue.isEmpty()) // Output: Is empty after clear: true
