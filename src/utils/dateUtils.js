import moment from 'moment';

/**
 * Returns a week key (format: YYYY-WW) based on ISO week for given date.
 * Forces Monday as first day of week.
 *
 * @param {string} dateStr - date string in 'YYYY-MM-DD' format.
 * @returns {string}
 */
const getWeekKey = function getWeekKey(dateStr) {
  const m = moment(dateStr, 'YYYY-MM-DD');

  // Force Monday as the first day of the week using locale settings
  m.locale('en', { week: { dow: 1 } });
  return `${m.isoWeekYear()}-${m.isoWeek()}`;
};

export default getWeekKey;
