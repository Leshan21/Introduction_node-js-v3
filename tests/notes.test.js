const add = (num1, num2) => num1 + num2;

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});



// leshan@Leshan-mint:~/Desktop/Database/Projects/Introduction_node-js-v3$ npm test

// > introduction_node-js-v3@1.0.0 test
// > jest

//  PASS  tests/notes.test.js
//   ✓ adds 1 + 2 to equal 3 (1ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.466s
// Ran all test suites.