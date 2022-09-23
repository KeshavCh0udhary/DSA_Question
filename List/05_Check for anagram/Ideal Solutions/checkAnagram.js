function checkAnagram(a,b){
    let arr1 = a.split("").sort((a,b)=>{
        return a<b ? 1 : a===b ? 0 : -1;
    }).join("");
    let arr2 = b.split("").sort((a,b)=>{
        return a<b ? 1 : a===b ? 0 : -1;
    }).join("");
    console.log(arr1,arr2);
    return arr1===arr2;
}
	
let n = 4;
let a = "abcd";
let m = 4;
let b = "adcb";

console.log(checkAnagram(a,b) ? "Yes" : "No");