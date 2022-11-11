function solution(my_string) {
   return my_string.split('').filter((item) => +item).reduce((a, b) => a + +b, 0);
}