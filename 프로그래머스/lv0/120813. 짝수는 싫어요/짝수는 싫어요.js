function solution(n) {
    let arr = new Array(n).fill().map((v, i)=>i+1);
    return arr.filter((v)=>v % 2 === 1)
}