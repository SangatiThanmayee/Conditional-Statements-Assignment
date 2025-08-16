let loanamount = 3000000;
let creditscore = 700;
let interestrate = 0;
let isdecember = false;
let isgovemp = true;
let income = 60000;

if (loanamount > 1000000 && creditscore > 800) {
    interestrate = 7;
    if (isgovemp) {
        interestrate -= 5;
    }
}
else if (creditscore >= 600 && creditscore <= 800 && income > 50000) {
    interestrate = 9;
    if (isgovemp) {
        interestrate -= 5;
    }
}
else
    if (isdecember) {
        interestrate = 9;
    }
    else {
        interestrate = 10;
    }
console.log(`applicable interest rate:${interestrate}%`);