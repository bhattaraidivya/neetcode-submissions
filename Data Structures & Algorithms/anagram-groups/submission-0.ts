class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      let result: string[][] = [];
      let check = new Set();
      
      for (let i = 0; i < strs.length; i++){
        let sortedi = strs[i].split("").sort().join();
        if (check.has(sortedi)) continue;
        check.add(sortedi);
        let temp = [strs[i]];
        
        for (let j = i+1; j< strs.length; j++){
          let sortedj = strs[j].split("").sort().join();
          
          if(sortedi === sortedj){
            temp.push(strs[j]);
          }
          
         
        }
        result.push(temp)
      }
      return result; 
    }
}
