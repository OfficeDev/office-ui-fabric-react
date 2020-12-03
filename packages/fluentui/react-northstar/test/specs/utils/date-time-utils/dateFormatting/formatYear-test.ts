import * as DateGrid from '../../../../../src/utils/date-time-utilities/dateFormatting/formatYear';

enum Months {
  Jan = 0,
  Feb = 1,
  Mar = 2,
  Apr = 3,
  May = 4,
  Jun = 5,
  Jul = 6,
  Aug = 7,
  Sep = 8,
  Oct = 9,
  Nov = 10,
  Dec = 11,
}

describe('formatYear', () => {
  const date = new Date(2016, Months.Apr, 1);
  it('returns default format', () => {
    const result = DateGrid.formatYear(date);
    expect(result).toBe('2016');
  });
});
