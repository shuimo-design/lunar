/**
 * @description main func, solar to lunar
 * @author 阿怪
 * @date 2024/1/7 17:35
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { solarToLunar } from './lunarDay';
import { getDayJiaZi, getMonthJiaZi, getTimeJiaZi, getYearJiaZi } from './JiaZi';
import { getTermsByYear } from './terms';
import { datetimeFormat } from './tools/datetimeFormat';

export const lunar = (datetime: Date | string | number) => {

  const dObj = datetimeFormat(datetime);

  const lunarDate = solarToLunar({ year: dObj.year, month: dObj.month, day: dObj.day });
  const lunarYear = getYearJiaZi(lunarDate.year);

  const terms = getTermsByYear(dObj.year);
  let term: undefined | string;

  terms.forEach(t => {
    if (t.m === dObj.month && t.d === dObj.day) {
      term = t.term;
    }
  });


  const lunarMonth = getMonthJiaZi(terms, dObj);
  const lunarDay = getDayJiaZi(dObj);

  const { lunarHour, lunarMinute } = getTimeJiaZi(dObj);

  return {
    year: lunarYear,
    month: lunarMonth,
    day: lunarDay,
    hour: lunarHour,
    minute: lunarMinute,
    term
  };

};
