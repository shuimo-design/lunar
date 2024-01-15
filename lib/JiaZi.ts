/**
 * @description 六十甲子
 * @author 阿怪
 * @date 2024/1/7 04:03
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */
import { DiZhi, KE, LiuShiJiaZi, TermInfoType, TianGan } from './tools/constant';
import { DateTimeType } from './tools/datetimeFormat';

export const getYearJiaZi = (year: number) => {
  const index = (year - 4) % 60;
  return LiuShiJiaZi[index];
};

export const getMonthJiaZi = (terms: TermInfoType[], date: DateTimeType) => {
  // 获取terms的单数index值
  const needPrev = () => {
    for (let i = 0; i < terms.length; i++) {
      if (i % 2 === 1) {
        continue;
      }
      const term = terms[i];
      if (term.m === date.month) {
        if (date.day < term.d) {
          return -1;
        }
        break;
      }
    }
    return 0;
  };

  // 月份是五年一轮回，取甲子，已知2024年的1月6日小寒之后开始是甲子月
  // 即阳历2023年12月可近似取为甲子月
  // 往前推120年，即1903年12月是甲子月，
  // 便于计算的话从1904第一个月是乙丑月开始。所以这里的算法将是year不要小于1904。。偷懒了
  const startYear = 1904;
  const index = (date.year - startYear) % 5 * 12 + date.month + needPrev();
  return LiuShiJiaZi[index % 60];
};

export const getDayJiaZi = (date: DateTimeType) => {
  // 日是六十天一轮回，已知2024年4月30日是甲子日
  // 那么根据给定日期和甲子日的差值，就可以得到日的干支
  const startDate = new Date('2024-4-30 00:00:00');
  const endDate = new Date(`${date.year}-${date.month}-${date.day} 00:00:00`);
  const diff = (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;
  let index = diff % 60;
  if (index < 0) {
    index = 60 + index;
  }
  return LiuShiJiaZi[index];
};


const getHourDiZhi = (hour: number) => {
  let lunarHour = '';
  let secondHour: 0 | 1 = 0; // 第一个小时或者是第二个小时，用于后面算刻的时候加减
  if (hour === 23 || hour === 0) {
    lunarHour = DiZhi[0];
    if (hour === 0) {
      secondHour = 1;
    }
  } else {
    lunarHour = DiZhi[Math.ceil(hour / 2)];
    secondHour = hour % 2 === 0 ? 1 : 0;
  }
  return {
    lunarHour,
    secondHour
  };
};

export const getTimeJiaZi = (date: DateTimeType) => {


  // 子时 23:00-01:00
  let { lunarHour, secondHour } = getHourDiZhi(date.hour);


  // 已知2024年1月16日是甲子日
  // 那么根据给定日期和甲子日的差值，就可以得到日的干支
  const startDate = new Date('2024-1-15 23:00:00');
  const endDate = new Date(`${date.year}-${date.month}-${date.day} ${date.hour}:00:00`);
  const diff = Math.floor((endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 2);
  let index = diff % 10;
  if (index < 0) {
    index = 10 + index;
  }
  lunarHour = TianGan[index] + lunarHour;

  // 刻按照 明代后时期的刻法，即二小时8刻
  const keIndex = Math.floor(date.minute / 15) + secondHour * 4;
  const lunarMinute = KE[keIndex];


  return {
    lunarHour,
    lunarMinute
  };

};
