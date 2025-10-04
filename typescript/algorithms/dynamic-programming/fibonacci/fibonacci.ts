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
  