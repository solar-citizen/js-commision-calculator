import { roundUpFee } from '../../utils';

/**
 * Calculate commission fee for cash in operations.
 * Fee = 0.03% of amount, but no more than 5.00 EUR.
 *
 * @param {number} amount
 * @returns {number}
 */
const calculateCashInFee = function calculateCashInFee(amount) {
  const fee = amount * 0.0003;
  return fee > 5.0 ? 5.0 : roundUpFee(fee);
};

export default calculateCashInFee;
