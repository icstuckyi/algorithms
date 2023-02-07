function solution(n) {
    // 약수만 모은 배열
    let arr = [];
    for (let i = 1; i <= n; i++){
        if (n % i === 0){
            arr.push(i);
        }
    }
    return arr.length;    
}