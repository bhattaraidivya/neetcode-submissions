/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root: TreeNode | null): boolean {
    const check = (node: TreeNode ,min:number ,max: number)=>{
        if (!node) return true;
        if(! (node.val > min && node.val < max)) return false;
        let left = check(node.left,min, node.val);
        let right = check(node.right, node.val, max);
        return left && right;

    }
    return check(root,-Infinity,Infinity)

    }
}
