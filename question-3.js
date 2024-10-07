// Question #3
let userPassword = "TechUp";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword){
    let result = "";
    if(userPassword.length <6){
        result = "Weak";
    }else if(userPassword.length>=6 && userPassword.length<=10){
        result = "Medium";
    }else if(userPassword.length>10){
        result = "Strong";
    }
    return result;
}
userPassword = "ssswnalWadqQ";
console.log(checkPasswordStrength(userPassword));
userPassword = "TechUp";
console.log(checkPasswordStrength(userPassword));
userPassword = "abcde";
console.log(checkPasswordStrength(userPassword));