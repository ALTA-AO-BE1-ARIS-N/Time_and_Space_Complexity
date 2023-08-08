function pairWithTargetSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return [];
  }

{ // console.log
console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6)); // [1, 3]
console.log(pairWithTargetSum([2, 5, 9, 11], 11));  // [0, 2]
console.log(pairWithTargetSum([1, 3, 5, 7], 12));   // [2, 3]
console.log(pairWithTargetSum([1, 4, 6, 8], 10));   // [1, 2]
console.log(pairWithTargetSum([1, 5, 6, 7], 6));    // [0, 1]
}