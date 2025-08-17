let percentage = 23;
let isfinalyear = false;
let grade = 0;

if (percentage >= 90) {
    grade = "A";
}
else if (percentage >= 80) {
    grade = "B";
}
else if (percentage >= 70) {
    grade = "C";
}
else if (percentage >= 60) {
    grade = "D";
}
else if (percentage >= 50) {
    grade = "E";
}
else
    if (percentage > 45) {
        if (isfinalyear) {
            grade = "eligible for re-evaluation";
        }
        else {
            grade = "fail";
        }
    }
    else {
        grade = "fail";
    }

console.log(`percentage:${percentage}`);
console.log(`grade:${grade}`);