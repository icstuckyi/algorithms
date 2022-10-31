function solution(my_string) {
    const arr = my_string.split('');
    for(let i = 0; i<arr.length; i++){
        if (arr[i] > "Z") {
        arr[i] = arr[i].toUpperCase();
    } else {arr[i] = arr[i].toLowerCase();}
    }
    return arr.join('');
}