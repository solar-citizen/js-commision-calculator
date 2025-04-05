import { getWeekKey } from '../utils';
import {
  calculateCashInFee,
  calculateCashOutFeeLegal,
  calculateCashOutFeeNatural,
} from './feeCalculators';

/**
 * Computes the commission fee for a natural person's cash-out operation.
 * It reads the user's current total for the week (from userTotals) and returns:
 * - The computed fee based on the remaining free limit.
 * - The week key.
 * - The updated weekly total (current total plus the current operation amount).
 *
 * @param {Object} op - The operation object.
 * @param {Object} userTotals - The weekly totals for a specific user.
 * @returns {Object} - An object containing the fee, weekKey, and newTotal.
 */
const computeNaturalCashOutFee = function computeNaturalCashOutFee(op, userTotals) {
  const { amount } = op.operation;
  const weekKey = getWeekKey(op.date);
  const currentTotal = userTotals[weekKey] || 0;
  const fee = calculateCashOutFeeNatural(amount, currentTotal);
  const newTotal = currentTotal + amount;
  return {
    fee,
    weekKey,
    newTotal,
  };
};

/**
 * Process all operations and return an array of commission fees
 * (formatted as strings with 2 decimals).
 *
 * @param {Array} operations - Array of operation objects.
 * @returns {Array<string>} - Array of formatted commission fees.
 */
const processOperations = function processOperations(operations) {
  const results = [];
  const userWeeklyTotals = {};

  operations.forEach((op) => {
    let fee = 0;
    const { amount } = op.operation;

    if (op.type === 'cash_in') {
      fee = calculateCashInFee(amount);
    } else if (op.type === 'cash_out') {
      if (op.user_type === 'natural') {
        const userId = op.user_id;

        // Initialize the user's weekly totals if not already set.
        if (!userWeeklyTotals[userId]) {
          userWeeklyTotals[userId] = {};
        }

        // Compute fee and new total for this operation.
        const {
          fee: computedFee,
          weekKey,
          newTotal,
        } = computeNaturalCashOutFee(op, userWeeklyTotals[userId]);

        fee = computedFee;

        // Update the weekly total for the user.
        userWeeklyTotals[userId][weekKey] = newTotal;
      } else if (op.user_type === 'juridical') {
        fee = calculateCashOutFeeLegal(amount);
      }
    }

    // Format fee to two decimals and add it to the results.
    results.push(fee.toFixed(2));
  });

  return results;
};

export default processOperations;
