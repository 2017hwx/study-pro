class NodeList {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class NodeListUtil {

    constructor() { }

    arrayToList(arr) {
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
    listToArray(head) {
        let arr = [];
        while (head !== null) {
            arr.push(head.val);
            head = head.next;
        }

        return arr;
    }

    listReverse(head) {
        let arr = [];
        while (head !== null) {
            this.listReverse(head.next)
            arr.push(head.val);
        }
        return arr;
    }

}