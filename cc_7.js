console.log ('Task 1: Customer Invoice Calculation') //task 1
function calculateInvoice(subtotal, taxRate, discount) { //formula for invoice
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`); //round number to 2 decimal places
}
calculateInvoice(100, 0.08, 5); //expected: $103.00
calculateInvoice(500, 0.1, 20); //expected: $530.00

console.log ('Task 2: Function Expression') //task 2
const calculateHourlyWage = function(salary, hoursPerWeek) { // formula for wage 
    let hourlyWage = salary / (hoursPerWeek * 52); // salary divided by hours per week
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
};
calculateHourlyWage(52000, 40); //expected: $25.00
calculateHourlyWage(75000, 35); //expected: $41.21

console.log ('Task 3: Arrow Function') //task 3
const calculateLoyaltyDiscount = (amount, years) => { //function for discount
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05; //more than 5 years: 15%, more than 3: 10%, less than 3: 5%
    let discountedPrice = amount * (1 - discountRate); //subsracts discount from the amount
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`);
};
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"

console.log ('Task 4: Parameters and Arguments') //task 4
function calculateShippingCost(weight, location, expedited = false) { //calculate shipping cost depending on the country
    let cost;
    if (location === "USA") { //$5 for usa
        cost = 5 + 0.5 * weight;
    } else if (location === "Canada") { //$10 for canada
        cost = 10 + 0.7 * weight;
    } else {
        console.log("Location not supported.");
        return;
    }
    if (expedited) cost += 10; //additional $10 fee
    console.log(`Shipping Cost: $${cost.toFixed(2)}`);
}
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"

console.log ('Task 5: Returning Values') //task 5
function calculateLoanInterest(principal, rate, years) { //total interest formula
    let interest = principal * rate * years;
    console.log(`Total Interest: $${interest.toFixed(2)}`);
    return interest;
}
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"

console.log ('Task 6: Higher-Order Functions') //task 6
let transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // Expected: [1200, 3000, 2200]

console.log ('Task 7: Closures') //task 7
function createBudgetTracker() { //returns another function to add expenses & keep running balance
    let balance = 0;
    return function(expense) { 
        balance -= expense;
        console.log(`Current Balance: $${balance}`);
    };
}
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"