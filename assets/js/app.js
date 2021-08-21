// Declaring prices
const bestPrice = 1299;
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const promoPrice = document.getElementById('promo-price');

// Function for extra specification
function getExtraSpec(quantity) {
    // Increasing the price for each specification when they will be clicked
    switch (quantity) {
        case '16gb-memory':
            memoryCost.innerHTML = 180;
            break;
        case '8gb-memory':
            memoryCost.innerHTML = 0;
            break;
        case '256gb-storage':
            storageCost.innerHTML = 0;
            break;
        case '512gb-storage':
            storageCost.innerHTML = 100;
            break;
        case '1tb-storage':
            storageCost.innerHTML = 180;
            break;
        case 'normal-delivery':
            deliveryCost.innerHTML = 0;
            break;
        case 'onetime-delivery':
            deliveryCost.innerHTML = 20;
            break;
    }
    // Calling a function to update total price
    getTotalPrice()
}

// Function for updating total price
function getTotalPrice() {
    // Declaring each specification cost
    const memoryCostPrice = parseInt(memoryCost.innerHTML);
    const storageCostPrice = parseInt(storageCost.innerHTML);
    const deliveryCostPrice = parseInt(deliveryCost.innerHTML);

    // Adding all the price of specification
    const totalPrice = bestPrice + memoryCostPrice + storageCostPrice + deliveryCostPrice;

    // Assigning the total price
    document.getElementById('total-price').innerHTML = totalPrice;
    promoPrice.innerHTML = totalPrice;
}

// Function for promo code
function promoCode() {
    // Calling the promo code input
    const promoCode = document.getElementById('promo-code');

    // Checking the promo code is correct or not
    if (promoCode.value == 'stevekaku') {
        // Clearing the promo code input
        promoCode.value = '';

        // Counting the discounted price
        const promoPriceValue = parseInt(promoPrice.innerHTML) - (parseInt(promoPrice.innerHTML) * 0.2);

        // Assigning the discounted price
        promoPrice.innerHTML = promoPriceValue;
        document.getElementById('promo-warning').innerHTML = '';
    }
    else {
        // Throwing an error massage
        document.getElementById('promo-warning').innerHTML = 'Your "PROMO CODE" is not correct!!!'
    }
}