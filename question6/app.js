let size = "small";
let addons = "whipped cream";
let price=0;

switch (size) {
    case "small":
        price = 100;
        switch (addons) {
            case "extra shots":
                price += 20
                break;
            case "flavored syrup":
                price += 25
                break;
            case "whipped cream":
                price += 30
                break;
            case "none":
                break;
            default:
                console.log("invalid" );
        }
        break;
    case "medium":
        price = 150;
        switch (addons) {
            case "extra shots":
                price += 20
                break;
            case "flavored syrup":
                price += 25
                break;
            case "whipped cream":
                price += 30
                break;
            case "none":
                break;
            default:
                console.log( "invalid" );
        }
        break;
    case "large":
        price = 200;
        switch (addons) {
            case "extra shots":
                price += 20
                break;
            case "flavored syrup":
                price += 25
                break;
            case "whipped cream":
                price += 30
                break;
            case "none":
                break;
            default:
                console.log("invalid" );
        }
        break;
    case "extra-large":
        price = 250;
        switch (addons) {
            case "extra shots":
                price += 20
                break;
            case "flavored syrup":
                price += 25
                break;
            case "whipped cream":
                price += 30
                break;
            case "none":
                break;
            default:
                console.log("invalid" );
        }
        break;
        default: 
         console.log("error" );    
} 
console.log(`price:${price}`);


