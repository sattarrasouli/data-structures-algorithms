class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  append(data) {
    const newNode = new Node(data)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }

  prepend(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    this.size++
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false
    }

    if (index === 0) {
      this.prepend(data)
      return true
    }

    const newNode = new Node(data)
    let current = this.head
    let previous = null
    let currentIndex = 0
    while (currentIndex < index) {
      previous = current
      current = current.next
      currentIndex++
    }

    previous.next = newNode
    newNode.next = current
    this.size++
    return true
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null
    }

    let current = this.head
    let previous = null
    let currentIndex = 0
    if (index === 0) {
      this.head = current.next
    } else {
      while (currentIndex < index) {
        previous = current
        current = current.next
        currentIndex++
      }
      previous.next = current.next
    }
    this.size--
    return current.data
  }

  remove(data) {
    let current = this.head
    let previous = null
    while (current) {
      if (current.data === data) {
        if (previous) {
          previous.next = current.next
        } else {
          this.head = current.next
        }
        this.size--
        return true
      }
      previous = current
      current = current.next
    }
    return false
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return null
    }
    let current = this.head
    let currentIndex = 0
    while (currentIndex < index) {
      current = current.next
      currentIndex++
    }
    return current.data
  }

  updateAt(data, index) {
    if (index < 0 || index >= this.size) {
      return false
    }

    let current = this.head
    let currentIndex = 0
    while (currentIndex < index) {
      current = current.next
      currentIndex++
    }
    current.data = data
    return true
  }

  contains(data) {
    let current = this.head
    while (current) {
      if (current.data === data) {
        return true
      }
      current = current.next
    }
    return false
  }

  indexOf(data) {
    let current = this.head
    let currentIndex = 0
    while (current) {
      if (current.data === data) {
        return currentIndex
      }
      current = current.next
      currentIndex++
    }
    return -1
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  clear() {
    this.size = 0
    this.head = null
  }

  toArray() {
    const result = []
    let current = this.head
    while (current) {
      result.push(current.data)
      current = current.next
    }
    return result
  }

  print() {
    console.log(this.toArray().join(' -> '))
  }
}

// Example usage
const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.insertAt(1.5, 2)
list.print() // Output: 0 -> 1 -> 1.5 -> 2 -> 3
console.log('Size:', list.getSize()) // Output: Size: 5
console.log('Contains 2:', list.contains(2)) // Output: Contains 2: true
list.remove(1.5)
list.print() // Output: 0 -> 1 -> 2 -> 3
list.updateAt(10, 1)
list.print() // Output: 0 -> 10 -> 2 -> 3
console.log('Index of 2:', list.indexOf(2)) // Output: Index of 2: 2
