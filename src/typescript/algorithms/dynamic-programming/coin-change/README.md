# Coin Change Problem

The **Coin Change** problem is a classic **dynamic programming** problem:

> Given an array of coin denominations `coins` and a total `amount`, return the **minimum number of coins** needed to make up that amount. If the amount cannot be made, return `-1`.

### Steps in the Algorithm

#### 1- Handle the base case:

If amount = 0, return 0.

#### 2- Initialize a DP array dp of size amount + 1 filled with Infinity.

#### 3- Set dp[0] = 0 since 0 coins are needed to make 0.

#### 4- Loop through all amounts i = 1 to amount:

For each coin:

If i - coin >= 0, update dp[i] = min(dp[i], dp[i - coin] + 1).

#### 5- After filling the DP array, check dp[amount]:

If Infinity, return -1.

Otherwise, return dp[amount].

### Time and Space Complexity

---

#### Time Complexity: O(amount \* n)

n = number of coins

For each amount, we loop over all coins.

#### Space Complexity: O(amount)

We use a DP array of size amount + 1.

### 🧪 Test

---

To run the test for this algorithm:

```bash
# Clone the project
git clone https://github.com/sattarrasouli/data-structures-algorithms.git

# Go to directory
cd data-structures-algorithms

# Install dependencies
npm install

# Run the test for this specific algorithm
npx jest coinChange.test.ts

```
