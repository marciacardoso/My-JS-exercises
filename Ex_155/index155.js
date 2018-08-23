
const games= [
 game1={
    name:'Crash Bandicoot N. Sane Trilogy',
    price: 1060,
    sold: 20,
    console: 'PS4'
},
game2={
    name:'Lego Marvel Super Heroes',
    price: 700,
    sold: 25,
    console: 'XBOX'
},
game3={
    name:' Gta V',
    price: 1449,
    sold: 30,
    console: 'PS4'
},
game4={
    name:'Mortal Kombat Xl',
    price: 1190,
    sold: 34,
    console:'PS4'
},
game5={
    name:'Gta V',
    price: 1250,
    sold: 60,
    console:'XBOX'
},
game6={
    name:'Fifa 2017',
    price: 890,
    sold: 15,
    console:'PS4'
},
game7={
    name:'Uncharted 4',
    price: 950,
    sold: 30,
    console:'PS4'
},
game8={
    name:'Mortal Kombat Xl',
    price: 940,
    sold: 30,
    console:'XBOX'
},
game9={
    name:'Need For Speed',
    price: 790,
    sold: 10,
    console:'PS4'
},
game10={
    name:'Lego Batman',
    price: 1000,
    sold: 18,
    console:'PS4'
},
game11={
    name:'Fifa 17',
    price: 1290,
    sold: 12,
    console:'PS4'
},
game12={
    name:' Resident Evil 7',
    price: 1390,
    sold: 10,
    console:'PS4'
},
game13={
    name:'Dragon Ball XX',
    price: 1390,
    sold: 25,
    console:'XBOX'
}



];
  
games.forEach(function(game) {
    console.log(game.name);
    console.log(game.price) ;
    console.log(game.sold);
    console.log(game.console)
    });