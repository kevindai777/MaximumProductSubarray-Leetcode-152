//Objective is to find the maximum product from a continuous subarray in a 1-D array.

let nums = [2,3,-2,4]


//O(n) solution that uses dynamic programming to update the current max and min,
//then updates the max of the entire array at the end.

let currMax = nums[0]
let currMin = nums[0]
let max = nums[0]

for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
        let temp = currMax 
        currMax = currMin 
        currMin = temp
    }

    currMax = Math.max(nums[i], nums[i] * currMax)
    currMin = Math.min(nums[i], nums[i] * currMin)

    max = Math.max(max, currMax)
}

return max