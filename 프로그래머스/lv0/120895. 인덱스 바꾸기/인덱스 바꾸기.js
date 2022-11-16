function solution(my_string, num1, num2) {
    let arr = my_string.split('');
    let n1cha = arr[num1];
    let n2cha = arr[num2];
    arr[num2] = n1cha;
    arr[num1] = n2cha;
    return arr.join('');
}