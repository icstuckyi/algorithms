function solution(num, k) {
    let num2str = num.toString().split('');
    let str2num = num2str.map((v) => parseInt(v));
    return str2num.includes(k) ? str2num.indexOf(k) + 1 : -1;
}