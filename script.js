// complete the given function

function palindrome(str){
let i = 0, j = str.length()-1;
	while(i < j){
   if(s[i]!=s[j]){
	  return false;
	   
   }
if(s[i]==s[j]){
	i++;
	j--;
}
		
}
	return true;
}
module.exports = palindrome
