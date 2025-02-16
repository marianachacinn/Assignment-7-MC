Task 1: Function Declaration
Scenario: Customer Invoice Calculation

Requirements:

Write a function calculateInvoice(subtotal, taxRate, discount) that calculates the final invoice amount.
Formula:
Total = (Subtotal + (Subtotal * Tax Rate)) - Discount
Test Data:

calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"
Submission:

Commit message: "Task 1 - Customer Invoice Calculation."
Task 2: Function Expression
Scenario: Employee Hourly Wage Calculation

Requirements:

Declare a function expression calculateHourlyWage(salary, hoursPerWeek) that calculates hourly wage.
Formula:
Hourly Wage = Salary / (Hours per Week * 52)
Test Data:

calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"
Submission:

Commit message: "Task 2 - Employee Hourly Wage Calculation."
Task 3: Arrow Function
Scenario: Customer Loyalty Discount

Requirements:

Write an arrow function calculateLoyaltyDiscount(amount, years) that applies a discount:
years >= 5: 15% discount
years >= 3: 10% discount
years < 3: 5% discount
Test Data:

calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"
Submission:

Commit message: "Task 3 - Customer Loyalty Discount."
Task 4: Parameters and Arguments
Scenario: Product Shipping Cost Calculation

Requirements:

Write a function calculateShippingCost(weight, location, expedited = false) to calculate shipping fees:
USA: $5 + $0.5 per lb
Canada: $10 + $0.7 per lb
Expedited shipping: additional $10 fee
Test Data:

calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"
Submission:

Commit message: "Task 4 - Product Shipping Cost Calculation."
Task 5: Returning Values
Scenario: Business Loan Interest Calculation

Requirements:

Write a function calculateLoanInterest(principal, rate, years) that returns total interest.
Formula:
Interest = Principal * Rate * Years
Test Data:

calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"
Submission:

Commit message: "Task 5 - Business Loan Interest Calculation."
Task 6: Higher-Order Functions
Scenario: Filtering High-Value Transactions

Requirements:

Declare an array transactions with at least five amounts.
Write a higher-order function filterHighValueTransactions(transactions, filterFunction) that filters transactions above $1000.
Test Data:

let transactions = [500, 1200, 3000, 800, 2200];
filterHighValueTransactions(transactions, amount => amount > 1000);
// Expected output: [1200, 3000, 2200]
Submission:

Commit message: "Task 6 - Filtering High-Value Transactions."
Task 7: Closures
Scenario: Budget Tracker

Requirements:

Write a function createBudgetTracker() that returns another function to add expenses and keep a running balance.
Test Data:

let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"
Submission:

Commit message: "Task 7 - Budget Tracker."
Task 8: Recursion in JavaScript
Scenario: Business Growth Projection

Requirements:

Write a recursive function calculateGrowth(years, revenue) that projects revenue growth.
Each year increases revenue by 5% until reaching year 10.
Test Data:

calculateGrowth(8, 1000); // Expected output: "Projected Revenue: $1102.50"
calculateGrowth(5, 5000); // Expected output: "Projected Revenue: $6381.41"
Submission:

Commit message: "Task 8 - Business Growth Projection."