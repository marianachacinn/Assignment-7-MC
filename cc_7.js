console.log ('Task 1: Customer Invoice Calculation') //task 1
function calculateInvoice(subtotal, taxRate, discount) { //formula for invoice
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`); //round number to 2 decimal places
}
calculateInvoice(100, 0.08, 5); //expected: $103.00
calculateInvoice(500, 0.1, 20); //expected: $530.00