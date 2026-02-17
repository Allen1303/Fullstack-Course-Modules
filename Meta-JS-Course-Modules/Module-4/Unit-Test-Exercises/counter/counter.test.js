const {createCounter  } = require('./counter.js');

test('Increment and decrement a count', () => {
  const result = createCounter();
  expect(result.increaseCounter()).toBe(1);
  expect(result.increaseCounter()).toBe(2);
  expect(result.decreaseCounter()).toBe(1);
});