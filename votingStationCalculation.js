const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


const chooseStations = function (stations) {
 
  let choose = [];
  for(const station of stations) {
         
    let capacity = station[1];
    if(capacity >= 20){

    
    let type = station[2];
    if(type === 'school' || type === 'community centre')
     
    //console.log(station[0]);
    choose.push(station[0]);    
  }
}
  return choose;
}

console.log(chooseStations(stations));


