function solution(number, limit, power) {
   
    let ans = 0;
    
    for (let i = 1; i <= number; i++) {
        let div = 1;
        for (let j = 1; j <= (i/2); j++) {
            if (i % j === 0) {
                div++;
            }   
        }
        ans += (limit >= div ? div : power);
    }
    return ans;
}