/**
 * @description solar to chinese lunar day test.
 * @author 阿怪
 * @date 2024/1/7 03:25
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */


import { describe, expect, it } from 'vitest';
import { solarToLunar } from '../lib/lunarDay';

describe('lunar day test', () => {


  // WARNING: Dates before Oct. 1582 are inaccurate

  it('2023-3-22, leap', () => {
    expect(solarToLunar({ year: 2023, month: 3, day: 22 })).toMatchObject({
      year: 2023, month: 2, day: 1, isLeap: true
    });
  });
  it('2023-3-21', () => {
    expect(solarToLunar({ year: 2023, month: 3, day: 21 })).toMatchObject({
      year: 2023, month: 2, day: 30, isLeap: false
    });
  });

  it('2024-1-7', () => {
    expect(solarToLunar({ year: 2024, month: 1, day: 7 })).toMatchObject({
      year: 2023, month: 11, day: 26, isLeap: false
    });
  });


});
