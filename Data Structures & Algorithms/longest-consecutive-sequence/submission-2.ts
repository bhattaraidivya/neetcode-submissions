class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let count: number = 1;
        let max = 1;
        if (nums.length == 0 ){
            return 0;
        }
        const sorted = nums.sort((a,b) => a-b);
        
        for(let i = 1; i < nums.length ; i++ ){
            if(sorted[i] - sorted[i-1] === 1){
                count++
                max = Math.max(max, count)
                
            }else if(sorted[i] - sorted[i -1] === 0) {continue;} 
            else{
                count = 1;
            }
        }
         return max
    }
}
