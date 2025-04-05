import { roundUpFee } from '../../utils';

/**
 * Calculate commission fee for cash out operations for legal persons.
 * Fee = 0.3% of amount, but not less than 0.50 EUR.
 * Uses standard rounding to two decimals.
 *
 * @param {number} amount
 * @returns {number}
 */
export const calculateCashOutFeeLegal = function calculateCashOutFeeLegal(amount) {
  const fee = amount * 0.003;
  const feeRounded = Number(fee.toFixed(2));
  return feeRounded < 0.5 ? 0.5 : feeRounded;
};

/**
 * Calculate commission fee for cash out operations for natural persons.
 * Fee = 0.3% of amount that exceeds the free limit (1000 EUR per week).
 *
 * @param {number} amount - Current transaction amount
 * @param {number} usedFree - Amount already used from the free limit this week
 * @returns {number}
 */
export const calculateCashOutFeeNatural = function calculateCashOutFeeNatural(amount, usedFree) {
  const freeLimit = 1000;
  const remainingFree = Math.max(0, freeLimit - usedFree);
  const taxableAmount = Math.max(0, amount - remainingFree);
  return roundUpFee(taxableAmount * 0.003);
};
