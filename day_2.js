function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    console.log(Math.round((meal_cost + ((meal_cost/100) * tip_percent) + ((meal_cost/100) * tax_percent))));
}

function main() {
    const meal_cost = parseFloat(readLine().trim());

    const tip_percent = parseInt(readLine().trim(), 10);

    const tax_percent = parseInt(readLine().trim(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
