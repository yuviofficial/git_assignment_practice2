let str = "naman";
var str2="";
for(var i=str.length-1;i>=0;i--){

    str2+=str[i];
}
if(str==str2){
    console.log("it is  palindrome");
}else{
    console.log("it is not palindrome");
}