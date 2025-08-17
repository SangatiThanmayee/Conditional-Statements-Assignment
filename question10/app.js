
let category="balcony";
let isweekend=true;
let ticketprice=0;
// ticket price based on category 
switch(category){
    case "standard":
    ticketprice=120;
    break;
     case "premium":
    ticketprice=150;
    break;
     case "vip":
    ticketprice=220;
    break;
     case "balcony":
    ticketprice=320;
    break;
    default:
        console.log("invalid category")
}
// If it’s weekend, add 20% extra to the ticket price
if(isweekend){
    ticketprice= ticketprice+(ticketprice*0.2);
}

//final ticketprice
console.log(`category:${category}`);
console.log(`finalticketprice:${ticketprice}`);