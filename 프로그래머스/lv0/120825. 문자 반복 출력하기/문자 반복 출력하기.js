function solution(my_string, n) {
    let ans = [];
    const arr = my_string.split('');
    for (let i=0; i<arr.length; i++) {
        for(let j=0; j<n; j++){
            ans.push(arr[i])
        }
    }
  return ans.join('');
}