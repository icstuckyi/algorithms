function solution(n)
{
   const narr = (n + "").split('');
   return narr.reduce((a, b) => +a + +b, 0);
}