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
    diameterOfBinaryTree(root) {

        function maxdepth( node, diameter){
        if (!node) return 0;
        let leftnode = maxdepth(node.left,diameter);
        let rightnode = maxdepth(node.right,diameter);
        diameter[0] = Math.max(diameter[0], leftnode + rightnode);
        return 1 + Math.max(leftnode, rightnode)
    }

    let diameter = [0];
    maxdepth(root, diameter);
    return diameter[0]



    }


}
