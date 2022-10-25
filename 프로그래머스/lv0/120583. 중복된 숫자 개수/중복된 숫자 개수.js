function solution(array, n) {
  let countarr = array.filter((i) => i === n).length;
  return countarr;
}