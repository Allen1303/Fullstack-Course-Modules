const { isValidEmail } = require('./email-validation.js');

test('should return true if email is valid', () => {
  const result = isValidEmail("cic@mapiebo.nl");
  expect(result).toBe(true);
});
test('should return false if email is missing @', () => {
  const result = isValidEmail("puorzazunek.fi");
  expect(result).toBe(false);
});


test("should return false if email is missing a '.'",  () => {
  const result = isValidEmail('punzumta@owtolobva');
  expect(result).toBe(false);
});