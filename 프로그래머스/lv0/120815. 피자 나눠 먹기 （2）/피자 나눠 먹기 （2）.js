function solution(n) {
    let pza = 6;
    let lcm = 1;
    // 만약 피자 조각수보다 사람이 적을 경우
    // 사람수가 6의 약수면 1 출력, 아니면 최소공배수 출력
    if (n <= pza && 6 % n === 0) return 1;
    else {
        while(true){
      if((lcm % n == 0) && (lcm % pza == 0)){
        break;
      }
      lcm++;
    }
        return lcm/pza;
    }
    }
