const expected = true
const notActual = false
const actual = true

test('true is true', () => {
  expect(actual).toBe === expected
})

test('true is not false', () => {
  expect(notActual).not.toBe(expected)
})
