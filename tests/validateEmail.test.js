const { validateEmail } = require('../src/functions/validateEmail');

describe('validateEmail', () => {

  // Positive test cases
  it('should return true for a valid email', () => {
    const validEmails = [
      'test@example.com',
      'user.name@domain.co',
      'first.last@sub.domain.com'
    ];
    validEmails.forEach(email => {
      expect(validateEmail(email)).toBe(true);
    });
  });

  // Negative test cases
  it('should return false for an invalid email', () => {
    const invalidEmails = [
      'plainaddress',
      '@missingusername.com',
      'missingatsign.com',
      'missingdomain@.com',
      'missingtld@domain.'
    ];
    invalidEmails.forEach(email => {
      expect(validateEmail(email)).toBe(false);
    });
  });

  // Edge cases
  it('should throw an error for non-string input', () => {
    const invalidInputs = [
      1234,
      null,
      undefined,
      {},
      [],
      true,
      false
    ];
    invalidInputs.forEach(input => {
      expect(() => validateEmail(input)).toThrowError('Invalid input');
    });
  });

});
