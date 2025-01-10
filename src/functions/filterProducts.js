function filterProducts(products, query) {
    if (!Array.isArray(products) || typeof query !== 'string') {
        throw new Error('Invalid input');
    }

    if (products.length === 0) {
        return [];
    }
    if (query.trim() === '') {
        return products;
    }

    return products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
}

module.exports = filterProducts;
