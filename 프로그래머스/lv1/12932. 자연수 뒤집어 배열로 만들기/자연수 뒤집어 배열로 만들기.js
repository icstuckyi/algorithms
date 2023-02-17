function solution(n) {
    const narr = (n + "").split("").reverse();
    return narr.map((v) => +v);
}