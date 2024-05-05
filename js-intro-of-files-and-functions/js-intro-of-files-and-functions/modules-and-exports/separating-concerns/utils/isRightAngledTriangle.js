function isRightAngledTriangle(sideA, sideB, sideC) {
  const sideASquared = sideA*sideA
  const sideBSquared = sideB*sideB
  const sideCSquared = sideC*sideC

  return sideCSquared === sideASquared + sideBSquared;
}

module.exports = isRightAngledTriangle;
