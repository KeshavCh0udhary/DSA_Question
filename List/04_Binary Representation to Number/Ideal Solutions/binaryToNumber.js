function stringToArray(a){
    let arr = new Array(a.length);
    for (let i=0;i<a.length;i++){
        arr[i] = +a[i];
    }
    return arr;
}

function binaryToNumber(arr){
    let value = 0;
    let j = 0;
    for (let i=arr.length-1;i>=0;i--){
        if (arr[i] == 1){
            value += Math.pow(2,j);
        }
        j++;
    }
    return value;
}


let a = "00000000000000000000000000000111";
let arr = a.split("").map(Number);
let value = binaryToNumber(arr);
console.log(value);
