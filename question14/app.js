let amount=21000;
let discount;
let iscustomerbrithday=true;


if(amount>=20000){
    discount=25;
}
else if(amount>=15000){
    discount=20;
}
else if(amount>=10000){
    discount=15;
}
else if(amount>=5000){
    discount=10;
}
else if(amount<5000){
    discount="no discount"
}
if(iscustomerbrithday ){
    discount+=5;
}

 let discountamount=(amount*discount)/100;
 let totalprice= amount - discountamount;
console.log(`purchase amount:${amount}`);
console.log(`discount:${discount}`);
console.log(`totalprice:${totalprice}`);