export function coinChange(coins: number[], amount: number): number {
  let dp: number[] = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

// // Example:
// console.log(coinChange([1, 2, 5], 11)); // Output: 3 (5+5+1)
