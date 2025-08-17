let hour=4;
let category=0;
let age=13;

if(hour<2){
    category="elite"
}
else if(hour>=2 && hour<3){
    category="advanced"
}
else if(hour>=3 && hour<4){
    category="intermediate"
}
else if(hour>=4 && hour<5){
    category="beginner"
}
else if(hour>5){
    category="novice"
}
if(age<18){
    category+=" + youth badge"
}

console.log(`hour:${hour}`);
console.log(`age:${age}`);
console.log(`category:${category}`);