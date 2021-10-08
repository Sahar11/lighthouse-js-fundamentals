const whichSchool  = function (age) {
  var school;
 if(age>=19 ){
  school="Lighthouse Labs";
   return school;
   
 }else if (age<=12){
   school= "Elementary School";
   return school;

 }else if (age>=13){
   school= "Secondary School";
   return school;
   
 }
}

whichSchool(25);