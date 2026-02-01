function knapsackOptimized(weights, values, W) {
   const n = weights.length;
   // 创建一个一维数组 dp，初始化为 0
   const dp = Array(W + 1).fill(0); // 表示最大重量为 W 的背包中，容量为 j 的情况下，最大价值

   // 填充 dp 数组
   for (let i = 0; i < n; i++) {
      for (let w = W; w >= weights[i]; w--) {
         dp[w] = Math.max(dp[w]/* 未选择当前物品 */, dp[w - weights[i]] + values[i] /* 选择当前物品 */);
         console.log(dp);
      }
   }

   // 返回最大价值
   return dp[W];
}


function knapsackOptimizedWithItems(weights, values, W) {
   const n = weights.length;
   // 创建一个一维数组 dp，初始化为 0
   const dp = Array(W + 1).fill(0); // 表示最大重量为 W 的背包中，容量为 j 的情况下，最大价值
   // 记录选择路径
   const selected = Array.from({ length: W + 1 }, () => []);

   // 填充 dp 数组
   for (let i = 0; i < n; i++) {
      for (let w = W; w >= weights[i]; w--) {
         if (dp[w - weights[i]] + values[i] > dp[w]) {
            dp[w] = dp[w - weights[i]] + values[i];
            // 更新选择路径
            selected[w] = [...selected[w - weights[i]], i];
         }
      }
   }

   // 回溯找到最大组合
   const maxVal = dp[W];
   const items = selected[W].map(idx => ({ weight: weights[idx], value: values[idx] }));

   return { maxValue: maxVal, items };
}

// 输出示例：{ maxValue: 7, items: [ { weight: 2, value: 3 }, { weight: 3, value: 4 } ] }

// 示例数据
const weights = [2, 3, 4, 5];
const values = [3, 4, 5, 6];
const W = 5;

console.log(knapsackOptimized(weights, values, W)); // 输出 7