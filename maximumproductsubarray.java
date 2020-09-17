//Java Solution

class Solution {
    public int maxProduct(int[] nums) {
        int currMin = nums[0];
        int currMax = nums[0];
        int endMax = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] < 0) {
                int temp = currMax;
                currMax = currMin;
                currMin = temp;
            }
            
            currMin = Math.min(nums[i], nums[i] * currMin);
            currMax = Math.max(nums[i], nums[i] * currMax);
            endMax = Math.max(currMax, endMax);
        }
        
        return endMax;
    }
}