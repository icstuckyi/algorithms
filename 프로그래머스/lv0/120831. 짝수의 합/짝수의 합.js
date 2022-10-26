function solution(n) {
    let a = 0;
    for (i=0; i<=n; i+=2) {
        a += i;
    }
    return a;
}