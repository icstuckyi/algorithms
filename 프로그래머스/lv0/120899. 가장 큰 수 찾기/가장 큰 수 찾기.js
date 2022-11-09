function solution(array) {
    let arr = [];
    let max = Math.max(...array);
    arr.push(max, array.indexOf(max));
    return arr;
}