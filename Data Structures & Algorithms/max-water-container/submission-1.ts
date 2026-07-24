class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let area = 0;
        if (heights.length === 0) return 0;
        let left = 1;
        let right = heights.length;
        while(left < right){
            area = Math.max(area, Math.min(heights[left -1], heights[right -1]) * (right - left))
            if(heights[left - 1] < heights[right -1]) left ++;
            else right--;
        }
        return area;
    }



}
