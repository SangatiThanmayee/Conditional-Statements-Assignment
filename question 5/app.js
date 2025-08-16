let membershiptype="sliver";
let cashback=0;
let paymentmode="UPI";
let attends=21;
let monthlyfee=4000;

if(membershiptype==="gold"){
if(attends>20){
    if(paymentmode= "UPI"){
 cashback=500;
}
    }
}
else if(membershiptype==="sliver"){
    if(attends>15){
if(paymentmode="UPI"){
    cashback=300;
}
    }
}
else if(membershiptype==="bronze"){
    if(attends>10){
        if(paymentmode="debitcard"){
            cashback=100;
        }
    }
}
finalpayment= monthlyfee-cashback;
console.log(`finalpayableamount:${finalpayment}`)