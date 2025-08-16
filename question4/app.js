let destination = "otherstate";
let issamestate=false;
let deliveryspeed = "priority";
let deliverycharge = 0;
let ordervalue = 2500;
let ispremiumMember = false;
let isweekend = false;

if (destination === "samecity") {
    if (deliveryspeed === "priority") {
        if (ordervalue > 2000) {
            deliverycharge = "freedelivery";
        }
        else {
            deliverycharge = 50;
        }
    } 
    else {
        deliverycharge = 50;}
}
else if (destination === "outsidethecity" && issamestate && ordervalue < 5000) {
    deliverycharge = 100;
}
else if (destination === "outsidethecity" && issamestate && ordervalue > 5000) {
    deliverycharge = 0;
}
else if (destination === "otherstate" && ispremiumMember && isweekend) {
    deliverycharge = 100;
} else {
    deliverycharge = 200;
}
console.log(`delivery=${deliverycharge}`);