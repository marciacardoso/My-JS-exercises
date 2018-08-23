const userAndPassword=  'pepito2017,12345';
const username= userAndPassword.substr(0,10);
console.log(username);

const password= userAndPassword.substr(11,5);
console.log(password); 

console.log('The user ' + username + ' has ' + password + ' as password');