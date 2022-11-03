function solution(n) {
    const a = [(n + "")][0].split('');
    return a.reduce((a,b)=>(+a)+(+b),0);
}