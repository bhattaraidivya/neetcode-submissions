class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
           let output = [];
            if (digits.length === 0 ) return output
        const phone = {
            "2" :"abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        }
        
        function backtrack(i, currentstring){
            if (currentstring.length === digits.length) {
                output.push(currentstring);
                return;
            }
           for(const c of phone[digits[i]]){
            backtrack(i+1 , currentstring + c)
           }

}
        
        backtrack(0,"");
        return output
    }
}

