//문제 링크
//school.programmers.co.kr/learn/courses/30/lessons/120812

// 석우님 풀이
https: function solution(array) {
  let answer = 0;
  let 값 = new Set(array);
  let 종합 = {};
  for (const number of 값) {
    종합[number] = array.filter((element) => element === number).length;
  }
  let 개수 = Object.values(종합);
  answer = +Object.keys(종합).find((key) => 종합[key] === Math.max(...개수));
  개수.indexOf(Math.max(...개수)) !== 개수.lastIndexOf(Math.max(...개수))
    ? (answer = -1)
    : 0;

  return answer;
}
// for (const number of 값) {
//     let 개수 = array.filter(element => element === number).length
//     개수 > answer ? answer = number : 0
// }

//도영님 풀이
function solution(array) {
  let temp = {};
  let cnt = 0;

  for (i in array) {
    temp[array[i]] = array.filter((v) => v === array[i]).length;
  }
  let maxCnt = Math.max(...Object.values(temp));
  for (i of Object.values(temp)) {
    if (maxCnt === i) {
      cnt++;
    }
  }
  if (cnt > 1) {
    return -1;
  } else {
    return +Object.keys(temp)[Object.values(temp).indexOf(maxCnt)];
  }
}

//성진님 풀이 1
function solution(array) {
  var answer = [];

  let arr = new Set(array);
  arr = [...arr];
  // console.log(arr)
  for (let value of arr) {
    let num = 0;
    for (let i = 0; i < array.length; i++) {
      if (value === array[i]) num += 1;
    }
    answer.push(num);
  }
  //  console.log(answer)

  let result = Math.max(...answer);
  // 만약 answer 배열에서 result값이 두개 이상이면 -1을 리턴
  // 아니라면 result값을 arr에서 찾아서 그 값을 리턴
  if (answer.filter((e) => e === result).length >= 2) return -1;
  else return arr[answer.indexOf(result)];
}

//성진님 풀이 2
function solution(array) {
  let arr = new Map();

  for (let i of array) {
    arr.set(i, (arr.get(i) || 0) + 1);
  }

  let result = [...arr].sort((a, b) => b[0] - a[0]); // 원소 먼저 정렬
  result.sort((a, b) => b[1] - a[1]); // 최빈값 정렬

  if (result.length === 1) return result[0][0];
  else if (result[0][1] === result[1][1]) return -1;
  else return result[0][0];
}

//성진님 풀이 3
function solution(array) {
  let copy = [...array]; // 삭제될 배열을 만들어줌

  let result = {};

  for (let i of array) {
    result[i] = 0;
  }
  // console.log(result)
  // 위 코드는 각 요소의 초깃값을 설정

  for (let i of array) {
    if (copy.includes(i)) {
      copy.splice(copy.indexOf(i), 1);
      result[i]++;
    }
  }

  result = Object.entries(result);
  result.sort((a, b) => b[1] - a[1]);
  return result.length === 1 || result[0][1] > result[1][1]
    ? parseInt(result[0][0])
    : -1;
}
