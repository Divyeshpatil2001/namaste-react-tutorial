import { sum } from "../Sum";

test('sum function should calculate the sum of two numbers', () => {
  const result = sum(3, 4);
  //assertion
  expect(result).toBe(7);
})

// description of test 
// callback function which will have to implement the test case (write code to test)