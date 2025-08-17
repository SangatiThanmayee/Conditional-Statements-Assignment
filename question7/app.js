let plan="combopack";
let validitydays=0;
let isspecialweek=false;
//assigning validity based on plan type//
switch(plan){
    case "talktime":
    validitydays= 20;
    break;
    case "datapack":
    validitydays= 10;
    break;
    case "combopack":
    validitydays= 25;
    break;
    case "unlimitedplan":
    validitydays= 30;
    break;
    default:
        console.log("invalidplan");
}
// Apply special week offer //
    if(isspecialweek){
        validitydays+=2;
    }
// finalresult//
console.log(`remainingvalidity:${validitydays}days`);
console.log(`plan:${plan}`);