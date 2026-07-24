class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        let result:string = "";

        for (const word of strs){
            
            result = result + "#!@" + word;
        }
        return result;
        
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const word: string[] = str.split("#!@");
        return word.slice(1)

    }
}
