class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums: number[]): number[] {

        let result: number[] = [];
        for(let i = 0; i < nums.length; i++){
            let left = i - 1;
            let right = i + 1;
            let total = 1;
           
            while(left != -1){
                total = total * nums[left];
                left--; 
            }
            while(right != nums.length){
                total = total * nums[right]
                right++
            }
            result.push(total);

        }
        return result
    }}
