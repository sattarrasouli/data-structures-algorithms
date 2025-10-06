# Fibonacci Sequence (Iterative Approach)

This project contains a TypeScript implementation of the **Fibonacci sequence** using an **iterative approach**.

## 📌 Algorithm Explanation

The Fibonacci sequence is defined as:

- **Fib(0) = 0**
- **Fib(1) = 1**
- **Fib(n) = Fib(n-1) + Fib(n-2)** for n > 1

Instead of using recursion (which has exponential time complexity), we use an **iterative bottom-up approach** to compute Fibonacci numbers efficiently.


## 🧪 Test

To run the test for this algorithm:

```bash
# Clone the project
git clone https://github.com/sattarrasouli/data-structures-algorithms.git

# go to directory
cd data-structures-algorithms

# Install dependencies
npm install

# Run the test for this specific algorithm
npx jest fibonacci.test.ts

```

## Time Complexity:

O(n) → We compute each Fibonacci number once in a loop from 2 to n.

## Space Complexity:

O(1) → We only store three variables (prev1, prev2, and curr) regardless of input size.

### 🔹 Steps in the Algorithm
1. Handle the base cases:  
   - If `n = 0`, return `0`.  
   - If `n = 1`, return `1`.
2. Initialize two variables:
   - `prev2 = 0` → stores Fib(n-2)  
   - `prev1 = 1` → stores Fib(n-1)  
3. Iterate from `2` to `n`:  
   - Compute the current Fibonacci number: `curr = prev1 + prev2`
   - Update values:
     - `prev2 = prev1`
     - `prev1 = curr`
4. After the loop, return `prev1` (which represents Fib(n)).

---

## 💻 Code

```ts
function fibonacci(n: number): number {
  if (n <= 1) return n; // Base cases

  let prev2 = 0; // Fib(0)
  let prev1 = 1; // Fib(1)

  for (let i = 2; i <= n; i++) {
    let curr = prev1 + prev2; // recurrence relation
    prev2 = prev1;
    prev1 = curr;
  }
  return prev1;
}

// Example
console.log(fibonacci(10)); // 55
