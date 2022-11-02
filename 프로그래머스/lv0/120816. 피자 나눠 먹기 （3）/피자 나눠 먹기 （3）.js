function solution(slice, n) {
    if (slice>=n) return 1;
    else return n%slice === 0 ? n/slice : Math.ceil(n/slice);
}