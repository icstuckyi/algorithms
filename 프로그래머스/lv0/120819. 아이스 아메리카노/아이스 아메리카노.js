function solution(money) {
    let arr = [];
    arr.push(Math.floor(money/5500));
    arr.push(money - (arr[0]*5500));
    return arr;
}