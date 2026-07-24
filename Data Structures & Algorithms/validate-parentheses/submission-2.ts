class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const pairs = {
            ')':'(',
            '}':'{',
            ']':'['
        };

    let stack = [];
    for (let char of s){
        if ("({[".includes(char)){
            stack.push(char)
        }
        else{
            let popped = stack.pop();
            if(!(popped == pairs[char])) return false;
        }

    }
    if (stack.length == 0 ) return true;
    return false
    }
}
