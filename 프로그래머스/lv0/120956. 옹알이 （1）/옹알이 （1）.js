function solution(babbling) {
    let result = 0;
     babbling.forEach((v) => {
        if(v.replace(/(aya|ye|woo|ma)/gi, "").length === 0) {
          result++;
      }
    })
    
    return result;
}