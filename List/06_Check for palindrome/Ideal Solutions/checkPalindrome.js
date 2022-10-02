function checkPalindrome(a){
		let left = 0;
		let right = a.length-1;
		while(left <= right){
			if (a[left] != a[right]) return false;
			left++;
			right--;
		}
		return true;
}

console.log(checkPalindrome("malayalam") ? "Yes" : "No");