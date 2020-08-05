import { 
  decimalToModule, 
  moduleToDecimal,
  isRelativelyPrime,
  getMultiplies
} from './calculation'

describe("Test Decimal to Module", () => {
  it("first test example", () => {
    expect(decimalToModule(21, [3, 5, 7])).toStrictEqual([0, 1, 0])
  })
  it("second test example", () => {
    expect(decimalToModule(29, [4, 5, 3])).toStrictEqual([1, 4, 2])
  })
})

describe("Test Module to Decimal", () => {
  it("first test example", () => {
    expect(moduleToDecimal([2, 1, 3, 8], [5, 7, 11, 13], )).toStrictEqual(2192)
  })

  it("second test example", () => {
    expect(moduleToDecimal([2, 15, 5], [5, 17, 12], )).toStrictEqual(797)
  })
})

describe("Test Relatively Prime numbers", () => {
  it("first test example", () => {
    expect(isRelativelyPrime([[11, 5, 7]], 4)).toStrictEqual(true)
  })

  it("second test example", () => {
    expect(isRelativelyPrime([[11, 5, 7], [3, 8]], 6)).toStrictEqual(false)
  })
})

describe("Test for finding multiplies values", () => {
  it("first test example", () => {
    expect(getMultiplies(16)).toStrictEqual([2, 4, 8, 16])
  })

  it("second test example", () => {
    expect(getMultiplies(17)).toStrictEqual([17])
  })
})

