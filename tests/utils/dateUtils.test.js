import { expect } from 'chai';
import moment from 'moment';

import { getWeekKey } from '../../src/utils';

describe('Date Utils Test', () => {
  describe('getWeekKey Function', () => {
    it('should return correct week key for different dates', () => {
      const testDates = [
        {
          date: '2022-05-10',
          expected: '2022-19',
        },
        {
          date: '2022-05-15',
          expected: '2022-19',
        },
        {
          date: '2022-05-16',
          expected: '2022-20',
        },
        {
          date: '2022-12-31',
          expected: '2022-52',
        },

        // Year boundary edge case
        {
          date: '2023-01-01',
          expected: '2022-52',
        },

        // First week of new year
        {
          date: '2023-01-02',
          expected: '2023-1',
        },
      ];

      testDates.forEach((test) => {
        const weekKey = getWeekKey(test.date);
        expect(weekKey).to.equal(test.expected);
      });
    });

    it('should return correct week key for a given date', () => {
      const dateStr = '2016-01-05';
      const weekKey = getWeekKey(dateStr);
      const expected = `${moment(dateStr, 'YYYY-MM-DD').isoWeekYear()}-${moment(
        dateStr,
        'YYYY-MM-DD',
      ).isoWeek()}`;
      expect(weekKey).to.equal(expected);
    });
  });
});
