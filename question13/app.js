let temperature=20;
let weather;
let israining=true;

// Decide weather condition based on temperature
if(temperature>40){
weather="extremelyhot";
}
else if(temperature>=30){
  weather="hot"; 
}
else if(temperature>=20){
  weather="warm"; 
}
else if(temperature>=10){
 weather="cool"; 
}
else if(temperature<10){
   weather="cold";
}
// If it is raining, append "and raining"
if(israining){
    weather+=" and raining";
}

// Print the final weather and temperature
console.log(`weather:${weather}`);
console.log(`temperature:${temperature}`);

