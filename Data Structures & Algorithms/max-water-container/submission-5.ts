class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let area = 0;
        if (heights.length === 0) return 0;
        let left = 0;
        let right = heights.length - 1;
        while(left < right){
            area = Math.max(area, Math.min(heights[left], heights[right]) * (right - left))
            if(heights[left] < heights[right]) left ++;
            else right--;
        }
        return area;
    }



}
