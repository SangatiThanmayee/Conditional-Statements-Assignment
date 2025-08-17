let experience=1;
let isdecember=true;
let bonus=0;

if(experience>15){
    bonus=50000;
    }
    else if(experience>=10){
 bonus=30000;
    }
    else if(experience>=5){
        bonus=20000;
    }
    else if(experience>=2){
         bonus=10000;
    }
    else if(experience<2){
         bonus=5000;
    }
    if(isdecember){
        bonus+=2000;
    }
console.log(`experience:${experience}`);
console.log(`totalbonus:${bonus}`);