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