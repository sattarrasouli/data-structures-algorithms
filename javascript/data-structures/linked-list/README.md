# JavaScript Singly Linked List Implementation

## Overview

This project provides a complete implementation of a singly linked list data structure in JavaScript, contained in the `linked-list.js` file. A singly linked list is a linear data structure where each element (node) contains data and a reference to the next node. This implementation includes a `Node` class for individual elements and a `LinkedList` class with methods for list manipulation.

## Features

- Dynamic size adjustment
- Efficient insertion and deletion operations
- Methods for searching, updating, and converting the list
- Includes `indexOf` method to find the position of a specific value
- Clear and maintainable code structure
- Example usage included in the source file

## Installation

No external dependencies are required. Include the `linked-list.js` file in your JavaScript project.

```javascript
// Example: Including the file
const LinkedList = require('./linked-list.js')
```

## Usage

Create a new linked list and use its methods to manipulate data:

```javascript
const list = new LinkedList()

// Add elements
list.append(1) // Add 1 to the end
list.append(2) // Add 2 to the end
list.prepend(0) // Add 0 to the beginning
list.insertAt(1.5, 2) // Insert 1.5 at index 2

// Print the list
list.print() // Output: 0 -> 1 -> 1.5 -> 2

// Other operations
console.log('Size:', list.getSize()) // Output: Size: 4
console.log('Contains 2:', list.contains(2)) // Output: Contains 2: true
console.log('Index of 2:', list.indexOf(2)) // Output: Index of 2: 2
list.remove(1.5) // Remove node with data 1.5
list.updateAt(10, 1) // Update index 1 to 10
list.print() // Output: 0 -> 10 -> 2
```

## Methods

The `LinkedList` class provides the following methods:

- **`append(data)`**: Adds a node with the specified data to the end of the list. O(n)
- **`prepend(data)`**: Adds a node with the specified data to the beginning of the list. O(1)
- **`insertAt(data, index)`**: Inserts a node with the specified data at the given index. Returns `true` if successful, `false` if index is invalid. O(n)
- **`removeAt(index)`**: Removes the node at the specified index and returns its data. Returns `null` if index is invalid. O(n)
- **`remove(data)`**: Removes the first node with the specified data. Returns `true` if found and removed, `false` otherwise. O(n)
- **`get(index)`**: Returns the data at the specified index or `null` if index is invalid. O(n)
- **`updateAt(data, index)`**: Updates the data at the specified index. Returns `true` if successful, `false` if index is invalid. O(n)
- **`contains(data)`**: Returns `true` if the list contains the specified data, `false` otherwise. O(n)
- **`indexOf(data)`**: Returns the index of the first occurrence of the specified data or `-1` if not found. O(n)
- **`getSize()`**: Returns the number of nodes in the list. O(1)
- **`isEmpty()`**: Returns `true` if the list is empty, `false` otherwise. O(1)
- **`clear()`**: Removes all nodes from the list. O(1)
- **`toArray()`**: Converts the list to an array. O(n)
- **`print()`**: Prints the list contents as a string (e.g., "1 -> 2 -> 3"). O(n)

## Time and Space Complexity

- **Time Complexity**:
  - O(1): `prepend`, `getSize`, `isEmpty`, `clear`
  - O(n): `append`, `insertAt`, `removeAt`, `remove`, `get`, `updateAt`, `contains`, `indexOf`, `toArray`, `print`
- **Space Complexity**: O(n) where n is the number of nodes

## Example

The `linked-list.js` file includes example usage at the bottom. Run the file with Node.js to see the output:

```bash
node linked-list.js
```

## Notes

- The implementation has been corrected to fix issues in the original code, including proper variable declarations and logical conditions.
- The `indexOf` method is included, which was not present in some standard implementations, adding functionality to find the position of a specific value.

## License

This project is licensed under the MIT License.
