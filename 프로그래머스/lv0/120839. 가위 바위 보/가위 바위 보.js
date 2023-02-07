function solution(rsp) {
    let answer = '';
    // let arr = rsp.split('')
    for (let item of rsp) {
    switch(item) {
        case '2':
            answer += '0'
            break;
        case '0':
            answer += '5'
            break;
        case '5':
            answer += '2'
            break;
    }
    }
    return answer;
}