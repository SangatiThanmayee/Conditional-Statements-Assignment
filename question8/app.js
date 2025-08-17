let category="lunch";
let item="vegmeals";
let price=0;
let quantity=3;

switch (category) {
    case "breakfast":
        switch (item) {
            case "idli":
                price = 30;
                break;
            case "dosa":
                price = 40;
                break;
            case "paratha":
                price = 50;
                break;
    default:
        console.log("item is not available");
        }
break;
case"lunch":
        switch (item) {
            case "vegmeals":
                price = 80;
                break;
            case "vegbiryani":
                price = 100;
                break;
            case "chickenbiryani":
                price = 150;
                break;
    default:
        console.log("item is not available");
        }
break;
case"dinner":
        switch (item) {
            case "vegmeals":
                price = 80;
                break;
            case "chapathi":
                price = 40;
                break;
            case "vegcurry":
                price = 50;
                break;
    default:
        console.log("item is not available");
        }
break;

default:
    console.log("category is not available");
}

let total=price * quantity;
console.log(`total:${total}`);