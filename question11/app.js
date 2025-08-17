let percentage = 23;
let isfinalyear = false;
let grade = 0;
// Check percentage and assign grade accordingly
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
// Final year students in this range can apply for re-evaluation
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
// Print the results
console.log(`percentage:${percentage}`);
console.log(`grade:${grade}`);