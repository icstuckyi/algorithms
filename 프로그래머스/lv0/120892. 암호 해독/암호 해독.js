function solution(cipher, code) {
    let arr = cipher.split('');
    let a = [];
    for (let i = 1; i<=arr.length; i++) {
        a.push(arr[i*code-1]);
    }
    return a.join('')
}