class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const newS = s.toLowerCase().replace(/[^a-z0-9]/g,"")
        const t = newS.split("").reverse().join("");
        return t == newS
    }
}
