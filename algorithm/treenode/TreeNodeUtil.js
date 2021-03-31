//二叉树
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
  createTreeNode(arr, index = 1, root = this) {
    let len = arr.length;
    if (len >= index) {
      root.val = arr[index - 1];
    }
    if (len >= 2 * index) {
      root.left = new TreeNode();
      this.createTreeNode(arr, 2 * index, root.left);
    }
    if (len > 2 * index) {
      root.right = new TreeNode();
      this.createTreeNode(arr, 2 * index + 1, root.right);
    }
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
    this.beforSortArr = [];
    this.midSortArr = [];
    this.afterSortArr = [];
  }

  getHeight(node = this.root) {
    if (node == null) {
      return 0;
    } else {
      const lheight = this.getHeight(node.left);
      const rheight = this.getHeight(node.right);
      return Math.max(lheight, rheight) + 1;
    }
  }

  beforSort(node = this.root, arr = this.beforSortArr) {
    if (!!node) {
      arr.push(node.val);
      this.beforSort(node.left, arr);
      this.beforSort(node.right, arr);
    }
  }

  middleSort(node = this.root, arr = this.midSortArr) {
    if (!!node) {
      this.middleSort(node.left, arr);
      arr.push(node.val);
      this.middleSort(node.right, arr);
    }
  }

  afterSort(node = this.root, arr = this.afterSortArr) {
    if (!!node) {
      this.afterSort(node.left, arr);
      this.afterSort(node.right, arr);
      arr.push(node.val);
    }
  }
}

//二叉树中序迭代器
class BSTIterator {
  constructor(root) {
    this.root = root;
    this.nodeArray;
  }
  beforSort(node, arr) {
    if (!!node) {
      arr.push(node.val);
      beforSort(node.left, arr);
      beforSort(node.right, arr);
    }
  }
  next() {}
  hasNext() {}
}
