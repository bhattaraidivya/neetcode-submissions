class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

      let i = 0;
      let j = numbers.length -1;
      while (i !== j){
        let match = numbers[i] + numbers[j];
        if( match === target){
          return ([i+1,j+1])
        }
        else if (match > target){
          j--

        }
        else{
          i++
        }
      }
    }
}
