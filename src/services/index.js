import {
  getWeekKey,
  roundUpFee,
} from '../utils';
import processOperations from './commisionService';
import {
  calculateCashInFee,
  calculateCashOutFeeLegal,
  calculateCashOutFeeNatural,
} from './feeCalculators';

export {
  calculateCashInFee,
  calculateCashOutFeeLegal,
  calculateCashOutFeeNatural,
  getWeekKey,
  processOperations,
  roundUpFee,
};
