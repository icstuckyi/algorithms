// 이중for문으로 풀려다가 실패
// https://github.com/codeisneverodd/programmers-coding-test/blob/main/level-1/%EC%88%AB%EC%9E%90-%EC%A7%9D%EA%BF%8D&131128&.js

function solution(X, Y) {
  const bignum = [];
  const obj = {};

  for (const el of X) {
    obj[el] = (obj[el] || 0) + 1;
  }

  for (const el of Y) {
    if (obj[el]) {
      bignum.push(el);
      obj[el]--;
    }
  }

  bignum.sort((a, b) => b - a);

  if (!bignum.length) return "-1";
  else if (bignum[0] === "0") return "0";
  return bignum.join("");
}