function solution(s){
    let p = 0;
    let y = 0;
    const sarr = s.split('');
    
    for (let i = 0; i < sarr.length; i++) {
        if (sarr[i] === "p" || sarr[i] === "P") {
            p++;
        } else if (sarr[i] === "y" || sarr[i] === "Y") {
            y++;
        }
    }
    
    return (p === y ? true : false)
}