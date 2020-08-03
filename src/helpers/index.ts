export function moduleToDecimal (
  leftovers: number[],
  grounds: number[]
) {
  const M0 = grounds.reduce((accum, ground) => ground * accum, 1);

  const Ms = grounds.map((ground) => M0 / ground);

  const ys = Ms.map((M, i) => {
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

  const final = Ms.reduce((accum, M, i) => accum + M * ys[i], 0);
  return final % M0
}