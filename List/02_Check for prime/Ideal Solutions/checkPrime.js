function checkPrime(n){
    for (let i=2;i<=Math.sqrt(n);i++){
        if (n % i == 0) return false;
    }
    return true;
}
	
console.log(checkPrime(11) ? "Yes" : "No");

