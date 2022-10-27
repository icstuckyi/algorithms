
function solution(array, height) {
    let a = [];
    for (let i=0; i<array.length; i++){
        if (array[i]>height) {
        a.push(array[i]);
        }
    }
    return a.length;
}
