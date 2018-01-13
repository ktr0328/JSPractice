const nums = [100, 300, 500, 700, 900];
const min = Math.min.apply(null, nums);  // 100
const max = Math.max.apply(null, nums);  // 900

console.log(min);
console.log(max);

console.log("-".repeat(50));

console.log(Math.min(nums)); // NaN
console.log(Math.min(100, 300, 500, 700, 900)); // 100
