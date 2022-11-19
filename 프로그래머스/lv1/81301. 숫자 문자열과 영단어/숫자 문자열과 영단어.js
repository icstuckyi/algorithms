function solution(s) {
    let strarr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    for (let i = 0; i < strarr.length; i++) {
        str = strarr[i]
        s = s.replaceAll(str,i)
    }
    return +s;
        };
    