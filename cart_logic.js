// var availableBananas = 20;
// var availableApples = 20;
// var availableOranges = 3;

// var selectedBananas = 1;
// var selectedApples = 1;
// var selectedOranges = 1;

// var subtotalBananas = calculateProdTotal(BANANA_PRICE, selectedBananas);
// var subtotalApples = calculateProdTotal(APPLE_PRICE, selectedApples);
// var subtotalOranges = calculateProdTotal(ORANGE_PRICE, selectedOranges);

// var subtotal = 0;
// var shipping = 0;
// var taxes = 0;
// var total = 0;

/* 1. Complete the function below to calculate product line 
      Input: price of the product (double)
      Input: quantity selected (integer)
      Output: product line totals (double)
*/

function calculateProdTotal(price, quantity) {
    return price * quantity;

}

function calculateSubtotal(prodTotals) {

    return prodTotals[0] + prodTotals[1] + prodTotals[2]; // replace this!
}

function calculateTaxes(grossTotal, taxRate) {
    taxes = subtotal * TAX_RATE;
    return (taxes); // replace this!
}

function calculateTotal(grossTotal, addedShipping, addedTax) {
    total = subtotal + taxes + addedShipping;
    return (total); // replace this!
}

function updateProdAvailability(product, selected, availability) {

    let productAvailability = ""
    if (selected - availability > 5) {
        Label = product + " IN STOCK";
        productAvailability = "AVAILABLE";
    } else if (availability - selected < 5 && availability - selected > 0) {
        Label = product + " LIMITED STOCK";
        productAvailability = "LIMITED_SUPPLY";
    } else {
        Label = product + " NONE FOR GRETCHEN WIENER";
        productAvailability = "OUT_OF_STOCK";
    }
    updateProdAvailabilityLabel(product, Label, productAvailability)
    return;
}