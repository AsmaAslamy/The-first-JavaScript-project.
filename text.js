// function startApp() {
//     // Part 1: Login & Access Control
//     let username = prompt("Enter username (admin or user):");
//     let password = prompt("Enter password:");

//     if ((username === "admin" || username === "user") && password === "1234") {
//         let role = username === "admin" ? "admin" : "user";
//         let securityLevel = role === "admin" ? "high" : "low";
//         // alert(Welcome ${role}! Security Level: ${securityLevel});
//     } else {
//         alert("Invalid credentials. Access denied.");
//         return;
//     }

//     // Part 2: Coffee Shop Order
//     let name = prompt("Enter your name:");
//     let age = parseInt(prompt("Enter your age:"));
//     let coffeeType = prompt("Enter coffee type (espresso, latte, cappuccino):").toLowerCase();
//     let quantity = parseInt(prompt("Enter quantity of cups:"));

//     let pricePerCup;
//     if (coffeeType === "espresso") pricePerCup = 2.5;
//     else if (coffeeType === "latte") pricePerCup = 3.5;
//     else if (coffeeType === "cappuccino") pricePerCup = 4.0;
//     else {
//         alert("Invalid coffee type!");
//         return;
//     }

//     let originalTotal = pricePerCup * quantity;
//     let discount = 0;

//     if (age < 18 || age > 60) {
//         discount = originalTotal * 0.10;
//     }

//     let finalTotal = originalTotal - discount;

//     // Part 3: Bill Splitter with Tip
//     let people = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
//     let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, 15):"));
//     let tipAmount = finalTotal * (tipPercent / 100);
//     let totalWithTip = finalTotal + tipAmount;
//     let perPerson = totalWithTip / people;

//     // Output
// //     alert(
// // Hello ${name}!
// // You ordered ${quantity} ${coffeeType}(s).
// // Original total: $${originalTotal.toFixed(2)}
// // Discount: $${discount.toFixed(2)}
// // Tip: $${tipAmount.toFixed(2)}
// // Total with Tip: $${totalWithTip.toFixed(2)}
// // Split between ${people} people: $${perPerson.toFixed(2)} each
// // );
// }












console.log("External JavaScript file loaded successfully.");


function startApp() {
    // Part 1: Login & Access Control
    let username = prompt("Enter username (admin or user):");
    let password = prompt("Enter password:");

    if ((username === "admin" || username === "user") && password === "1234") {
        let role = (username === "admin") ? "admin" : "user";
        let securityLevel = (role === "admin") ? "high" : "low";
        alert("Welcome " + role + "! Security Level: " + securityLevel);
        console.log("User logged in as:", role, "| Security Level:", securityLevel);
    } else {
        alert("Invalid credentials. Access denied.");
        console.log("Login failed.");
        return;
    }

    // Part 2: Coffee Shop Order
    let name = prompt("Enter your name:");
    let age = parseInt(prompt("Enter your age:"));
    let coffeeType = prompt("Enter coffee type (espresso, latte, cappuccino):").toLowerCase();
    let quantity = parseInt(prompt("Enter quantity of cups:"));

    let pricePerCup = 0;
    if (coffeeType === "espresso") pricePerCup = 2.5;
    else if (coffeeType === "latte") pricePerCup = 3.5;
    else if (coffeeType === "cappuccino") pricePerCup = 4.0;
    else {
        alert("Invalid coffee type!");
        console.log("Invalid coffee type entered:", coffeeType);
        return;
    }

    let originalTotal = pricePerCup * quantity;
    let discount = 0;

    if (age < 18 || age > 70) {
        discount = originalTotal * 0.10;
    }

    let finalTotal = originalTotal - discount;

    // Part 3: Bill Splitter with Tip
    let people = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
    let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, 15):"));
    let tipAmount = finalTotal * (tipPercent / 100);
    let totalWithTip = finalTotal + tipAmount;
    let perPerson = totalWithTip / people;

    // ✅ Output
    let message =
        "Hello " + name + "!\n" +
        "You ordered " + quantity + " " + coffeeType + "(s).\n" +
        "Original total: $" + originalTotal.toFixed(2) + "\n" +
        "Discount: $" + discount.toFixed(2) + "\n" +
        "Tip: $" + tipAmount.toFixed(2) + "\n" +
        "Total with Tip: $" + totalWithTip.toFixed(2) + "\n" +
        "Split between " + people + " people: $" + perPerson.toFixed(2) + " each"
    alert(message);
    console.log(message);
}












