/**
 * @description  date format tool function
 * @author 阿怪
 * @date 2024/1/15 15:10
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 *
 * how about optional use dayjs?
 */
import dayjs from 'dayjs';

export type DateTimeType = {
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number
}

export const datetimeFormat = (date: Date | string | number, fmt?: string): DateTimeType => {
  const res = dayjs(date, fmt);

  return {
    year: res.year(),
    month: res.month() + 1,
    day: res.date(),
    hour: res.hour(),
    minute: res.minute(),
    second: res.second()
  };
};
