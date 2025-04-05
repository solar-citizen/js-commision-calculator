import { expect } from 'chai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { processOperations } from '../../src/services';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

describe('Commission Service Integration', () => {
  describe('Processing Operations using file input from test-input.json', () => {
    it('should correctly process operations loaded from test-input.json', () => {
      const filePath = path.join(dirname, '../..', 'data', 'test-input.json');
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const inputData = JSON.parse(fileContent);

      /**
       * The expected results should match test-input.json file.
       * These are sample expected values - adjust based on actual test data.
       */
      const expectedFees = [
        '0.25',
        '0.50',
        '0.00',
        '0.91',
        '5.00',
        '4.50',
        '0.00',
        '0.50',
        '0.75',
      ];

      const result = processOperations(inputData);
      expect(result).to.deep.equal(expectedFees);
    });
  });

  describe('Additional test cases', () => {
    it('should handle empty input array', () => {
      const result = processOperations([]);
      expect(result).to.deep.equal([]);
    });

    it('should handle varied operation types in a single week', () => {
      const input = [
        // Week 1 - User 1
        {
          date: '2022-07-04',
          user_id: 1,
          user_type: 'natural',
          type: 'cash_out',
          operation: {
            amount: 800.0,
            currency: 'EUR',
          },
        },
        {
          date: '2022-07-05',
          user_id: 1,
          user_type: 'natural',
          type: 'cash_in',
          operation: {
            amount: 500.0,
            currency: 'EUR',
          },
        },
        {
          date: '2022-07-06',
          user_id: 1,
          user_type: 'natural',
          type: 'cash_out',
          operation: {
            amount: 300.0,
            currency: 'EUR',
          },
        },
      ];

      const expectedFees = [
        '0.00',
        '0.15',
        '0.30',
      ];

      const result = processOperations(input);
      expect(result).to.deep.equal(expectedFees);
    });

    it('should handle multiple users with transactions on same days', () => {
      const input = [
        // User 1
        {
          date: '2022-08-15',
          user_id: 1,
          user_type: 'natural',
          type: 'cash_out',
          operation: {
            amount: 900.0,
            currency: 'EUR',
          },
        },

        // User 2
        {
          date: '2022-08-15',
          user_id: 2,
          user_type: 'natural',
          type: 'cash_out',
          operation: {
            amount: 900.0,
            currency: 'EUR',
          },
        },

        // User 1 again
        {
          date: '2022-08-16',
          user_id: 1,
          user_type: 'natural',
          type: 'cash_out',
          operation: {
            amount: 200.0,
            currency: 'EUR',
          },
        },

        // User 2 again
        {
          date: '2022-08-16',
          user_id: 2,
          user_type: 'natural',
          type: 'cash_out',
          operation: {
            amount: 200.0,
            currency: 'EUR',
          },
        },
      ];

      const expectedFees = [
        '0.00',
        '0.00',
        '0.30',
        '0.30',
      ];

      const result = processOperations(input);
      expect(result).to.deep.equal(expectedFees);
    });
  });
});
