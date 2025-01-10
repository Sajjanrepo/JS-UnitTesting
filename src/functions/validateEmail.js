function validateEmail(email) {
  if (typeof email !== 'string') {
    throw new Error('Invalid input');
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

module.exports = { validateEmail };