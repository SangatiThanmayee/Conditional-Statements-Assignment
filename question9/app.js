let booktype = "magazine";
let fineperday=0;
let overduedays=6;
let isstudent=false;
// to determine fine per day based on book type//
switch(booktype){
    case "fiction":
        fineperday=10;
        break;
          case "non-fiction":
        fineperday=12;
        break;
          case "reference":
        fineperday=15;
        break;
          case "magazine":
        fineperday=18;
        break;
        default:
            console.log("invalid book type");
}
// Calculate total fine = fine per day × overdue days//
let totalfine= fineperday*overduedays;
// Apply student discount //
if(isstudent){
    totalfine=totalfine*0.5;
}
//Display results//
console.log(`booktype:${booktype}`);
console.log(`finalfine:${totalfine}`);