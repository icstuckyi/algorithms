function solution(my_string) {
    return my_string.split('').map(v => +v).sort().filter(x => !isNaN(x));
    }