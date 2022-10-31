function solution(num_list) {
    let arr = [0, 0];
    for (let i= 0; i<num_list.length; i++){
       if (num_list[i]%2 === 0){
        arr[0]++;
    } else {
        arr[1]++;
    }
    }
    return arr;
}