function solution(price) {
    switch(true){
        case (price >= 500000): return Math.floor(price*0.8);
        case (price >= 300000): return Math.floor(price*0.9);
        case (price >= 100000): return Math.floor(price*0.95);
        default: return price;
    }
}