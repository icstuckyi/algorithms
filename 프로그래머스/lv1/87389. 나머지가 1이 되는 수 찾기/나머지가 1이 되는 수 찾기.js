function solution(n) {
   for (let i = 2; i<n; i++){
       // n%i === 1 ? return i : undefined;
      if (n%i === 1) return i;
   }
}