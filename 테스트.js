// https://paullabworkspace.notion.site/38-c81a263ad7844a2c82f2c8a6fcc2140d

//선아님 풀이
function candy(score) {
  score = score
    .split(" ")
    .sort((a, b) => b - a)
    .map(Number);
  let answer = 0;

  let set = Array.from(new Set(score));

  for (let i = 0; i < score.length; i++) {
    if (score[i] === set[0] || score[i] === set[1] || score[i] === set[2]) {
      answer++;
    }
  }
  return answer;
}

//채령님 풀이
const scores = "97 86 75 66 55 97 85 97 97 95".split(" ");
scores.sort((a, b) => b - a);
let top = scores.filter((e, i) => scores.indexOf(e) === i).slice(0, 3);
let count = 0;

for (let i = 0; i < scores.length; i++) {
  let n = scores[i];
  if (top.includes(n)) count++;
}

console.log(top); // ["97", "95", "86"]
console.log(count); // 6
