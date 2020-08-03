export const moduleToDecimal = (
  leftovers: number[],
  grounds: number[]
) => {
  const composeQuantities = grounds.reduce((accum, ground) => ground * accum, 1);
  const quantities = grounds.map((ground) => composeQuantities / ground);

  const auxQuantities = quantities.map((M, i) => {
    const y = M % grounds[i];

    if (y === 0) {
      return leftovers[i]
    }

    for (let x = 1; x < grounds[i]; x++) {
      if (y * x % grounds[i] === leftovers[i]) {
        return x
      }
    }
  })

  return quantities.reduce((accum, M, i) => accum + M * auxQuantities[i], 0) % composeQuantities
}

export const decimalToModule = (
  decimal: number,
  grounds: number[]
) => grounds.map(ground => decimal % ground)