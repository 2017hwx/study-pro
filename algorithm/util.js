class NodeList {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
class NodeListUtil {
  constructor() {}
  list2node(arr) {
    let headArr = [];
    for (let i = 0; i < arr.length; i++) {
      let head = new NodeList(arr[i]);
      headArr.push(head);
      if (i > 0) {
        headArr[i - 1].next = headArr[i];
      }
    }
    return headArr[0];
  }
  node2list(head) {
    let arr = [];
    while (head !== null) {
      arr.push(head.val);
      head = head.next;
    }
    return arr;
  }
}
