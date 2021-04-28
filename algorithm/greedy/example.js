/**
 * 44. 通配符匹配
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 * 两个字符串完全匹配才算匹配成功。
 * @param {*} s 可能为空，且只包含从 a-z 的小写字母
 * @param {*} p 可能为空，且只包含从 a-z 的小写字母以及字符 ? 和 *
 */
function greedy_1(s, p) {
    if (p.length == 0) {
        return p === s;
    }
    let j = 0;
    let isrun = false;
    for (let i = 0; i < p.length; i++) {
        const cur = p.charAt(i);
        if (cur === '*') {
            isrun = true;
        } else {
            if (isrun) {
                while (s.charAt(j) !== cur) {
                    j++;
                }
                isrun = false;
            }
            if (cur !== '?' && cur !== s.charAt(j)) {
                return false;
            }
            j++;
        }
    }
    return isrun || j === p.length;
}