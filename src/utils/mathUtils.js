/**
 * Rounds a fee up to the smallest currency unit (0.01 for EUR)
 * For natural persons cash out and cash in operations.
 *
 * @param {number} amount
 * @returns {number}
 */
const roundUpFee = function roundUpFee(amount) {
  return Math.ceil(amount * 100) / 100;
};

export default roundUpFee;
