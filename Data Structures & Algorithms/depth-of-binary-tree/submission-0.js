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
     * @return {number}
     */
    maxDepth(root) {
        function maxdepth(node){
            if (!node) return 0;
            const leftdepth = maxdepth(node.left);
            const rightdepth = maxdepth(node.right);
            return 1 + Math.max(leftdepth, rightdepth);
            

        }
       const output =  maxdepth(root);
       return output
        

    }
}
