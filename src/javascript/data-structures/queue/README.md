# JavaScript Queue Implementation

## Overview

This project provides an implementation of a queue data structure in JavaScript, contained in the `queue.js` file. A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, where elements are added at the end (rear) and removed from the front. This implementation uses a singly linked list with a `Node` class for elements and a `Queue` class for operations.

## Features

- FIFO (First-In-First-Out) behavior
- Efficient enqueue and dequeue operations (O(1) time complexity)
- Maintains both head and tail pointers for efficiency
- Methods for peeking, checking size, and clearing the queue
- Built on a linked list structure
- Example usage included in the source file

## Installation

No external dependencies are required. Include the `queue.js` file in your JavaScript project.

```javascript
// Example: Including the file
const Queue = require('./queue.js')
```
