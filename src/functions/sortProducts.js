function sortProducts(products, key) {
  if (!Array.isArray(products)) {
    throw new Error('Invalid input');
  }

  if (key !== 'name' && key !== 'price') {
    throw new Error('Invalid input');
  }


  products.forEach(product => {
    if (typeof product !== 'object' || product === null) {
      throw new Error('Invalid input');
    }

    if (key === 'price' && typeof product.price !== 'number') {
      throw new Error('Invalid input');
    }

    if (key === 'name' && typeof product.name !== 'string') {
      throw new Error('Invalid input');
    }
  });

  return products.sort((a, b) => {
    if (key === 'price') {
      return a.price - b.price;
    }
    return a.name.localeCompare(b.name);
  });
}

module.exports = sortProducts;
