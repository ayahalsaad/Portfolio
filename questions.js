function findMissingNumber(nums) {
    const n = nums.length;
    let totalSum = n * (n + 1) / 2;
    let arraySum = nums.reduce((acc, val) => acc + val, 0);
    return totalSum - arraySum;
}

// Test the function with the provided examples
console.log(findMissingNumber([3, 0, 1])); // Should return 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Should return 8
console.log(findMissingNumber([0, 1])); // Should return 2
