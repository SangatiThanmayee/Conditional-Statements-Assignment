
let age = 20;
let discountpercent = 0;
let issunday = true;
let isweekday = true;
let isfestivalweek = false;
let currentmonth = "december";
let hasstudentid = true;
let ticketPrice = 1000;
if (age > 60) {
    if (isweekday) {
        if (!isfestivalweek) {
            discountpercent = 0.30;
        } else {
            if (issunday) {
                discountpercent = 0.10;
            }
        }
    } else {
        if (issunday) {
            discountpercent = 0.10;
        }
    }
}
else 
    if (age < 25) {
    if (hasstudentid) {
        if (currentmonth != "december") {
            discountpercent = 0.20;
        } else {
            if (issunday) {
                discountpercent = 0.10;
            }
        }
    } else {
        if (issunday) {
            discountpercent = 0.10;
        }
    }
} else {
    if (issunday) {
        discountpercent = 0.10;
    }
}

let finalprice = ticketPrice * (1 - discountpercent);
console.log(`Final ticket price: ₹${finalprice}`);
