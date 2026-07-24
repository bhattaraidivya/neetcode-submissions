class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const frequency = new Map<number,number>();
        for (const num of nums){
           frequency.set(num,( frequency.get(num) || 0)+1);
    }
    const sorted = [...frequency.entries()].sort((a,b) => b[1] - a[1] );
    const result: number[] = [];
    for (let i = 0 ; i < k ; i++){
        result.push(sorted[i][0]);
    }
    return result;
    }
}
