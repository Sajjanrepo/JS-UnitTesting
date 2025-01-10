function calculateDiscount(price, discount) {
    if (price < 0 || discount < 0 || discount > 100) {
        throw new Error('Invalid input');
    }
    return price - (price * discount / 100);
}

module.exports = calculateDiscount;
