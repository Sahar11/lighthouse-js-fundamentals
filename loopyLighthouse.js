

for (let number = 100; number <= 200; number++ ){
  
  let result='';
  //console.log(number);
  if(number % 3 === 0 ){
    
    result +='Loppy';

  }else if (number % 4 === 0 ){
    result += 'Lighthouse' ;
  
  }else if(number % 3 === 0 && number % 4 === 0){
    result += 'LoopyLighthouse';
    
  }
  console.log(result || number);
}

// for (let i = 100; i <= 200; i++) {
//     let output = '';
  
//     if (i % 3 === 0) {
//       output += 'Loopy'
//     } 
//     if (i % 4 === 0) {
//       output += 'Lighthouse';
//     }
  
//     console.log(output || i);
//   }