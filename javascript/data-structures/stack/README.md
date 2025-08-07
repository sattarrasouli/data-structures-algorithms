# JavaScript Stack Implementation

## Overview

This project provides an implementation of a stack data structure in JavaScript, contained in the `stack.js` file. A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle, where elements are added and removed from the same end (the top). This implementation uses a singly linked list with a `Node` class for elements and a `Stack` class for operations.

## Features

- LIFO (Last-In-First-Out) behavior
- Efficient push and pop operations (O(1) time complexity)
- Methods for peeking, checking size, and clearing the stack
- Built on a linked list structure
- Example usage included in the source file

## Installation

No external dependencies are required. Include the `stack.js` file in your JavaScript project.

```javascript
// Example: Including the file
const Stack = require('./stack.js')
```

## Usage

Create a new stack and use its methods to manipulate data:

```javascript
const stack = new Stack()

// Add elements
stack.push(1) // Push 1 to the top
stack.push(2) // Push 2 to the top
stack.push(3) // Push 3 to the top

// Print the stack
stack.print() // Output: 3 -> 2 -> 1

// Other operations
console.log('Top element:', stack.peek()) // Output: Top element: 3
console.log('Popped:', stack.pop()) // Output: Popped: 3
stack.print() // Output: 2 -> 1
console.log('Size:', stack.getSize()) // Output: Size: 2
console.log('Is empty:', stack.isEmpty()) // Output: Is empty: false
stack.clear()
console.log('Is empty after clear:', stack.isEmpty()) // Output: Is empty after clear: true
```

## Methods

The `Stack` class provides the following methods:

- **`push(data)`**: Adds an element to the top of the stack. O(1)
- **`pop()`**: Removes and returns the top element of the stack. Returns `null` if the stack is empty. O(1)
- **`peek()`**: Returns the top element without removing it. Returns `null` if the stack is empty. O(1)
- **`isEmpty()`**: Returns `true` if the stack is empty, `false` otherwise. O(1)
- **`getSize()`**: Returns the number of elements in the stack. O(1)
- **`clear()`**: Removes all elements from the stack. O(1)
- **`print()`**: Prints the stack contents as a string (e.g., "3 -> 2 -> 1"). O(n)

## Time and Space Complexity

- **Time Complexity**:
  - O(1): `push`, `pop`, `peek`, `isEmpty`, `getSize`, `clear`
  - O(n): `print`
- **Space Complexity**: O(n) where n is the number of elements in the stack

## Example

The `stack.js` file includes example usage at the bottom. Run the file with Node.js to see the output:

```bash
node stack.js
```

## Notes

- This implementation uses a linked list structure, similar to the `linked-list.js` implementation, but is tailored for stack operations (LIFO).
- All primary operations (push, pop, peek) are O(1), making it efficient for stack-specific use cases.

## License

This project is licensed under the MIT License.
