/**
 * @description check terms
 * @author 阿怪
 * @date 2024/1/7 04:58
 * @version v1.0.0
 *
 * 江湖的业务千篇一律，复杂的代码好几百行。
 */

import { describe, expect, it } from 'vitest';
import { getTermsByYear } from '../lib/terms';

describe('terms', () => {
  it('2023', () => {
    const res = getTermsByYear(2023);
    expect(res.length).toBe(24);
    expect(res[0]).toMatchObject({ m: 1, d: 5, term: '小寒' });
    expect(res[2]).toMatchObject({ m: 2, d: 4, term: '立春' });
    expect(res[23]).toMatchObject({ m: 12, d: 22, term: '冬至' });
  });

  it('2024',()=>{
    const res = getTermsByYear(2024);
    expect(res.length).toBe(24);
    expect(res[0]).toMatchObject({ m: 1, d: 6, term: '小寒' });
    expect(res[2]).toMatchObject({ m: 2, d: 4, term: '立春' });
    expect(res[23]).toMatchObject({ m: 12, d: 21, term: '冬至' });
  })
});
