const index = require('./index');

test('display Hello', () => {
  expect(index.sayHello()).toBe("Hello");
});
