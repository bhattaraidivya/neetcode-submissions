class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums: number[]): number[] {

        
        let output: number[] = new Array(nums.length).fill(1);
        let prefix = 1;
        let postfix = 1;
        for (let i = 0; i< nums.length; i++){
            output[i] = prefix;
           prefix *= nums[i];
           
        }
        for(let i = nums.length - 1 ; i >= 0; i-- ){
            output[i] *= postfix;
            postfix *= nums[i];
        }
        return output
        
    }}
