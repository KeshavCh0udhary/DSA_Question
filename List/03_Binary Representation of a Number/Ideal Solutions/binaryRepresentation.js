function binaryRepresentation(n){
    let arr = new Array(32).fill(0);
    let len = arr.length-1;
    while(n > 0){
        let temp = n % 2;
        arr[len] = temp;
          len--;
        n = Math.floor(n/2);
    }
  
    return arr;

}

let n = 7;
let ans = binaryRepresentation(n);
console.log(ans.join(""));