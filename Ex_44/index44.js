const text= 'HELLO';

const oChar= text.charAt(text.length -1);
const lChar= text.charAt(text.length -2);
const llChar= text.charAt(text.length -3);
const eChar= text.charAt(text.length - 4);
const hChar= text.charAt(text.length - 5);
const result= oChar + lChar + llChar + eChar + hChar;
console.log(result);

console.log('the final result is:', result.toLowerCase());
