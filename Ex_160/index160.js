const propertiesNames= [
    property1={
       name:'Crash Bandicoot N. Sane Trilogy',
       price: 1060,
       sold: 20,
       console: 'PS4'
   },
   property2={
       name:'Lego Marvel Super Heroes',
       price: 700,
       sold: 25,
       console: 'XBOX'
   },
   property3={
       name:' Gta V',
       price: 1449,
       sold: 30,
       console: 'PS4'
   },
   property4={
       name:'Mortal Kombat Xl',
       price: 1190,
       sold: 34,
       console:'PS4'
   },
   property5={
       name:'Gta V',
       price: 1250,
       sold: 60,
       console:'XBOX'
   },
   property6={
       name:'Fifa 2017',
       price: 890,
       sold: 15,
       console:'PS4'
   },
   property7={
       name:'Uncharted 4',
       price: 950,
       sold: 30,
       console:'PS4'
   },
   property8={
       name:'Mortal Kombat Xl',
       price: 940,
       sold: 30,
       console:'XBOX'
   },
   property9={
       name:'Need For Speed',
       price: 790,
       sold: 10,
       console:'PS4'
   },
   property10={
       name:'Lego Batman',
       price: 1000,
       sold: 18,
       console:'PS4'
   },
   property11={
       name:'Fifa 17',
       price: 1290,
       sold: 12,
       console:'PS4'
   },
   property12={
       name:' Resident Evil 7',
       price: 1390,
       sold: 10,
       console:'PS4'
   },
   property13={
       name:'Dragon Ball XX',
       price: 1390,
       sold: 25,
       console:'XBOX'
   }
   
   
   
   ];

   propertiesNames.forEach(function(property){
       console.log(property['name']);
       console.log(property['price']);
       console.log(property['sold']);
       console.log(property['console']);
   }); 