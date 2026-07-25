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
     * @param {TreeNode} node
     * @return {TreeNode}
     */
   
    invertTree(root) {
       
        function invert(node){
        if (node === null) return ;
        const temp = node.left;
        
        node.left = node.right;
        node.right = temp;

        invert(node.left);
        invert(node.right);

        }
        invert(root);
        return root

    }
}
