## 숫자

### 소숫점 자릿수 컷

```js
// toFixed는 문자열로 반환
Infinity - Infinity(123.45).toFixed(); // "123"
(123.45).toFixed(1); // "123.4"
```

### 약수의 갯수 구하기

```js
const getDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push(i);
      if (num / i != i) divisors.push(num / i);
    }
  }

  // 오름차순 정렬하려면 divisors.sort((a, b) => a - b);
  return divisors;
};
```

### 소수 판별하기

```js
function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // 한 번이라도 나누어졌으니 소수가 아니므로 return false
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
}
```

### 최대공약수, 최소공배수

```js
// 최대공약수
let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

// 최소공배수
let getLCM = (num1, num2) => {
  let lcm = 1;

  while (true) {
    if (lcm % num1 == 0 && lcm % num2 == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};
```

## 문자열

### 특정 문자 제거하기

```js
function solution(my_string, letter) {
  const regex = new RegExp(`[${letter}]`, `g`);
  return my_string.replace(regex, "");
}
```

### 모음 제거하기

```js
function solution(my_string) {
  return my_string.replace(/(a|e|i|o|u)/gi, "");
}
```

---

## 배열

### 정렬 (오름차순)

```js
// sort함수는 unicode 기준으로 문자를 정렬함
// 숫자:
const arr = sides.sort((a, b) => b - a);
```

### 배열 원소 채우기

```js
Array(10).fill(0);
[...Array(10)].map((_, i) => i + 1);
Array.from(new Array(n), (x, i) => i + 1);
new Array(n).fill().map((v, i) => i + 1);
Array.from("ab".repeat(10));
```

### 배열 원소 총합

```js
const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((a, c) => (a += c));
```

### 평평하게 만들기

```js
[1, [2, [3, [4]]]].flat(); // -> [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(1); // -> [1, 2, [3, [4]]] 위와 동일
[1, [2, [3, [4]]]].flat(2); // -> [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity); // -> 모두 flat
```

---

## 응용

### 대문자, 소문자 바꾸기

```js
function solution(my_string) {
  const arr = my_string.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > "Z") {
      arr[i] = arr[i].toUpperCase();
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join("");
}
```

### number 자릿수별로 쪼개서 총합 구하기

```js
[n + ""][0].split("");
function solution(n) {
  const a = [n + ""][0].split("");
  return a.reduce((a, b) => +a + +b, 0);
}

let x10 = "12345";
let result10 = 0;
for (let i = 0; i < x10.length; i++) {
  result10 += parseInt(x10[i]);
}
```

### left ~ right 사이의 모든 수 중 약수의 갯수가 짝수인 것은 더하고, 홀수인 것은 뺀 수를 return

```js
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    count % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
```
