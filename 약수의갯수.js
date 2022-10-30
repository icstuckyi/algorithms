const right = 10;
const left = 1;
let arr = new Array(right - left + 1).fill();

arr.map(
  (i) =>
    function () {
      for (let i = left; i < right + 1; i++) {
        return i;
      }
    }
);
