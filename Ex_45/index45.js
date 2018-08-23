const playerName= 'Patrik Laine is lame';
const team1= 'New Jersey Devils';
const team2= 'New York Rangers';
const team3= 'Winnipeg jets';
const team4= 'Pittsburgh Penguins';
const message='Winnipeg is the best Canadian city, Go Winnipeg';

const resultPlayer= playerName.slice(0,16);
console.log(resultPlayer);

const resultTeam3= team3.slice(9,14);
console.log(resultTeam3);

const resultMessage= message.slice(12,20);
console.log(resultMessage);

const resultMessage2= message.slice(34,38);
console.log(resultMessage2);

const firstChartJets= resultTeam3.slice(0,1);
console.log(firstChartJets);
console.log(firstChartJets.toUpperCase() + 'ets');

console.log(resultPlayer.toUpperCase() + resultMessage + resultTeam3 + ' player '+ resultMessage2 + ' '+ firstChartJets.toUpperCase() + 'ets' + '!!');





