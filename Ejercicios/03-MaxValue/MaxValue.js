function MaxValue(shares) {
  // Your code here:
  let max = shares[1] - shares[0];
  let min = shares[0];

  for (let i = 0; i < shares.length; i++) {
    const p = shares[i] - min;
    max = Math.max(max, p);
    min = Math.min(min, shares[i]);
  }

  return max;
}

module.exports = MaxValue;
