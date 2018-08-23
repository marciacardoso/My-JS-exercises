const message= '3.14 it\'s a great number but 42 it\'s the answer to life.';
console.log( typeof message);

const pi= parseFloat(message);
console.log(pi);

 
const answerToLife= message.slice(29,32);
console.log(answerToLife);

const answerToLife1= parseInt(answerToLife);
console.log(answerToLife1);

const result= pi + answerToLife1;
console.log(typeof result);
const result1=result.toString();
console.log(typeof result1);
console.log(result1);

console.log(result1 +  ' is the result of adding pi and answerToLife');
