function solution(my_string) {
   const a = my_string.toLowerCase();
    return [...a].sort().join('');
}