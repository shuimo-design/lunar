/**
 * @description
 * @author 阿怪
 * @date 2024/1/7 04:31
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { describe, expect, it } from 'vitest';
import { getYearJiaZi } from '../lib/JiaZi';

describe('year to JiaZi test',()=>{

  it('2023',()=>{
    expect(getYearJiaZi(2023)).toBe('癸卯');
  })

  it('2024',()=>{
    expect(getYearJiaZi(2024)).toBe('甲辰');
  })
})
