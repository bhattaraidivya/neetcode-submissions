class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let area = 0;
        if (heights.length === 0) return 0;
        for (let i = 0; i < heights.length; i++){
                for (let j = i+1; j < heights.length ; j++ ){
                    area = Math.max(area,Math.min(heights[i],heights[j]) * (j -i))
                }
        }
        return area;
    }
}
