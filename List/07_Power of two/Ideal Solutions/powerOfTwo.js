function powerOfTwo(N){
    if(N == 0)
      return false;
 
        while(N != 1){
            if(N%2 != 0)
                return false;
            N /= 2;
        }
        return true;
}

console.log(powerOfTwo(16) ? "Yes" : "No");
